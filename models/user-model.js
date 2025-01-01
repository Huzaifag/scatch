const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullname : String,
  email : String,
  password : String,
  cart : {
    type : Array,
    default : []
  },
  order : {
    type : Array,
    default : []
  },
  isadmin : Boolean,
  contact : String,
  picture : String,
  address : {
    type : String,
    default : 'Lahore, Pakistan'
  }
});

module.exports = mongoose.model('user', userSchema);