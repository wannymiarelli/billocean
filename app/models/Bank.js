module.exports = function(sequelize, DataTypes){

  var Bank = sequelize.define('Bank', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    iban: DataTypes.STRING,
    bic: DataTypes.STRING,
    swift: DataTypes.STRING,
    documentNote: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models){
        Bank.hasOne(models.Account);
      }
    }
  });

  return Bank;

}
