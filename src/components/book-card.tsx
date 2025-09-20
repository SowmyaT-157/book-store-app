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
      <div className="card-image">
        <img src={book.bookImage} alt={book.bookName} />
      </div>
      <div className="card-content">
        <h2 className="title">{book.bookName}</h2>
        <p className="price">Price: <span>{book.price}</span></p>
        <p className="discount">Author: <span>{book.author}</span></p>
      </div>
      <button onClick={handleButtonClick}>{isAdded ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>
  );
}


