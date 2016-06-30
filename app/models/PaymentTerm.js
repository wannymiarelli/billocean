module.exports = function(sequelize, DataTypes){

  var PaymentTerm = sequelize.define('PaymentTerm', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    monthEnd: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models){
        PaymentTerm.hasMany(models.PaymentTermAccurral);
      }
    }
  });

  return PaymentTerm;

}
