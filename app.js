const express = require('express')
const session = require('express-session')

const app = express()

let sessionOptions = session({
    secret: 'Amos el perro el perro redondo',
    resave: false,
    saveUninitialized:false,
    cookie: {maxAge: 1000*60*60*24, httpOnly: true}
})

app.use(sessionOptions)

const router = require('./router')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static('public'))

// Enable Express to serve static files from /public
app.use('/public', express.static('public'))

app.use('/',router)

module.exports = app