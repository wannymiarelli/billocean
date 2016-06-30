var express = require('express'),
  router = express.Router(),
  response = require('../utils/response'),
  bcrypt = require('bcrypt'),
  db = require('../models');

module.exports = function (app) {
  app.use('/api/v1/auth', router);
};

router.post('/register', function(req, res, next){
  //genereate the salt to hash the password
  bcrypt.genSalt(10, function(err, salt){
    //hash the password with the generated salt
    bcrypt.hash(req.body.password, salt, function(err, hash){
      req.body.password = hash;
    });
  });
  //Attempt to save the user in the database
  db.User.create(req.body).then(function(user){
    //Successfuly created, stored and sent back to the client.
    res.json(response.success(user));
  }).catch(function(error){
    //Error occured, send back the info to the client.
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
    }).catch(function(error){
      //error occured during login attemp
      res.json(response.error(500, error.message));
    });
  }
});
