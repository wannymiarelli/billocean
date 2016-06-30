module.exports = function(sequelize, DataTypes){

  var Center = sequelize.define('Center', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    income: DataTypes.BOOLEAN,
    outcome: DataTypes.BOOLEAN,
    total: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models){
        Center.hasMany(models.Product);
      }
    }
  });

  return Center;

}
