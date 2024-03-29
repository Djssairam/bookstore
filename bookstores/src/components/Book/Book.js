import { Button } from '@mui/material';
import React from 'react'
import "./Book.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Book = (props) => {
  const history =useNavigate();
  const { _id,name,author,description,price,available,image}=props.book;
  const deletehandler=async()=>{
  await axios.delete(`http://localhost:5000/books/${_id}`).then((res)=>res.data).then(()=>history("/")).then(()=>history("/books"));};
  return (
    <div className='card'>
      <img src={image} alt={name}/>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>RS-{price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} >UPDATE</Button>
      <Button onClick={deletehandler}>DELETE</Button>
    </div>
  )
}

export default Book
