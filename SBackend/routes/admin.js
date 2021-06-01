var express = require('express');
var router = express.Router();

var passport = require('passport');
var Admin = require('../model/admin');

var authenticate = require('../authenticate');
const mongoose = require("mongoose")
router.use(express.json());

router.get('/', function (req, res, next) {
    Admin.find({})
      .then((admin) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(admin);
      }, (err) => next(err))
      .catch((err) => next(err));
  });

  router.post('/admin/signup', (req, res, next) => {
    Admin.register(new Admin({ username: req.body.username }),
      req.body.password, (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err: err });
        } else {
          if (req.body.name)
            user.name = req.body.name;
          user.save((err) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({ err: err });
              return;
            }
            passport.authenticate('local')(req, res, () => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({ success: true, status: 'Registration Successful!' });
            });
          });
        }
      });
  });
  
  router.post('/admin/login', passport.authenticate('local'), (req, res, err) => {
    console.log("Login")
    var token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, token: token, message: 'You are successfully logged in!', status: 'You are successfully logged in!', user: req.user });
  });
  
  module.exports = router;