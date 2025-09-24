import React from "react";
import { useWishlist } from "./wishlist-data";
import { useCart } from "./cartContext";
import { useAuth } from "./userAuthentication";
import "./wishlist.css";

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();
  const { cart, handleAddToCart, removeFromCart } = useCart();
     const { users } = useAuth();
    if (!users) {
       return <p>Please log in to view your wishlist.</p>;
    }
  return (
    <div>
       <div className="wishlist-page">
        <div className="wishlist-header">
          <h1>Wishlist</h1>
          {users && (
            <div className="user-block">
              <div className="user-name">
                {users.name} 
              </div>
              <div className="user-email">{users.email}</div>
            </div>
          )}
        </div>
         <div className="wishlist-grid">
          {wishlist.length === 0 ? (
            <p>No books in wishlist yet</p>
          ) : (
            wishlist.map((book) => {
              const inCart = cart.some((c) => c.id === book.id);
              return (
                <div key={book.id} className="wishlist-card">
                  <img src={book.bookImage} alt={book.bookName} />
                  <h4>{book.bookName}</h4>
                  <p className="author">{book.author}</p>
                  <p className="price">₹{book.price}</p>
                  <div className="card-actions">
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
              );
            })
          )}
        </div>
      </div>
      </div>
  )}
export default Wishlist;















