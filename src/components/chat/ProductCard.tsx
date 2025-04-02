import { Product } from "@/utils/geminiUtils";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (product: Product) => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/80 dark:bg-zinc-800/30 rounded-2xl overflow-hidden border border-white/40 dark:border-zinc-700/40 shadow-sm hover:shadow-md transition-all duration-300 group w-full">
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
              onClick={() => onToggleFavorite(product)}
              className="text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isFavorite ? "#ef4444" : "none"}
                stroke={isFavorite ? "none" : "currentColor"}
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
  );
}
