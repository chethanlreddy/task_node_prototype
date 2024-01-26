const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const { token } = req.body
    console.log(token);
    if (!token) {
        res.status(400).json({ message: 'Token required' })
    }
    const verifyToken = jwt.verify(token, '12345678oiuytreww')
    console.log(verifyToken);   

    return next()
}

module.exports = auth
