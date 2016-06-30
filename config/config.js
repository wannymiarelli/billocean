var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'billocean'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:hermes2015@localhost:3306/billocean'
  },

  test: {
    root: rootPath,
    app: {
      name: 'billocean'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/billocean-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'billocean'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/billocean-production'
  }
};

module.exports = config[env];
