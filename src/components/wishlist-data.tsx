
import React, { createContext, useContext, useState } from "react";
import { cardItemType } from "../types/prop-type";

type WishlistContextType = {
  wishlist: cardItemType[];
  addToWishlist: (book: cardItemType) => void;
  removeFromWishlist: (id: string) => void;
};


const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<cardItemType[]>([]);
  const addToWishlist = (book: cardItemType) => {
    setWishlist((prev) => {
      if (prev.some((b) => b.id === book.id)) return prev;
      return [...prev, book];
    });
  };
   const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((b) => b.id.toString() !== id));
  };
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};


export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
};









































