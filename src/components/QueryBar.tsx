"use client";
import Form from "next/form";
import { useState } from "react";
import { getProductRecommendations, AiResponse } from "@/utils/geminiUtils";

export default function Query() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AiResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (formData: FormData) => {
    const query = formData.get("query") as string;
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const result = await getProductRecommendations(query);
      setResponse(result);
    } catch (error) {
      console.error("Error getting recommendations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full relative z-10 overflow-hidden">
      {/* Input Section */}
      <Form
        action={handleSubmit}
        className="flex flex-col justify-center items-center p-6 w-full"
      >
        <label
          htmlFor="query"
          className="text-xs uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-400 self-start mb-2"
        >
          Ask about parts
        </label>
        <div className="relative w-full">
          <textarea
            value={text}
            onChange={handleChange}
            id="query"
            name="query"
            placeholder="What are you looking to build today?"
            className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-800/50 border-0 placeholder-zinc-400 dark:placeholder-zinc-500 resize-none drop-shadow-sm focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/20 transition-all duration-300 max-h-[200px] overflow-y-auto backdrop-blur-md"
            maxLength={500}
          />
          <div className="absolute bottom-3 right-3 text-xs text-zinc-400 dark:text-zinc-500">
            {text.length}/500
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
              Processing
            </span>
          ) : (
            "Find Parts"
          )}
        </button>
      </Form>
      {/* Response Section */}
      {response && (
        <div className="mt-8 space-y-8 w-full overflow-hidden">
          {/* AI Message */}
          <div className="backdrop-blur-xl bg-white/60 dark:bg-zinc-800/40 rounded-2xl p-6 shadow-sm border border-white/20 dark:border-zinc-700/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
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
              <h3 className="ml-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Arasaka Assistant
              </h3>
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 break-words whitespace-normal text-base leading-relaxed">
              {response.message}
            </p>
          </div>

          {/* Product Recommendations */}
          <div className="w-full overflow-hidden space-y-4">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
              Recommended Products
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {response.suggestedProducts.map((product) => (
                <div
                  key={product.id}
                  className="backdrop-blur-xl bg-white/80 dark:bg-zinc-800/30 rounded-2xl overflow-hidden border border-white/40 dark:border-zinc-700/40 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="h-1.5 bg-gradient-to-r from-red-400 via-red-500 to-red-400"></div>
                  <div className="p-6 overflow-hidden">
                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <h4 className="text-lg font-medium text-zinc-900 dark:text-white break-words max-w-[75%] overflow-hidden">
                        {product.name}
                      </h4>
                      <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-xs font-medium px-3 py-1 rounded-full shrink-0 border border-red-100 dark:border-red-800/30">
                        {product.brand}
                      </span>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-5 break-words overflow-hidden leading-relaxed">
                      {product.description}
                    </p>

                    <div className="p-4 backdrop-blur-md bg-zinc-50/80 dark:bg-zinc-900/50 rounded-xl mb-5 overflow-hidden border border-zinc-100/80 dark:border-zinc-800/50">
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 break-words whitespace-normal leading-relaxed">
                        <span className="font-medium text-red-500 dark:text-red-400">
                          Why we recommend this:
                        </span>{" "}
                        {product.recommendationReason}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center gap-3">
                      <span className="text-xl font-medium text-zinc-900 dark:text-white">
                        MYR {product.price.toFixed(2)}
                      </span>
                      <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform group-hover:scale-[1.02] hover:shadow-sm shrink-0 flex items-center">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
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
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
