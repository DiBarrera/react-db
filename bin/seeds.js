const mongoose = require ('mongoose');
const Books = require ('../models/books.model')

mongoose.connect(`mongodb+srv://diegobarrera:Holamundo2021@cluster0.ubmvm.mongodb.net/libros-app`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// const authors = [
//     {
//         name: 'Charles',
//         lastName: 'Dickens' 
//     },
//     {
//         name: 'John',
//         lastName: 'Tolkien'
//     }
// ]

const books = [
    {
        title: 'The Hobbit',
        author: '603e7be5d7bfb4834bd43a30',
        description: 'The story about a hobbit',
        pages: 300
    },
    {
        title: 'The Lord of the Rings',
        author: '603e7be5d7bfb4834bd43a30',
        description: 'The story about a community',
        pages: 301
    }
]

Books.create(books)
    .then(booksToDataBase => {
        console.log(`Se han agregado ${booksToDataBase.length} admins a la base de datos.`)
        mongoose.connection.close()
    })
    .catch(error => console.log(`Ocurrio un error al conectarse a la base de datos ${error}. `))