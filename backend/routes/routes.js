const { Router } = require('express')
const { unlink } = require('fs-extra')
const path = require('path')
const router = Router()

const Book = require('../models/book')

router.get('/', async (req, res) => {
    const books = await Book.find()
    res.json(books)
})

router.post('/', async (req, res) => {
    const { title, author, isbn} = req.body
    const imagePath = '/uploads/' + req.file.filename
    //console.log(req.body)
    const newBook = new Book({ title, author, isbn, imagePath })
    //console.log(newBook)
    await newBook.save()
    res.json({ message: 'Book saved'})
})

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    unlink(path.resolve('./backend/public'+ book.imagePath))
    //console.log(book)
    res.json({message: 'Book Deleted.:('})
})

module.exports = router
