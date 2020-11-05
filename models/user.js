var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

userSchema.methods.encryptPassword = function(password) { //encrypt user password
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) { // validation if the user password is valid
    return bcrypt.compareSync(password, this.password); //this.password refer to the user's password which in is run on
};

module.exports = mongoose.model('User', userSchema);