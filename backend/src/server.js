const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')


const server = express()
mongoose.connect('mongodb+srv://pedrook16:ba0896@P@cluster0-iubz8.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
// mongoose.connect('http://localhost:27017/tindev', {useNewUrlParser: true})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(5000)