const mongoose = require('mongoose')

console.log(process.env.HOST)
const HOST = process.env.HOST

 mongoose.connect(HOST , {
     useNewUrlParser: true
 })
     .then(db => console.log('connect successfully'))
     .catch(err => console.error('connect unsuccessfully'))
 