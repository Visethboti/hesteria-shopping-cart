var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

var validationLogic = require('./validationLogic');

passport.serializeUser(function(user, done) { // tell passport how to store user in the session
    done(null, user.id);
}); 

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){ // find user by id in the mongoose database
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    // these are javascript object they are keys that it expected
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,    
}, function(req, email, password, done) {
    // req.checkBody('email', 'Invalid email').notEmpty().isEmail(); // validate user inputted email
    // req.checkBody('password', 'Invalid password').notEmpty().isLength({min:8}); // validate user inputted password
    // var errors = req.validateErrors();
    // if (errors) {
    //     var messages = [];
    //     errors.forEach(function(errors) {
    //         messages.push(errors.msg);
    //     });
    //     return done(null, false, req.flash('error', messages));
    // }

    var errorMessages = [];
    if(!validationLogic.isValidEmail(email)) { // check userinput email
        errorMessages.push("Invalid Email.");
    }
    if(!validationLogic.isValidPassword(password)) { // check userinput password
        errorMessages.push("Password must be 8 characters long.");
    }
    if(errorMessages.length > 0) { // if invalid, return error message
        return done(null, false, req.flash('error', errorMessages));
    }

    User.findOne({'email': email}, function(err, foundUser) { // find the email inputted in our mongoose to see if it already exist
        if(err){
            return done(err);
        }
        if(foundUser) {
            return done(null, false, {message: 'Email is already in use.'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result) {
            if(err){
                return done(err);
            } else {
                return done(null, newUser);
            }
        });
    });
}));
