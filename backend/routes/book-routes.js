const express =require("express");
const router=express.Router();
const Book=require("../model/Book")
const bookscontroller=require("../controllers/book-controller");

router.get("/",bookscontroller.getAllBooks);
router.post("/",bookscontroller.AddBook);
router.get("/:id",bookscontroller.getByid);
router.put("/:id",bookscontroller.UpdateBook);
router.delete("/:id",bookscontroller.DeleteByid);
module.exports=router;