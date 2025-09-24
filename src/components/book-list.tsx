import  { useState, useEffect } from 'react';
import './book-list.css'
import { cardItemType } from '../types/prop-type';
import SearchBar from './search';

const BookData = () => {
  const [cards, setCards] = useState<cardItemType[]>([])
  const fetchData = async() => {
    let a = await fetch('  https://68ca8400430c4476c349caf6.mockapi.io/books/Books')
    let data = await a.json()
    setCards(data)
    console.log(data)
   }            
   useEffect (()=> {
    fetchData()
   },[])

  return(
    <>
    <div>
        <SearchBar books={cards}/>
    </div>
    </>
   );
  }
export default BookData