import React from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import SignUp from './components/register';
import BookData from './components/book-list';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/book-store" element={<BookData/>}/>
        </Routes>
        {/* <BookData /> */}
         {/* <Login/> */}
        {/* <SignUp/> */}
    </BrowserRouter>
  );
}

export default App;
