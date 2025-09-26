
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContextToHandleCaer'
import '../styles/book-details.css'
import { useWishlist } from '../context/WishlistData'


const BookDetailsPage = () => {
  
  const location = useLocation()
  const bookdetail = location.state.filterBook;

  const {handleAddToCart,removeFromCart,isInCart} =useCart()
  const [isAdded,setIsAdded] = useState(isInCart(bookdetail.id))

  const {addToWishlist,removeFromWishlist,isInList} =useWishlist()
  const [isList,setIsList] = useState(isInList(bookdetail.id))
 
  useEffect(()=>{
    setIsAdded(bookdetail.id)
    setIsList(bookdetail.id)
  },[isInCart,isInList])

  const Handleclick = ()=>{
    if(isAdded){
    handleAddToCart(bookdetail)
    setIsAdded(false)

  }else{
    
    removeFromCart(bookdetail.id)
    setIsAdded(true)
  }
  console.log(isAdded);
  }


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
           <div className='cart-buttons'>
            <button className = 'cart' onClick={Handleclick}>{isAdded ?  "Add to cart" : "Remove from cart"}</button>
            <button className='wish'onClick={()=>addToWishlist(bookdetail)}>Wishlist</button>
          </div>
       </div> 
          </div>
        </div>
     
  )
}
export default BookDetailsPage





