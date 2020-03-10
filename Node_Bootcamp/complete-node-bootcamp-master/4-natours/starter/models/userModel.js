const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// name, email, photo, password, passwordConfirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name']
  },
  email:{
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  password:{
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password cannot be shorter than 8 characters']
  },
  passwordConfirm: {
    type: String,
    required: true,
    minlength: [8, 'Pease confirm your password'],
    validate: {
      // this only work on SAVE!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same'
    }
  }
})

userSchema.pre('save', async function(next){
  // only run if password is modified
  if(!this.isModified('password')) return next();
  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // blank password confirm
  this.passwordConfirm = undefined;

  next();
})


const User = mongoose.model('User', userSchema);

module.exports = User;