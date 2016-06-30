module.exports = function(sequelize, DataTypes){

  var PaymentTermAccurral = sequelize.define('PaymentTermAccurral', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    value: DataTypes.DECIMAL,
    dayDelay: DataTypes.INTEGER
  });

  return PaymentTermAccurral;

}
