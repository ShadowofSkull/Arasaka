import { Product } from "@/utils/geminiUtils";
import ProductCard from "@/components/chat/ProductCard";

interface ProductListProps {
  products: Product[];
  favorites: { [key: string]: boolean };
  onToggleFavorite: (product: Product) => void;
}

export default function ProductList({
  products,
  favorites,
  onToggleFavorite,
}: ProductListProps) {
  return (
    <div className="mt-4 space-y-4 w-full">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites[product.id] || false}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
