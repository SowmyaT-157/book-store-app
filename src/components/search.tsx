import { useState } from "react";
import "./search.css";
import { cardItemType } from "../types/prop-type";
import { BookCard } from "./book-card";
import { Cart } from "./cart";
type searchProps = {
  books: cardItemType[];
};
type CartType = {
  id: number;
  bookName: string;
  price: number;
  author: string;
  bookImage: string;
  quantity: number;
};

export const SearchBar = ({ books }: searchProps) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartType[]>([]);

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
      previousCart.filter((books) => books.id !== bookId),
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
  const isInCart = (bookId: number): boolean => {
    return cart.some((book) => book.id === bookId);
  };

  const bookSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filterBook: cardItemType[] = books.filter(
    (card: { bookName: string; author: string }) => {
      return (
        card.bookName.toLowerCase().includes(search.toLowerCase()) ||
        card.author.toLowerCase().includes(search.toLowerCase())
      );
    },
  );
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search for books"
          value={search}
          onChange={bookSearch}
        />
      </div>
      <div>
      <div className="book-list">{filterBook.map((book) => (
        <BookCard
          book={book}
          addToCart={handleAddToCart}
          removeFromCart={removeFromCart}
          isInCart={isInCart}
        />
      ))}
       <div className="display-cart"><Cart cart={cart}
          removeFromCart={removeFromCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
      /></div></div>
      </div>
    </>
  );
};
export default SearchBar;
