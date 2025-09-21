import React, { useState } from "react";
import { cardItemType } from "../types/prop-type";

import './book-card.css';
type BookCardProps = {
    book: cardItemType;
    addToCart:(book:cardItemType)=>void;
    removeFromCart:(Id:number)=>void;
    isInCart:(Id:number)=>boolean;
}


export function BookCard({ book, addToCart,removeFromCart,isInCart}: BookCardProps) {
  const [isAdded, setIsAdded] = useState(isInCart(book.id));
  const handleButtonClick = () => {
    if (isAdded) {
      removeFromCart(book.id);
      setIsAdded(false)
    } else {
      addToCart(book);
    }
    setIsAdded(!isAdded);
  };
  return (
    <div className="card">
      <div>
        <img src={book.bookImage} alt={book.bookName} />
      </div>
      <div>
        <h2 className="card-title">{book.bookName}</h2>
        <p className="card-price">Price: <span>{book.price}</span></p>
        <p className="card-author">Author: <span>{book.author}</span></p>
      </div>
      <span></span>
      <button onClick={handleButtonClick}>{isAdded ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>
  );
}


