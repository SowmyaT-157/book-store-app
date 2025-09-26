
import React, { createContext, useContext, useState } from "react";
import { cardItemType } from "../types/AddToCartProps";

type WishlistContextType = {
  wishlist: cardItemType[];
  addToWishlist: (book: cardItemType) => void;
  removeFromWishlist: (id: string) => void;
  isInList:(bookid: number) => boolean
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

  const isInList =(bookid:number) =>{
  return wishlist.some(item=>item.id === bookid)
}
  return (
    <WishlistContext.Provider value={{ wishlist,isInList, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
};









































