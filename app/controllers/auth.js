var express = require('express'),
  router = express.Router(),
  response = require('../utils/response'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  db = require('../models');

module.exports = function (app) {
  app.use('/api/v1/auth', router);
};

router.post('/register', function(req, res, next){
  //genereate the salt to hash the password
  bcrypt.genSalt(10, function(err, salt){
    //hash the password with the generated salt
    bcrypt.hash(req.body.password, salt, function(err, hash){
      if(err) return res.json(response.error(500, err));
      req.body.password = hash;
      //Attempt to save the user in the database
      db.User.create(req.body).then(function(user){
        //Successfuly created, stored and sent back to the client.
        res.json(response.success(user));
      }).catch(function(error){
        //Error occured, send back the info to the client.
        res.json(response.error('500', error.message))
      });
    });
  });
});

router.post('/attempt', function (req, res, next) {
  if(!req.body.email || !req.body.password){
    //Username and password missing.
    res.json(response.error('500', 'Bad request, username or password missing'));
  }else{
    //Attempt to authenticate the user
    db.User.findOne({
      where: {
        email: req.body.email,
        active: true
      }
    }).then(function(user){
      if(user){
        //user found so we try to compare the password
        bcrypt.compare(req.body.password, user.password, function(err, result){
          if(err) return res.json(response.error(500, err));
          if(result){
            //Attemp successful, generate the jwt token for the client
            var token = jwt.sign({id: user.id}, 'parolasegretissima');
            return res.json(response.success({token: token, user: {email: user.email}}));
          }else{
            return res.json(response.error(401, 'Bad Login - invalid credentials.'));
          }
        })
      }
    }).catch(function(error){
      //error occured during login attemp
      res.json(response.error(500, error.message));
    });
  }
});
