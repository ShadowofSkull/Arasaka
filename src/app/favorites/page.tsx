"use client";

import { useEffect, useState } from "react";
import { Product } from "@/utils/geminiUtils";
import { getFavorites, removeFromFavorites } from "@/utils/favoriteUtils";
import Link from "next/link";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get favorites from localStorage
    setFavorites(getFavorites());
    setLoading(false);
  }, []);

  const handleRemoveFromFavorites = (productId: string) => {
    removeFromFavorites(productId);
    setFavorites(getFavorites());
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center animate-pulse">
          <svg
            className="w-4 h-4 text-white"
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
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 pt-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          Your Favorites
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          {favorites.length > 0
            ? `You have ${favorites.length} favorite ${
                favorites.length === 1 ? "product" : "products"
              }.`
            : "You have no favorite products yet."}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-10 h-10 text-zinc-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-2">
            No favorites yet
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Start adding products to your favorites list by clicking the heart
            icon.
          </p>
          <Link
            href="/"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="backdrop-blur-xl bg-white/80 dark:bg-zinc-800/30 rounded-2xl overflow-hidden border border-white/40 dark:border-zinc-700/40 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="h-1.5 bg-gradient-to-r from-red-400 via-red-500 to-red-400"></div>
              <div className="p-5">
                <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                  <h2 className="text-lg font-medium text-zinc-900 dark:text-white break-words max-w-[75%] overflow-hidden">
                    {product.name}
                  </h2>
                  <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-xs font-medium px-3 py-1 rounded-full shrink-0 border border-red-100 dark:border-red-800/30">
                    {product.brand}
                  </span>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 break-words overflow-hidden leading-relaxed">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium text-zinc-900 dark:text-white">
                    MYR {product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRemoveFromFavorites(product.id)}
                      className="text-red-500 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                      aria-label="Remove from favorites"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
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
      )}

      {favorites.length > 0 && (
        <div className="mt-8 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
                Total Value
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Combined value of all your favorite products
              </p>
            </div>
            <div className="text-2xl font-bold text-red-500">
              MYR{" "}
              {favorites
                .reduce((sum, product) => sum + product.price, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
