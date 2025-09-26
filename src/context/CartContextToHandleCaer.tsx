import { useContext,createContext, ReactNode, } from "react"
import { useState } from "react"
import { cardItemType } from "../types/AddToCartProps";

export interface CartContextProps {
  cart: cardItemType[];
  removeFromCart : (bookId: number) =>void;
  incrementQuantity : (bookId: number) =>void;
  decrementQuantity : (bookId: number) => void;
  handleAddToCart: (book: cardItemType) => void;
  isInCart: (bookid: number) => boolean
  cards:cardItemType[];
  setCards:Function
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<cardItemType[]>([]);
  const [cards, setCards] = useState<cardItemType[]>([])


const handleAddToCart = (book: cardItemType) => {
    setCart((previousCart) => {
      const existingBook = previousCart.find((books) => books.id === book.id);
      if (existingBook) {
        return previousCart.map((books) =>
          books.id === book.id
            ? { ...books, quantity: books.quantity + 1 }
            : books,
        );
      }
      console.log(cart);
      return [...previousCart, { ...book, quantity: 1 }];
    });
  };


  const removeFromCart = (bookId: number) => {
    setCart((previousCart) =>
      previousCart.filter((books) => books.id !== bookId)
    );
  };


  const incrementQuantity = (bookId: number) => {
        setCart(previousCart => previousCart.map(books => books.id === bookId ? { ...books, quantity: books.quantity + 1 } : books)
        );
    };


  const decrementQuantity = (bookId: number) => {
        setCart(previousCart =>
            previousCart.map(books => books.id === bookId ? { ...books, quantity: books.quantity - 1 } : books).filter(books => books.quantity > 0)
        );
    };
   const isInCart =(bookid:number) =>{
      return cart.some(item=>item.id === bookid)
   }

  return (
      <CartContext.Provider value={{ cart,handleAddToCart,removeFromCart, incrementQuantity,decrementQuantity,isInCart,cards,setCards  }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useWishlist within a Wishlist Provider');
    }
    return context;
  };
