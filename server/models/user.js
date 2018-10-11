var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    minlength: 4
  }
});


module.exports = {User};
