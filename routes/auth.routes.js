const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const genSalts = 10;
const User = require('../models/users.model');
const { exists } = require('../models/users.model');

router.post('/signup', async (req, res, next) => {
    const {name, password, email} = req.body
    const saltsPass = await bcrypt.genSalt(genSalts);
    const hashedPass = await bcrypt.hash(password, saltsPass);

    User.create({name, email, password: hashedPass})
})

router.post('/login', async (req, res, next) => {
    const {email, password} = req.body
    const userExits = await User.findOne({email})
    if (bcrypt.compare(password, userExits.password)) {
        req.session.currentUser = userExits
        res.redirect('/profile')
    } else {
        res.json({error: 'Password not valid'})
    }
})

module.exports = router