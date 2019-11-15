const mongoose = require('mongoose')

console.log(process.env.HOST)
const HOST = process.env.HOST

 mongoose.connect('mongodb://127.0.0.1/api-books' , {
     useNewUrlParser: true
 })
     .then(db => console.log('connect successfully'))
     .catch(err => console.error('connect unsuccessfully'))
