const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')


        bearerToken = bearer[1] 
        req.token = bearerToken
        next();
    }else{
        res.send(403)
    } 
}


jwt.sign({user}, 'secretkey', {expiresIn: '15m'}, (err, token )=>{
    res.json({
        token
    })
})
// app.listen(8080)
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