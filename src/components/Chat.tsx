"use client";

import { useState, useRef } from "react";
import {
  getProductRecommendations,
  ChatMessage,
  Product,
} from "@/utils/geminiUtils";
import { toggleFavorite } from "@/utils/favoriteUtils";
import { v4 as uuidv4 } from "uuid";
import WelcomeMessage from "@/components/chat/WelcomeMessage";
import MessageItem from "@/components/chat/MessageItem";
import ProductList from "@/components/chat/ProductList";
import MessageInput from "@/components/chat/MessageInput";

export default function Chat() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (formData: FormData) => {
    const query = formData.get("query") as string;
    if (!query.trim()) return;

    // Hide welcome message once user starts chatting
    setShowWelcome(false);

    // Add user message to chat immediately
    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: "user",
      content: query,
      timestamp: Date.now(),
    };

    setChat((prev) => [...prev, userMessage]);
    setText("");
    setIsLoading(true);

    // Create a placeholder for the assistant's message
    const assistantMessageId = uuidv4();
    setChat((prev) => [
      ...prev,
      {
        id: assistantMessageId,
        role: "assistant",
        content: "...",
        timestamp: Date.now(),
      },
    ]);

    try {
      const result = await getProductRecommendations(query);

      // Update the assistant's message with the actual response
      setChat((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                content: result.message,
                products: result.suggestedProducts,
              }
            : msg
        )
      );
    } catch (error) {
      console.error("Error getting recommendations:", error);
      // Update with error message
      setChat((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                content:
                  "I apologize, but I encountered an error processing your request. Please try again.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = (product: Product) => {
    const isFavorited = toggleFavorite(product);
    setFavorites((prev) => ({
      ...prev,
      [product.id]: isFavorited,
    }));
  };

  return (
    <div className="w-full flex flex-col h-[70vh]">
      {/* Chat history container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-zinc-100 dark:scrollbar-thumb-red-600 dark:scrollbar-track-zinc-800 w-full max-w-full rounded-t-xl"
      >
        {showWelcome ? (
          <WelcomeMessage />
        ) : (
          <>
            {/* Chat messages */}
            {chat.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))}

            {/* Product recommendations */}
            {chat.map((message) =>
              message.role === "assistant" &&
              !!message.products &&
              message.products.length > 0 ? (
                <ProductList
                  key={`products-${message.id}`}
                  products={message.products}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              ) : null
            )}
          </>
        )}
      </div>

      {/* Input area */}
      <MessageInput
        text={text}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
