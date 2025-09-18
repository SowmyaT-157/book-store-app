import React from "react";
import { CardProps } from "../types/prop-type";
import './book-card.css';
type BookCardProps = {
    booksdata: CardProps;
}

const BookCard = ({booksdata} : BookCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={booksdata.bookImage} alt="book-image" />
        <h5 className ="card-id">Book Id : {booksdata.id}</h5>
        <h5 className="card-title">Title: {booksdata.bookName}</h5>
        <p className="card-price">Price:₹ {booksdata.price}</p>
        <p className="card-author">Author: {booksdata.author}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default BookCard;

