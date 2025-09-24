import  {  useEffect } from 'react';
import './book-list.css'

import SearchBar from './search';
import { useCart } from './cartContext';

const BookData = () => {
  const {cards,setCards}=useCart()
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