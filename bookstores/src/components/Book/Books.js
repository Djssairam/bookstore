import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
import "./Book.css"
 const URL="http://localhost:5000/books";
const fetchHandler=async()=>{
   return  await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
  const [books,Setbooks]=useState();
  useEffect(()=>{
   fetchHandler().then((data)=>Setbooks(data.books));
  },[]);
  console.log(books);
  return (
    <div>
    <ul>
      {books &&
      books.map((book,i)=>(
        <div className="book" key={i}>
           <Book book={book}/>
        </div>
      ))}
    </ul>
      </div>
  )
}

export default Books
