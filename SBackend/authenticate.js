var passport = require('passport');
var ALocalStrategy = require('passport-local').Strategy;
var User = require('./model/Patient');
var Admin = require('./model/admin');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = {
    secretKey: 'i-symptomate'
};

passport.use(new ALocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey, { expiresIn: 72000 });
};


var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload._id }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


// passport.use(new ALocalStrategy(Admin.authenticate()));
// passport.serializeUser(Admin.serializeUser());
// passport.deserializeUser(Admin.deserializeUser());
// exports.getToken = function (admin) {
//     return jwt.sign(admin, config.secretKey, { expiresIn: 3600 });
// };

// var opt = {}
// opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opt.secretOrKey = config.secretKey;
// passport.use(new JwtStrategy(opt, function (jwt_payload, done) {
//     Admin.findOne({ _id: jwt_payload._id }, function (err, admin) {
//         if (err) {
//             return done(err, false);
//         }
//         if (admin) {
//             return done(null, admin);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));
exports.verifyUser = passport.authenticate('jwt', { session: false });
