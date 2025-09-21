import  { useState, useEffect } from 'react';
import './book-list.css'
import { cardItemType } from '../types/prop-type';
import SearchBar from './search';



const BookData = () => {
  const [cards, setCards] = useState<cardItemType[]>([])
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
  
    <div>
        
        <SearchBar books={cards}/>
    </div>
     
    </>
   );
  }
export default BookData