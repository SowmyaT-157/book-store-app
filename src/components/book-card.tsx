import { cardItemType } from "../types/prop-type";
import './book-card.css';

type BookCardProps = {
    book: cardItemType;
    addToCart:(book:cardItemType)=>void;
    removeFromCart:(Id:number)=>void;
    cart: cardItemType[];
}


export function BookCard({ book, addToCart,removeFromCart, cart}: BookCardProps) {

  const isAdded = cart.some(bookInCart => bookInCart.id === book.id )
  const handleButtonClick = () => {
    if (isAdded) {
      removeFromCart(book.id);
    } else {
      addToCart(book);
    }
  };
  return (
    <div className="card">
      <div>
        <img src={book.bookImage} alt={book.bookName} />
      </div>
      <div>
        <h2 className="card-title">{book.bookName}</h2>
        <p className="card-price">Price	₹: <span>{book.price}</span></p>
        <p className="card-author">Author: <span>{book.author}</span></p>
      </div>
      <button onClick={handleButtonClick} className={`cart-button-color ${isAdded ? "remove" : "add"}`}>
         {isAdded ? "REMOVE FROM CART" : "ADD TO CART"}
      </button> 
      </div>
  );
}


