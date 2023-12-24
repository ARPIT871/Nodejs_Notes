const mongoose = require('mongoose');

// creating schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    }
})

// creating model
const User = mongoose.model('user', userSchema)

module.exports={
    User
}