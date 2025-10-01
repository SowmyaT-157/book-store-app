
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import BookData from 'components/BookList';
import { useCart } from 'context/CartContextToHandleCaer';
import {BrowserRouter} from 'react-router-dom';

jest.mock('../../src/context/CartContextToHandleCaer');

jest.mock('../../src/components/SearchComponent', () => (props:any) => {
  return (
    <div>
      Mocked SearchBar - {props.books?.length} books
      {props.books?.map((book: any) => (
        <div key={book.id} data-testid="book-title">
          {book.bookName}
        </div>
      ))}
    </div>
  );
});

const mockSetCards = jest.fn();

const mockBooks = [
  {
    id: '1',
    bookName: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    price: 299,
    description: 'A collection of twelve stories featuring detective Sherlock Holmes.',
    bookImage: 'https://covers.openlibrary.org/b/id/8226191-L.jpg',
  },
  {
    id: '2',
    bookName: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 399,
    description: 'A romantic novel of manners.',
    bookImage: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
  },
];

describe('BookData Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useCart as jest.Mock).mockReturnValue({
      cards: [],
      setCards: mockSetCards,
    });

   
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockBooks),
      })
    ) as jest.Mock;
  });

  it('fetches books and calls setCards with data', async () => {
    render(
      <BrowserRouter>
        <BookData />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(mockSetCards).toHaveBeenCalledWith(mockBooks);
    });
  });

  it('renders books in SearchBar after fetching', async () => {
    (useCart as jest.Mock).mockReturnValue({
      cards: mockBooks,
      setCards: mockSetCards,
    });

    render(
      <BrowserRouter>
        <BookData />
      </BrowserRouter>
    );

    const titles = await screen.findAllByTestId('book-title');
    expect(titles).toHaveLength(mockBooks.length);
    expect(titles[0]).toHaveTextContent('The Adventures of Sherlock Holmes');
    expect(titles[1]).toHaveTextContent('Pride and Prejudice');
  });
});
