import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const history=useNavigate();
  const [input,Setinput]=useState({
    name:'',
    author:'',
    description:'',
    price:'',
    image:''
  });
  const [checked,Setchecked]= useState();
  const  handlechange =(e)=>{
    Setinput((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const sendRequest=async()=>{
     await axios.post("http://localhost:5000/books",{
      name:String(input.name),
      author:String(input.author),
      description:String(input.description),
      price:Number(input.price),
      image:String(input.image),
      available:Boolean(checked)
    }).then(res=>res.data);
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(input,checked)
    sendRequest().then(()=>history('/books'))
  }
  return (
  <form onSubmit={handlesubmit}>
    <Box  display={'flex'}
    flexDirection={'column'} justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf={'center'} marginLeft={"auto"} marginRight={"auto"} marginTop={10}>
    <FormLabel>Name</FormLabel>
    <TextField value={input.name} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='name'/>
    <FormLabel>Author</FormLabel>
    <TextField value={input.author} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='author'/>
    <FormLabel>Description</FormLabel>
    <TextField value={input.description} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='description'/>
    <FormLabel>Price</FormLabel>
    <TextField value={input.price} onChange={handlechange} type='number' margin='normal' fullWidth variant='outlined' name='price'/>
    <FormLabel>Image</FormLabel>
    <TextField value={input.image} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='image'/>
    <FormControlLabel control={<Checkbox checked={checked} onChange={()=>Setchecked(!checked)} />} label="Available" />
    <Button variant="contained" type="submit" >ADD BOOK </Button>
    </Box>
  </form>
  )
}

export default AddBook
