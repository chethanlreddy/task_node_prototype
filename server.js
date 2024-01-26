const express = require('express')
const app = express()
const mongo = require('./database/db.js')
const auth = require('./middleware/oAuth');



app.use(express.json())

app.get('/', (req, res) => {
    res.json({'message' : 'hello'})
});


app.post('/demo-token',auth, (req, res) => {
    const payload = req.body
    payload.token = undefined
    res.status(200).json(payload)
    
})



const tasksRouter = require('./routers/tasks.js')
const userRegister = require('./routers/user.js')
const userAuth = require('./routers/auth.js')

app.use('/tasks', tasksRouter)
app.use('/user', userRegister)
app.use('/auth',userAuth)
app.listen(8000);