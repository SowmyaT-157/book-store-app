import React from 'react';
import './App.css';
import BookData from './components/book-list';
import SearchBar from './components/search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <BookData />
      </header>
    </div>
  );
}

export default App;
