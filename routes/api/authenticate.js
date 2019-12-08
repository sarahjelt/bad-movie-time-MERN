var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../../config/database');
require('../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../../models/User');

router.post('/signup', function(req, res) {
  console.log('you hit the signup route', req.body)
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass email and password.'});
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    });

    // save user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Email already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check password
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // create token if user found and password matches
          var token = jwt.sign(user.toObject(), config.secret);
          // return info with token as JSON
          res.json({success: true, token: token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

getToken = function (headers) {
  console.log(headers);
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
        return parted[1];
    } else {
        return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
