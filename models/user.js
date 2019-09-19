var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var e=/^[a-zA-Z0-9\.]+@[a-zA-Z]+\.[a-z]{2,3}$/;
var u=/^[a-zA-Z0-9\_]+$/;
var p=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let emailCheck = (email)=>{
    if(!e.test(email)){
        return false;
    }
}

const emailValidate = [{
    validator: emailCheck,
    message: 'Please enter valid email'
}];

let unameCheck = (username)=>{
    if(!u.test(username)){
        return false;
    }
}

const unameValidate = [{
    validator: unameCheck,
    message: 'Username can contain only alphabets, numbers and underscores.'
}];

let passCheck = (password)=>{
    if(!e.test(password)){
        return false;
    }
}

const passValidate = [{
    validator: passCheck,
    message: 'Password should have at least 1 lowercase character, 1 uppercase character, 1 number, 1 special character and should be at least 8 characters long.'
}];

var userSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true, validate: emailValidate},
    username: {type: String, required: true, unique: true, lowercase: true, validate: unameValidate},
    password: {type: String, required: true}
}); 



userSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, null, null,(err, hash)=>{
        if(err)
            console.log(err);
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}
module.exports = mongoose.model('User', userSchema);