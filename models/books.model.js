const mongoose = require ('mongoose');
const {model, Schema} = mongoose;

const bookSchema = new Schema({
    imgBook: {
        type: String,
        default: '../images/book-default.png'
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    description: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    }

})

const Books = model ('Books', bookSchema)

module.exports = Books