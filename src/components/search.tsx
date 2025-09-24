import { useState } from "react";
import "./search.css";
import { cardItemType } from "../types/prop-type";
import { BookCard } from "./book-card";
import { Cart } from "./cart";
import { useCart } from "./cartContext";

type searchProps = {
  books: cardItemType[];
};

// type cartProps = {
//     addToCart:(book:cardItemType)=>void;
//     removeFromCart:(Id:number)=>void;
//     cart: cardItemType[];
//     incrementQuantity : (bookId: number) =>void
//     decrementQuantity : (bookId: number) => void
// }

export const SearchBar = ({ books }: searchProps) => {
  const [search, setSearch] = useState("");
    const{cart,handleAddToCart,removeFromCart,incrementQuantity,decrementQuantity} = useCart()

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
        <h2 className="title">Book Store📚</h2>
        <p>Find your favourite book📚</p>
        <input
          type="text"
          placeholder="Search for books"
          value={search}
          onChange={bookSearch}
        />
      </div>
     
      <div className="main">
        <div className="card-place">
          {filterBook.map((book) => (
            <BookCard
              book={book}
              addToCart={handleAddToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          ))}
        </div>
        <div className="your-cart-space">
        <Cart cart={cart}
            removeFromCart={removeFromCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
        /></div></div>
    </>
  );
};
export default SearchBar;
