import React, { useState, useEffect } from 'react';
import BookCard from './book-card';
import './book-list.css'
const BookData = () => {
   const [cards, setCards] = useState([])

   const fetchData = async() => {
     let a = await fetch('https://mocki.io/v1/8348d43c-fcc4-43fe-86e1-22fdfe363f9d')
     let data = await a.json()
     setCards(data)
     console.log(data)
   }
   useEffect (()=> {
     fetchData()
   },[])
   return(
    <>
      <div className = "container">
        <div className = "book-list">
          {cards.map(Book =>(
            <BookCard booksdata = {Book} />
          ))}
        </div>

      </div>
    </>
   )
}
export default BookData