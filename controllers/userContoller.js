User = require('../models/User.js')


exports.login = (req,res)=>{
    let user = new User(req.body)
    user.login().then((result)=>{
        req.session.user = {favColor:'grün aus weiß', username: user.data.userName}
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    })

}
exports.logout = ()=>{}

exports.register = (req,res)=>{
    let user = new User(req.body)
    user.register()
    if(user.errors.length) {
        res.send(user.errors)
    }else{
        res.send('new user')
    }
}

exports.home = (req,res)=>{
    if(req.session.user){
        res.send('bajen')
    } else{
        res.render('start-guest')

    }
}

