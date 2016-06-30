var express = require('express'),
  router = express.Router(),
  response = require('../utils/response'),
  bcrypt = require('bcrypt'),
  db = require('../models');

module.exports = function (app) {
  app.use('/api/v1/auth', router);
};

router.post('/register', function(req, res, next){
  console.log(req.body);
  db.User.create(req.body).then(function(user){
    res.json(response.success(user));
  }).catch(function(error){
    res.json(response.error('500', error.message))
  });
});

router.get('/attempt', function (req, res, next) {
  if(!req.body.email || !req.body.password){
    //Username and password missing.
    res.json(response.error('500', 'Bad request, username or password missing'));
  }else{
    //Attempt to authenticate the user
    db.User.findAll({
      where: {
        email: req.body.email,
        active: true
      }
    }).then(function(user){
      if(user){
        //user found so we try to compare the password

      }
    });
  }
});
