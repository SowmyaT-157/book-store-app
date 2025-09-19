import React, { useState, useEffect } from 'react';
import BookCard from './book-card';
import './book-list.css'
import { CardProps } from '../types/prop-type';
import SearchBar from './search';
const BookData = () => {
  const [cards, setCards] = useState<CardProps[]>([])
  const [search,setSearch] = useState('')

  const fetchData = async() => {
    let a = await fetch('https://mocki.io/v1/8348d43c-fcc4-43fe-86e1-22fdfe363f9d')
    let data = await a.json()
    setCards(data)
    console.log(data)
   }
   useEffect (()=> {
    fetchData()
   },[])

  const bookSearch = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setSearch(event.target.value)
  }
  const filterBook:CardProps[] = cards.filter((card)=>{return(
      (card.bookName.toLowerCase().includes(search.toLowerCase())) || 
      (card.author.toLowerCase().includes(search.toLowerCase()))
  )});
  return(
    <>
      <div className = "container">
        <div className = "book-list">
            <BookCard filterBook={filterBook} />
            <SearchBar search={search} bookSearch={bookSearch}/>
        </div>
      </div>
      <div className='cart-sidebar'>
        <h2>Add to cart</h2>
      </div>
    </>
   )
}
export default BookData