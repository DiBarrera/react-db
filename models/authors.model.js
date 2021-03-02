const mongoose = require ('mongoose');
const {model, Schema} = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const Author = model ('Author', authorSchema)

module.exports = Author