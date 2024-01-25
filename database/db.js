const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017'
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));