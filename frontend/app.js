import './styles/app.css'
import UI from './ui'

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI()
    ui.renderBooks()
})

document.getElementById('book-form')
    .addEventListener('submit', e => {
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const isbn = document.getElementById('isbn').value
        const image = document.getElementById('image').files

        //console.log(title, author, isbn, image)

        const formdata = new FormData()
        formdata.append('image', image[0])
        formdata.append('title', title)
        formdata.append('author', author)
        formdata.append('isbn', isbn)

        const ui = new UI()
        ui.addNewBook(formdata)
        
        ui.renderMessage('New Book Added', 'success', 3000)

        e.preventDefault()
    })
    
document.getElementById('books-cards')
    .addEventListener('click', e => {
        console.log('click')
        if(e.target.classList.contains('delete')){
            //console.log(e.target.getAttribute('_id'))
            const ui = new UI()
            ui.deleteBook(e.target.getAttribute('_id'))
            ui.renderMessage('Book Delete', 'danger', 3000)
        }
        e.preventDefault()
    })