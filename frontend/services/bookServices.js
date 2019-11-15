class bookServices {

    constructor(){
        this.URI = '/api/books'
    }

    async getBooks(){
        const response = await fetch(this.URI)
        const books = await response.json()
        return books
    }

    async postBooks(book){
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        })
        const data = await response.json()
        console.log(data)
    }

    async deleteBooks(bookId){
        const response = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
    }
}

module.exports = bookServices