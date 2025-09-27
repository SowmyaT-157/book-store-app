import { useNavigate } from "react-router-dom";
import { cardItemType } from "../types/AddToCartProps";
import '../styles/book-card.css'
import { useWishlist } from "../context/WishlistData";


type BookCardProps = {
    book: cardItemType;
    addToCart:(book:cardItemType)=>void;
    removeFromCart:(Id:number)=>void;
    cart: cardItemType[];
  
}

export function BookCard({ book, addToCart,removeFromCart, cart}: BookCardProps) {
  const {addToWishlist} = useWishlist()
  const isAdded = cart.some(bookInCart => bookInCart.id === book.id )
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (isAdded) {
      removeFromCart(book.id);
    } else {
      addToCart(book);
    }
  };
  const handleDetails=()=>{
    navigate("/book-details", {state: {filterBook :book}})
  }
  return (
    <div className="card">
      
      <div>
        <img src={book.bookImage} alt={book.bookName} onClick={handleDetails} />
      </div>
      <div>
        <h2 className="card-title">{book.bookName}</h2>
        <p className="card-price">Price	₹: <span>{book.price}</span></p>
        <p className="card-author">Author: <span>{book.author}</span></p>
      </div>
      <div className="button-space">
        <button onClick={handleButtonClick} className={`cart-button-color ${isAdded ? "remove" : "add"}`}>
          {isAdded ? "REMOVE FROM CART" : "ADD TO CART"}
        </button> 
        <button className="wish-list-button"onClick={()=>addToWishlist(book)}>WishList</button>
      </div>
      </div>
  );
}


