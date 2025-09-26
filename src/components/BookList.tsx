import  {  useEffect } from 'react';
import '../styles/book-list.css'

import SearchBar from './SearchComponent';
import { useCart } from '../context/CartContextToHandleCaer';

const BookData = () => {
  const {cards,setCards}=useCart()
  const fetchData = async() => {
    let fetchedData = await fetch('  https://68ca8400430c4476c349caf6.mockapi.io/books/Books')
    let data = await fetchedData.json()
    setCards(data)
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