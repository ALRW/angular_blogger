var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
require('../models/Posts');
require('../models/Users');

var jwt = require('express-jwt');
// replace SECRET with ENV variable when moving to production
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var Post = mongoose.model('Post');
var User = mongoose.model('User');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){return next(err); }
    res.json(posts);
  });
});

router.post('/posts',auth, function(req, res, next){
  var post = new Post(req.body);
  post.username = req.payload.username;

  post.save(function(err, post){
    if(err){return next(err); }
    res.json(post);
  });
});

router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password || !req.body.email){
    return res.status(400).json({message: "Please Fill out all the required fields."});
  }

  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function(err){
    if(err){ return next(err);}

    return res.json({token: user.generateJWT()});
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all the required fields.'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

module.exports = router;
