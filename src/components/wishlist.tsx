import React from "react";
import { useWishlist } from "./wishlist-data";
import { useCart } from "./cartContext";
import { useAuth } from "./userAuthentication";
import "./wishlist.css";

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();
  const { cart, handleAddToCart, removeFromCart } = useCart();
    const { users } = useAuth();
    console.log(users)
  
  return (
    <div>
       <div className="wishlist-page">
        <div className="wishlist-header">
          <h1>Wishlist</h1>
          {users && (
            <div className="user-block">
                   User:{users.name} 
              <div>Email:{users.email}</div>
            </div>
          )}
        </div>
        <div className="wishlist-grid">
          {wishlist.length === 0 ? (
            <p>No books in wishlist</p>
          ) : (
            wishlist.map((book) => {
              const inCart = cart.some((c) => c.id === book.id);
              return (
                <div key={book.id} className="wishlist-card">
                  <div className="list-inside"><img src={book.bookImage} alt={book.bookName} /></div>
                  <div>
                  <h4>{book.bookName}</h4>
                  <p>{book.author}</p>
                  <p>₹{book.price}</p>
                  <div>
                    <button
                      onClick={() =>
                        inCart ? removeFromCart(book.id) : handleAddToCart(book)
                      }
                      className={inCart ? "remove" : "cart"}
                    >
                      {inCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      </div>
  )}
export default Wishlist;















