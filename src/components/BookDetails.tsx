
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContextToHandleCaer'
import '../styles/book-details.css'
import { useWishlist } from '../context/WishlistData'
import { cardItemType } from '../types/AddToCartProps'


const BookDetailsPage = () => {
  
  const location = useLocation()
  const bookdetail:cardItemType = location.state.filterBook;

  const {handleAddToCart,removeFromCart,isInCart,cart} =useCart()
  

  const {addToWishlist,removeFromWishlist,isInList} =useWishlist()
  const [isList,setIsList] = useState(isInList(bookdetail.id))
 const isAdded = cart.some(bookInCart => bookInCart.id === bookdetail.id )


   const handleButtonClick = () => {
    if (isAdded) {
      console.log(isAdded);
      removeFromCart(bookdetail.id);
    } else {
      console.log(isAdded)
      handleAddToCart(bookdetail);
    }
  };


  // const HandleList = () =>{
  //   if(isList){
  //     addToWishlist(bookdetail.id)
  //   }
  //   else{
  //     removeFromWishlist(bookdetail.id)
      
  //   }
  // }
  // //   const Handleclick = ()=>{
  //   if(isAdded){
  //   removeFromCart(bookdetail.id)
  // }else{
  //   handleAddToCart(bookdetail)
  // }
  // console.log(isAdded);
  // }
  // const HandleWish = () =>{
  //   isList ? removeFromWishlist(bookdetail.id) : addToWishlist(bookdetail)
  // }

  return (
    <div>
      <div className='header'><h2>BookDetails📚</h2></div>  
      <div className='book-page'>
        
        <div className='body'> 
        <img className='book-img'src = {bookdetail.bookImage} alt='BasicImage'/></div>
        <div className='book-details'>
          <p><strong>{bookdetail.bookName}</strong></p>
          <p>Author:{bookdetail.author}</p>
          <p className='desc'>Description:{bookdetail.description}</p>
           {/* <div className="quantity-button">
              <button className="dec"onClick={()=>decrementQuantity(bookdetail.id)}>-</button>
              <p className='quantity'>Quantity:{bookdetail.quantity}</p>
              <button className="inc"onClick={()=>incrementQuantity(bookdetail.id)}>+</button>
          </div><br /> */}
          <div className="button-space">
        <button onClick={handleButtonClick} className={`cart-button-color ${isAdded ? "remove" : "add"}`}>
          {isAdded ? "REMOVE FROM CART" : "ADD TO CART"}
        </button> 
        <button className="wish-list-button"onClick={()=>addToWishlist(bookdetail)}>WishList</button>
      </div> 
       </div> 
          </div>
        </div>
  )
}
export default BookDetailsPage





