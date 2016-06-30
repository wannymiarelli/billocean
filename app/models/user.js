module.exports = function(sequelize, DataTypes){

  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    avatarlUrl: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models){
        User.hasOne(models.Company);
        User.hasMany(models.Contact);
        User.hasMany(models.Product);
        User.hasMany(models.Center);
        User.hasMany(models.Account);
        User.hasMany(models.PaymentTerm);
      }
    }
  });

  return User;
}
