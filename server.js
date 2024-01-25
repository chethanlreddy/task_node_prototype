const express = require('express')
const app = express()
const mongo = require('./database/db.js')


app.use(express.json())

app.get('/', (req, res) => {
    res.json({'message' : 'hello'})
});




const tasksRouter = require('./routers/tasks')
app.use('/tasks',tasksRouter)
app.listen(8000);