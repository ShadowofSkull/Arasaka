"use client";
import Form from "next/form";
import { useState, useRef, useEffect } from "react";
import {
  getProductRecommendations,
  ChatMessage,
  Product,
} from "@/utils/geminiUtils";
import { toggleFavorite } from "@/utils/favoriteUtils";
import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";

export default function Query() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when chat history updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

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

    setChatHistory((prev) => [...prev, userMessage]);
    setText("");
    setIsLoading(true);

    // Create a placeholder for the assistant's message
    const assistantMessageId = uuidv4();
    setChatHistory((prev) => [
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
      setChatHistory((prev) =>
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
      setChatHistory((prev) =>
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
      {/* Chat history container - removing pb-24 as it's no longer needed */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-zinc-100 dark:scrollbar-thumb-red-600 dark:scrollbar-track-zinc-800 w-full max-w-full rounded-t-xl"
      >
        {showWelcome ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center space-y-4 max-w-md px-4">
              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
                Welcome to Arasaka Parts Assistant
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Ask about computer parts and I'll find the best options for your
                needs.
              </p>
            </div>
          </div>
        ) : (
          chatHistory.map((message) => (
            <div
              key={message.id}
              className={`w-full max-w-full ${
                message.role === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }`}
            >
              {/* Message bubble */}
              <div
                className={`rounded-2xl p-4 shadow-sm max-w-[85%] overflow-hidden ${
                  message.role === "user"
                    ? "bg-red-500 text-white"
                    : "backdrop-blur-xl bg-white/60 dark:bg-zinc-800/40 border border-white/20 dark:border-zinc-700/30"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Arasaka Assistant
                    </h3>
                  </div>
                )}
                {message.role === "user" ? (
                  <p className="text-sm text-white break-words whitespace-pre-wrap">
                    {message.content}
                  </p>
                ) : (
                  <div className="markdown-content text-sm text-zinc-800 dark:text-zinc-200 break-words">
                    <ReactMarkdown
                      components={{
                        h1: ({ node, ...props }) => (
                          <h1 className="text-lg font-bold my-2" {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2 className="text-md font-bold my-2" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3 className="text-base font-bold my-1" {...props} />
                        ),
                        h4: ({ node, ...props }) => (
                          <h4 className="text-sm font-bold my-1" {...props} />
                        ),
                        p: ({ node, ...props }) => (
                          <p className="my-1" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul className="list-disc pl-5 my-2" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol className="list-decimal pl-5 my-2" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                          <li className="my-0.5" {...props} />
                        ),
                        a: ({ node, ...props }) => (
                          <a
                            className="text-red-500 hover:underline"
                            {...props}
                          />
                        ),
                        code: ({ node, inline, ...props }) =>
                          inline ? (
                            <code
                              className="bg-zinc-100 dark:bg-zinc-700 px-1 py-0.5 rounded text-red-500 dark:text-red-300 text-xs"
                              {...props}
                            />
                          ) : (
                            <code
                              className="block bg-zinc-100 dark:bg-zinc-700 p-2 rounded text-red-500 dark:text-red-300 text-xs my-2 overflow-x-auto"
                              {...props}
                            />
                          ),
                        pre: ({ node, ...props }) => (
                          <pre
                            className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded my-2 overflow-x-auto"
                            {...props}
                          />
                        ),
                        blockquote: ({ node, ...props }) => (
                          <blockquote
                            className="border-l-4 border-red-300 dark:border-red-700 pl-3 my-2 text-zinc-600 dark:text-zinc-400 italic"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))
        )}

        {/* Product cards - rendered with better mobile support */}
        {chatHistory.map((message) =>
          message.role === "assistant" &&
          !!message.products &&
          message.products.length > 0 ? (
            <div
              key={`products-${message.id}`}
              className="mt-4 space-y-4 w-full"
            >
              {message.products.map((product) => (
                <div
                  key={product.id}
                  className="backdrop-blur-xl bg-white/80 dark:bg-zinc-800/30 rounded-2xl overflow-hidden border border-white/40 dark:border-zinc-700/40 shadow-sm hover:shadow-md transition-all duration-300 group w-full"
                >
                  <div className="h-1.5 bg-gradient-to-r from-red-400 via-red-500 to-red-400"></div>
                  <div className="p-4 overflow-hidden">
                    <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                      <h4 className="text-base font-medium text-zinc-900 dark:text-white break-words max-w-[75%] overflow-hidden">
                        {product.name}
                      </h4>
                      <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-xs font-medium px-3 py-1 rounded-full shrink-0 border border-red-100 dark:border-red-800/30">
                        {product.brand}
                      </span>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-3 break-words overflow-hidden leading-relaxed">
                      {product.description}
                    </p>

                    <div className="p-3 backdrop-blur-md bg-zinc-50/80 dark:bg-zinc-900/50 rounded-xl mb-3 overflow-hidden border border-zinc-100/80 dark:border-zinc-800/50">
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 break-words whitespace-normal leading-relaxed">
                        <span className="font-medium text-red-500 dark:text-red-400">
                          Why we recommend this:
                        </span>{" "}
                        {product.recommendationReason}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="text-base font-medium text-zinc-900 dark:text-white">
                        MYR {product.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleFavorite(product)}
                          className="text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                          aria-label={
                            favorites[product.id]
                              ? "Remove from favorites"
                              : "Add to favorites"
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={
                              favorites[product.id]
                                ? "#ef4444" // Red-500 color for filled state
                                : "none"
                            }
                            stroke={
                              favorites[product.id]
                                ? "none" // Remove stroke when favorited
                                : "currentColor"
                            }
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        </button>
                        <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 transform group-hover:scale-[1.02] hover:shadow-sm shrink-0 flex items-center">
                          View Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>

      {/* Input area - removing absolute positioning */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-4 w-full rounded-b-xl">
        <Form action={handleSubmit} className="flex gap-2 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <textarea
              value={text}
              onChange={handleChange}
              id="query"
              name="query"
              placeholder="Ask about parts or products..."
              className="w-full p-3 pr-10 rounded-xl bg-white/80 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 placeholder-zinc-400 dark:placeholder-zinc-500 resize-none drop-shadow-sm focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/20 transition-all duration-300 min-h-[60px] max-h-[120px] overflow-y-auto backdrop-blur-md"
              maxLength={500}
              rows={1}
            />
            <div className="absolute bottom-2 right-3 text-xs text-zinc-400 dark:text-zinc-500">
              {text.length}/500
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium p-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none h-[60px] min-w-[60px] flex items-center justify-center"
            disabled={isLoading || !text.trim()}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            )}
          </button>
        </Form>
      </div>
    </div>
  );
}
