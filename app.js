require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const router = require('./src/routers/index')
app.use('/api/v1', router)

app.listen(port, function(){
    console.log('app running')
})