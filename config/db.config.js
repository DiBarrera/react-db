const mongoose     = require('mongoose');

mongoose
  .connect('mongodb+srv://diegobarrera:Holamundo2021@cluster0.ubmvm.mongodb.net/libros-app', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });