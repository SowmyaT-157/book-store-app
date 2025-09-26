import React from 'react';
import './App.css';
import Login from './pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import SignUp from './pages/RegisterPage'
import BookData from './components/BookList';
import BookDetailPage from './components/BookDetails';
import { WishlistProvider } from './context/WishlistData';
import { CartProvider } from './context/CartContextToHandleCaer';
import AuthProvider from './context/Authentication';
import Wishlist from './components/WishListComponent';

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
