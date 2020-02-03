const bcrypt = require('bcryptjs')
const usersCollection = require('../db').collection('users') 
const validator = require('validator')

let User = function(data){
 this.data = data
 this.errors = []
}

User.prototype.cleanUp = function() {
    if(typeof(this.data.username) != 'string'){ this.data.username = ""}
    if(typeof(this.data.email) != 'string'){ this.data.email = ""}
    if(typeof(this.data.password) != 'string'){ this.data.password = ""}
    if(typeof(this.data.repeatPassword) != 'string'){ this.data.repeatPassword = ""}

    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password,
        repeatPassword: this.data.repeatPassword

    }

}

User.prototype.validate = function() {
if(this.data.username == ''){this.errors.push("ROK NGT UN")}
if(this.data.username.length > 0 && this.data.username.length < 3){this.errors.push('username must at least 3 char')}
if(this.data.username != '' && !validator.isAlphanumeric(this.data.username)){this.errors.push("ROK NGT must be siffror opr numbers")}
if(this.data.username.length > 20) {this.errors.push('username cant be longer then 30 chars')}

if(!validator.isEmail(this.data.email)){this.errors.push("ROK NGT email")}

if(this.data.password == '') {this.errors.push("ROK NGT BITCH")}
if(this.data.password.length > 0 && this.data.password.length < 3){this.errors.push('password must at least 3 char')}
if(this.data.password.length > 30) {this.errors.push('password cant be longer then 30 chars')}
if(this.data.password != this.data.repeatPassword){this.errors.push('inte samma lika losen')}
}


User.prototype.login = function(){
    return new Promise((resolve,reject)=>{
        this.cleanUp()
        usersCollection.findOne({username:this.data.username}).then((attemptedUser)=>{
            if(attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)){
                resolve('congrats')
            } else{
                reject('invalid username/password')
            }    
        }).catch(()=>{
            reject('try again later')
        })
    })
}


User.prototype.register = function() {
    this.cleanUp()
    this.validate()

    if(!this.errors.length){
    let salt = bcrypt.genSaltSync(10)
    this.data.password = bcrypt.hashSync(this.data.password, salt )
    this.data.repeatPassword = bcrypt.hashSync(this.data.password, salt )
    
    usersCollection.insertOne(this.data)
 }
}
module.exports = User