require("dotenv").config()

const express = require("express")

const Book = require("./books/model")

const bookRouter = require("./books/routes")

const port = process.env.PORT || 5001

const app = express()

app.use(express.json())

const syncTables = () => {
    Book.sync()
} 

app.use(bookRouter)

app.listen(port, () => {
    syncTables()
    console.log(`Server is running on port ${port}`)
})




