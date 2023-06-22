const User = require('../models/user');

module.exports.profile= function(req,res){
    return res.render('user_profile',{
        title: "User Profile"
    });
}


module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}


//get the sign up data
module.exports.create = function(req,res){
   if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
   }
   
User.findOne({email: req.body.email}, function(err,user){
    if(err){
        console.log('Error in Finding user in Signing Up');
        return }
    if(!user){
        User.create(req.body, function(err,user){
            if(err){console.log('Error in creating user while Signing Up');
            return}

            return res.redirect('/users/sign-in');
    })
    }else{
        return res.redirect('back');
    }
});
}


//create session and sign in with user data
module.exports.createSession = function(req,res){
    //to do later
}