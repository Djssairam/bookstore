const Book=require("../model/Book");
const getAllBooks= async(req,res,next)=>{
    let books;
    try{
     books=await Book.find();
    }catch(err){
     console.log(err);
    }
    if (!books){
     return res.status(404).json({message:"no products found "});
    }
    return res.status(200).json({books});
}
const getByid= async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
     book=await Book.findById(id);
    }catch(err){
     console.log(err);
    }
    if (!book){
     return res.status(404).json({message:"no products found "});
    }
    return res.status(200).json({book});
}
const AddBook= async(req,res,next)=>{
    let book;
    const {name,author,description,price,available,image}=req.body;
    try{
     book=new Book({
           name,
           author,description,price,available,image
     });
     await book.save();
    }catch(err){
     console.log(err);
    }
    if (!book){
     return res.status(404).json({message:"no products found "});
    }
    return res.status(200).json({book});
}
const UpdateBook= async(req,res,next)=>{
    const id=req.params.id;
    let book;
    const {name,author,description,price,available,image}=req.body;
    try{
      book=await Book.findByIdAndUpdate(id,{
        name,author,description,price,available,image
      });
     book=await book.save();
    }catch(err){
     console.log(err);
    }
    if (!book){
     return res.status(404).json({message:"no products found "});
    }
    return res.status(200).json({book});
}
const DeleteByid= async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
     book=await Book.findByIdAndDelete(id);
    }catch(err){
     console.log(err);
    }
    if (!book){
     return res.status(404).json({message:"no products found "});
    }
    return res.status(200).json({book});
}

exports.getAllBooks=getAllBooks;
exports.AddBook=AddBook;
exports.getByid=getByid;
exports.UpdateBook=UpdateBook;
exports.DeleteByid=DeleteByid;