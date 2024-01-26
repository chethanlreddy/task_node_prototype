const express = require('express')
const router = express.Router()
const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register', async(req, res) => {
    const { name, username, email, password } = req.body
    if (!(name && username && email && password)) {
        return res.status(400).json({message : 'field is empty'})
    }
    if (await user.findOne({ email })) {
        return res.status(400).json({message : 'mail already exists'})
    }
    const encPassword = await bcrypt.hash(password, 10)
    let userCreate = await user.create(
        {name,username,email,password:encPassword}
    )
    userCreate.password = undefined
    res.status(200).json(userCreate)
})




module.exports = router