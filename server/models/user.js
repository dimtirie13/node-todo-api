const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


var userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      minlength: 4,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]
  });

    userSchema.methods.toJSON = function () {
      var user = this;
      var userObject = user.toObject();

      return _.pick(userObject, ['_id', 'email']);
    };
//generating instance methods on the userSchema object
  userSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

     // user.tokens = user.tokens.conact([access, token]);
     user.tokens.push({access, token})
    //save changes
    return user.save().then(() => {
        return token;
    })
  };

  userSchema.statics.findbyToken = function (token) {
    var User = this;
    var decoded;

    try {
      decoded = jwt.verify(token, 'abc123');
    } catch (e) {
      return Promise.reject()
    }

    return User.findOne({
      '_id': decoded._id,
      'tokens.token': token,
      'tokens.access': 'auth'
    });
  };


  userSchema.pre('save', function(next) {
    var user = this;

    if (user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
      })
    } else {
      next();
    }
  });
var User = mongoose.model('User', userSchema);


module.exports = {User};
