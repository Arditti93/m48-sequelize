const Book = require("./model")

const addBook = async (req, res) => {
    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        })

        res.status(201).json({message: "success", book: newBook})
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
        console.log(error)
    }
}


const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update(
            // the new title of book
            {
                title: req.body.newTitle
            },
            // update the title where the title is equal in the databaseto the title passed 
            // in the request body
            {
                where: {
                    title: req.body.title
                }
            }
        )
        res.status(200).json({message: "success", updateResult: updateBook})
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
        console.log(error)
    }
}

module.exports = {
    addBook,
    updateBook
}