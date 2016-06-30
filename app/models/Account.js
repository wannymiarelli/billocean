module.exports = function(sequelize, DataTypes){

  var Account = sequelize.define('Account', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    bank: DataTypes.BOOLEAN,
    cash: DataTypes.BOOLEAN
  });

  return Account;

}
