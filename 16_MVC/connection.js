const mongoose = require('mongoose')
// connecting to MongoDB using Mongoose
async function connectMongoDb(url){
    return await mongoose.connect(url)
}

module.exports = {connectMongoDb}