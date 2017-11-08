const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  goals: Object
});

const User = mongoose.model('User', userSchema);

let newUser = new User({
  name: 'Ramya',
  email: 'test@gmail.com',
  password: 'ramya'
});

// newUser.save(function(err, user){
//   if(err){
//     console.log(colors.blue(err));
//   } else {
//     console.log('document saved to db');
//   }
// });

User.comparePassword = function(attemptedPassword, savedPassword, cb) {
  bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};

module.exports = User;