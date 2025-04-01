import { Product } from "./geminiUtils";

// Key for storing favorites in localStorage
const FAVORITES_KEY = "arasaka-favorites";

// Get all favorites from localStorage
export const getFavorites = (): Product[] => {
  if (typeof window === "undefined") return [];

  const favoritesJson = localStorage.getItem(FAVORITES_KEY);
  if (!favoritesJson) return [];

  try {
    return JSON.parse(favoritesJson);
  } catch (error) {
    console.error("Error parsing favorites:", error);
    return [];
  }
};

// Add a product to favorites
export const addToFavorites = (product: Product): void => {
  const currentFavorites = getFavorites();

  // Check if product is already in favorites
  if (!currentFavorites.some((fav) => fav.id === product.id)) {
    const updatedFavorites = [...currentFavorites, product];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  }
};

// Remove a product from favorites
export const removeFromFavorites = (productId: string): void => {
  const currentFavorites = getFavorites();
  const updatedFavorites = currentFavorites.filter(
    (fav) => fav.id !== productId
  );
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

// Check if a product is in favorites
export const isInFavorites = (productId: string): boolean => {
  const currentFavorites = getFavorites();
  return currentFavorites.some((fav) => fav.id === productId);
};

// Toggle a product in favorites (add if not present, remove if present)
export const toggleFavorite = (product: Product): boolean => {
  const isFavorited = isInFavorites(product.id);

  if (isFavorited) {
    removeFromFavorites(product.id);
    return false;
  } else {
    addToFavorites(product);
    return true;
  }
};
