require('dotenv').config()

//import/ jwt from?
const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

// const nedb = require('nedb-promise')

app.use(express.static('public'))


app.post('/api/auth',(req,res)=>{
    const user = {
        id: 1,//uuid??
        username: 'amos',
        email: 'amos@hataaik.se'
    }

})





app.listen(8080,()=> console.log(' rollin with the vibe 8080'))



























// let users = {
//     1: {
//       id: '1',
//       username: 'Robin Wieruch',
      
//     },
//     2: {
//       id: '2',
//       username: 'Dave Davids',
//     },
//   };
//   let messages = {
//     1: {
//       id: '1',
//       text: 'Hello World',
//       userId: '1',
//     },
//     2: {
//       id: '2',
//       text: 'Bye World',
//       userId: '2',
//     },
//   };


// app.get('/users', (req, res) => {
//     return res.send(Object.values(users));
//   });
//   app.get('/users/:userId', (req, res) => {
//     return res.send(users[req.params.userId]);
//   });

//   app.get('/messages', (req, res) => {
//     return res.send(Object.values(messages));
//   });
//   app.get('/messages/:messageId', (req, res) => {
//     return res.send(messages[req.params.messageId]);
//   });
// {
//     