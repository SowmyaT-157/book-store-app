
import React from 'react';
import { cardItemType } from '../types/prop-type';
import './cart.css'
import { useNavigate } from 'react-router-dom';


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

  const subtotal = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
  const shipping = cart.length > 0 ? 80 : 0;
  const total = subtotal + shipping;
  const navigate = useNavigate()
  return (
    <div className="cart-list">
      <div className='icon'><h1>Your Cart </h1>
      <button className="wishlist-head"onClick={()=>navigate('/wishlist')}>wishlist</button>
      <div><h3>🛒{cart.length}</h3></div></div>
      {cart.length === 0 ? (
        <p>Cart is empty...choose a book</p>
      ) : (
        cart.map((book) => (
          <div className="cart-book" key={book.id}>
            <div>
              <img src={book.bookImage} alt={book.bookName} />
            </div>
            <div>
              <div className="cart-book-details">
                <p><strong>{book.bookName}</strong></p>
                <p>Author: {book.author}</p>
                <p>Price₹: {book.price}</p>
                <p>Quantity: {book.quantity}</p>
                <div className="cart-buttons">
                  <button onClick={() => incrementQuantity(book.id)}>+</button>
                  <button onClick={() => decrementQuantity(book.id)}>-</button>
                  <button onClick={() => removeFromCart(book.id)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className='cart-summary'>
        <h3>Order Summary</h3>
        <p>Subtotal	₹: {subtotal.toFixed(2)}</p>
        <p>Shipping	₹: {shipping.toFixed(2)}</p>
        ---------------------------------------
        <p>Total	₹: {total.toFixed(2)}</p>
      </div>
    </div>
  );
};






