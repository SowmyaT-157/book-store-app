
import React from 'react';
import { cardItemType } from '../types/prop-type';
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
        <p>Cart is empty.</p>
      ) : (
        cart.map((book) => (
          <div className="cart-item" key={book.id}>
            <div className="cart-books right">
              <img src={book.bookImage} alt={book.bookName} className="cart-image" />
            </div>
            <div className="cart-details left">
              <p><strong>{book.bookName}</strong></p>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              <p>Quantity: {book.quantity}</p>
              <div className="cart-buttons">
                <div className="but1"><button id="but" onClick={() => incrementQuantity(book.id)}>+</button></div>
                <div className="but2"><button id="but" onClick={() => decrementQuantity(book.id)}>-</button></div>
                <div className="but3"><button id="but" onClick={() => removeFromCart(book.id)}>Remove</button></div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};






