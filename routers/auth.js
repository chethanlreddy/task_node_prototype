const express = require('express')
const router = express.Router()
const userS = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/login', async(req, res) => {
    const {email, password } = req.body
    if (!(email && password)) {
        return res.status(400).json({message : 'field is empty'})
    }
    let user = await userS.findOne({ email })
    if (! user) {
        return res.status(400).json({message : 'user with Mail id does not exists'})
    }

    if (! await bcrypt.compare(password, user.password)) {
        return res.status(400).json({message : 'password Incorrect'})
    }
    const token = await jwt.sign(
        { id: user._id},
        '12345678oiuytreww',
        {expiresIn : '2h'}
    )
    res.status(200).json({'Bearer-Token' : token})
    
})




module.exports = router