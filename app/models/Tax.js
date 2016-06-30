module.exports = function(sequelize, DataTypes){

  var Tax = sequelize.define('Tax', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    note: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models){
        Tax.hasMany(models.Product);
      }
    }
  });

  return Tax;

}
