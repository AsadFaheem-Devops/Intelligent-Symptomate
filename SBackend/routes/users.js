var express = require('express');
var router = express.Router();

var Patient = require('../model/Patient');
var Basic = require("../model/basicinfo");
var passport = require('passport');
var Admin = require('../model/admin');

var authenticate = require('../authenticate');
const mongoose = require("mongoose")
const passportlocalmangoose = require('passport-local-mongoose')
router.use(express.json());
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const findOrCreate = require("mongoose-findorcreate")
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   googleId:String,
//   secret:String
// });
// userSchema.plugin(passportlocalmangoose);
// userSchema.plugin(findOrCreate);
// const User = new mongoose.model("User", userSchema);

// passport.use(User.createStrategy());

// const {OAuth2Client}=require("google-auth-library")
// const Client=new OAuth2Client("117443239646-ni8sjfvdadef3m2h6iju1hkgoeu3vqbs.apps.googleusercontent.com");

// router.post("/api/v1/auth/google",async (req,res)=>{
//   const {token}=req.body;
//   const ticket = await Client.verifyIdToken({
//     idToken:token,
//     audience: "117443239646-ni8sjfvdadef3m2h6iju1hkgoeu3vqbs.apps.googleusercontent.com"
//   })
//   const {name,email,picture}=ticket.getPayload();
//   const user=await db.user.upsert({
//     where:{email: email}
//   })
// })


// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   googleId:String,
//   secret:String
// });
// userSchema.plugin(passportlocalmangoose);
// userSchema.plugin(findOrCreate);
// const User = new mongoose.model("User", userSchema);
// userSchema.plugin(findOrCreate)


//PATIENT SIGNUP
router.get('/', authenticate.verifyUser, function (req, res, next) {
  Patient.find({})
    .then((patient) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(patient);
    }, (err) => next(err))
    .catch((err) => next(err));
});
router.post('/signup', (req, res, next) => {
  Patient.register(new Patient({ username: req.body.username }),
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

//PATIENT LOGIN
router.post('/login', passport.authenticate('local'), (req, res, err) => {
  // if (res.success) {
  console.log("Login")
  var token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: token, message: 'You are successfully logged in!', status: 'You are successfully logged in!', user: req.user });


  //   } else{
  //     res.json({ message: "Error in login" })

  // }
});

//VIEW USERS BY ADMIN

router.get('/admin/viewusers', function (req, res, next) {
  Admin.find({}).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});


router.get('/reports/getage', function (req, res, next) {
  Basic.find({}).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

router.get('/profile/viewprofile', function (req, res, next) {
  Patient.find({}).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});


//EDIT AGE

router.post('/editprofile/changeDOB', authenticate.verifyUser, (req, res) => {
  console.log(req.user._id)
  console.log(req.body)
  Basic.findOne({ p_id: req.user._id }, (err, user) => {
    console.log(req.user._id)
    if (err)
      res.json({
        success: false,
        message: err
      })
    else if (user) {
      user.age = req.body.dob
      user.save((err) => {
        if (err) {
          res.json({
            success: false,
            message: err.name
          })
        }
        else {
          res.json({
            success: true,
            message: 'Age Updated Successffully'
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: 'User not found'
      }); // Return error, user was not found in db
    }
  })
})
//EDIT USERNAME

router.post('/editprofile/changeusername', authenticate.verifyUser, (req, res) => {
  console.log(req.user._id)
  console.log(req.body)
  Patient.findById(req.user._id, (err, user) => {
    console.log(req.user._id)
    if (err)
      res.json({
        success: false,
        message: err
      })
    else if (user) {
      user.name = req.body.name;
      user.save((err) => {
        if (err) {
          res.json({
            success: false,
            message: err.name
          })
        }
        else {
          res.json({
            success: true,
            message: 'Name Updated Successffully'
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: 'User not found'
      }); // Return error, user was not found in db
    }
  })
})

// CHANGE PASSWORD
router.post('/editprofile/changepassword', authenticate.verifyUser, (req, res) => {
  console.log(req.user)
  console.log(req.body)
  Patient.findById(req.user._id, (err, user) => {
    if (err)
      res.json({
        success: false,
        message: err
      })
    else if (user) {
      user.changePassword(req.body.oldpassword, req.body.newpassword, (err) => {
        if (err) {
          if (err.name === 'IncorrectPasswordError') {
            res.json({
              success: false,
              message: 'Incorrect password'
            }); // Return error
          } else {
            res.json({
              success: false,
              message: 'Something went wrong!! Please try again after sometimes.'
            });
          }
        } else {
          res.json({
            success: true,
            message: 'Your password has been changed successfully'
          });
        }

      })
    } else {
      res.json({
        success: false,
        message: 'User not found'
      }); // Return error, user was not found in db
    }
  })
})



//delete user
router.delete('/editprofile/deleteusers', authenticate.verifyUser, (req, res) => {
  console.log(req.user._id)
  console.log(req.body)
  Patient.findOne({ _id: req.user._id }, (err, user) => {
    console.log(req.user._id)
    if (err)
      res.json({
        success: false,
        message: err
      })
    else if (user) {
      user.deleteOne((err) => {
        if (err) {
          res.json({
            success: false,
            message: err.name
          })
        }
        else {
          res.json({
            success: true,
            message: 'Deleted Successffully'
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: 'User not found'
      }); // Return error, user was not found in db
    }
  })
})
//ED

// router.delete('/admin/deleteusers/:pid', function(req, res, next) {
//   Patient.deleteOne({ _id: req.params.id }, function(error, results) {
//       if (error) {
//           return next(error);
//       }
//       // Respond with valid data
//       res.json(results);
//   });
// });




// C-D 117443239646-ni8sjfvdadef3m2h6iju1hkgoeu3vqbs.apps.googleusercontent.com
//CSID AQUFqdMR_1mZp2DICu2b2uOe
// passport.use(new GoogleStrategy({
//   clientID: "117443239646-ni8sjfvdadef3m2h6iju1hkgoeu3vqbs.apps.googleusercontent.com",
//   clientSecret: "AQUFqdMR_1mZp2DICu2b2uOe",
//   callbackURL: "http://localhost:3000/auth/google/",
//   userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
// },
// function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);
//   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));

// router.get('/auth/google',
//   passport.authenticate('google', { scope: ["profile"] }));

// router.get("/auth/google/", 
// passport.authenticate("google", { failureRedirect: "/login" }),
// function(req, res) {
//   // Successful authentication, redirect home.
//   res.redirect('/');
// });

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/login');
  } else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});
module.exports = router;