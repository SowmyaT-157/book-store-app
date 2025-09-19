import React from "react";
// import { CardProps } from "../types/prop-type";
import './book-card.css';
// type BookCardProps = {
//     filterBook: CardProps[];
// }

const BookCard = ({filterBook} : any) => {
  return (
    <div>
        {filterBook.length ===0 ? (
           <p> sorry.. no book found </p>
        ):(filterBook.map((book:any)=>(
        <div className="card">
            <div className="card-body">
            <img src={book.bookImage} alt="book-image" />
            <h5 className ="card-id">Book Id : {book.id}</h5>
            <h5 className="card-title">Title: {book.bookName}</h5>
            <p className="card-price">Price:₹ {book.price}</p>
            <p className="card-author">Author: {book.author}</p>
            <button>Add to cart</button></div>
           </div>
        )))}
      </div>
    
  );
}
export default BookCard;

