import React from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import SignUp from './components/register';
import BookData from './components/book-list';
import BookDetailPage from './components/book-details';
import { WishlistProvider } from './components/wishlist-data';
import { CartProvider } from './components/cartContext';
import AuthProvider from './components/userAuthentication';
import Wishlist from './components/wishlist';

function App() {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <AuthProvider>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/book-store" element={<BookData/>}/>
                <Route path="/book-details" element={<BookDetailPage/>}/>
                <Route path="/wishlist"element={<Wishlist/>}/>
            </Routes>
          </AuthProvider>
        </CartProvider>
        {/* <BookData /> */}
         {/* <Login/> */}
        {/* <SignUp/> */}
      </WishlistProvider>
    </BrowserRouter>
  );
}

export default App;
