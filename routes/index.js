const express = require('express');
const router  = express.Router();
const Books = require('../models/books.model');
const Author = require('../models/authors.model');
const User = require('../models/users.model');
const { routes } = require('../app');
const mongoose = require ('mongoose');

/* GET home page */
router.get('/', async(req, res, next) => {
    const allBooks = await Books.find().populate('author')
    res.status(200).json(allBooks)
});

router.get('/:idBook', async(req, res, next) => {
    const {idBook} = req.params
    const book = await Books.findById(idBook).populate('author')
    res.status(200).json(book)
})

router.get('/profile', async (req, res, next) => {
  const userLog = req.session.currentUser
  const userProfile = await User.findById(userLog._id)
  res.status(200).json(userProfile)
})


module.exports = router;
