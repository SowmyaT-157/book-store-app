import React from 'react';
import './App.css';
import BookData from './components/book-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookData />
      </header>
    </div>
  );
}

export default App;
