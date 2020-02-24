const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

app.post('/auth', (req,res) => {
    // const token = Sign some random payload 
    const token = jwt.sign({random:'shit'}, 'mysecret')
    res.json({token})
})

app.get('/verify', (req,res) => {
    // Read the Authorization Header
    const authHeader = req.headers.authorization
    // Extract the token from header
    const token = authHeader.replace("Bearer ", "") // const token = authHeader.slice(7, authHeader.length)
    // Decrypt token
    const decrypted = jwt.verify(token, 'mysecret')
    // Read Issued At Time from token
    const time = decrypted.iat
    // Send response
    res.send(`Your token was issued at: ${time}` )
})


app.listen(8080)








// let payload = {
//     userId: 40,
//     username: "Kallebanan"
// }
// let secret = "VERYVERYSECRET"
// let options = {
//     expiresIn: 1
// }
// console.log("Payload: ", payload)

// const token = jwt.sign(payload, secret, options)

// console.log("Token: ", token)
// try{
//     const decrypted =  jwt.verify(token, secret)
    
//     console.log("Decrypted: ", decrypted)

// }catch(error){
//     console.log("Den ä gammal")
// }