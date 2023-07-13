const { Router } = require("express") 

const bookRouter = Router() 

const { addBook, updateBook } = require("./controllers")

// add a new book to the databse
bookRouter.post("/books/addBook", addBook )

bookRouter.put("/books/updateBook", updateBook)

module.exports = bookRouter