const express = require('express')
const userRouter = require('./routers/user')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(userRouter)

app.listen(port , () => {
    console.log('Server listening on',port)
})
