import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import MoreBooks from './components/MoreBooks';

function App() {
  const [books, setBooks] = useState([]); // Initialize as an empty array
  const [selected ,setSelected]=useState(false);
  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(res => res.json())
      .then(data => setBooks(data.items))
      .catch(error => console.error('Error fetching Harry Potter books:', error));

    fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
      .then(res => res.json())
      .then(data => setBooks(prevBooks => [...prevBooks, ...data.items]))
      .catch(error => console.error('Error fetching Sherlock Holmes books:', error));
  }, []);

  const handleSearch = (query) => {
    // Implement your search logic here
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.items));
  };
  

  return (
    <div className="App">
       <Navbar handleSearch={handleSearch} />
      {books.length>0 ? <BookCard  book={books.slice(0,3)} setSelected={setSelected}/> : <p>loading</p>
      }
      {
       selected ? <h2 style={{margin:"5px"}}>More Books Like this  </h2>  : <h2 style={{margin:"5px"}}>More Books</h2>
      }
      <MoreBooks books={books} />
    </div>
  );
}

export default App;
