
import React from 'react';
import { cardItemType } from '../types/prop-type';
import './cart.css'
export type  CartProps = {
  cart: cardItemType[];
  incrementQuantity: (bookId: number) => void;
  decrementQuantity: (bookId: number) => void;
  removeFromCart: (bookId: number) => void;
}
export const Cart: React.FC<CartProps> = ({
  cart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
}) => {
  return (
    <div className="cart-list" id="right">
      <h2>Your Cart  books</h2>
      {cart.length === 0 ? (
        <p>Cart is empty...choose a book</p>
      ) : (
        cart.map((book) => (
          <div className="cart-book" key={book.id}>
            <div className="cart-book-image">
              <img src={book.bookImage} alt={book.bookName} className="cart-image" />
            </div>
            <div className='cart-display'>
            <div className="cart-book-details">
              <p><strong>{book.bookName}</strong></p>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              <p>Quantity: {book.quantity}</p>
              <div className="cart-buttons">
                <div className="inc"><button id="but" onClick={() => incrementQuantity(book.id)}>+</button></div>
                <div className="dec"><button id="but" onClick={() => decrementQuantity(book.id)}>-</button></div>
                <div className="rem"><button id="but" onClick={() => removeFromCart(book.id)}>Remove</button></div>
              </div>
            </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};






