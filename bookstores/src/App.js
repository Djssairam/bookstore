import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Books from './components/Book/Books';
import AddBook from './components/AddBook';
import About from './components/About';
import BookDetails from './components/Book/BookDetails';

function App() {
  return (
    <React.Fragment>
     <header>
     <Header/>
     </header>
     <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/books' element={<Books/>} exact/>
        <Route path='/add' element={<AddBook/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        <Route path='/books/:id' element={<BookDetails/>} exact/>
      </Routes>
     </main>
    </React.Fragment>
  );
}

export default App;
