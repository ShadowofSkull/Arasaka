export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  recommendationReason: string;
};

export type AiResponse = {
  message: string;
  suggestedProducts: Array<Product>;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  products?: Product[];
  timestamp: number;
};

export const getProductRecommendations = async (
  query: string
): Promise<AiResponse> => {
  try {
    const response = await fetch("/api/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting recommendations:", error);
    return {
      message:
        "I apologize, but I encountered an error processing your request. Please try again.",
      suggestedProducts: [],
    };
  }
};
