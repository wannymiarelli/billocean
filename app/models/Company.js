module.exports = function(sequelize, DataTypes){

  var Company = sequelize.define('Company', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    vat: DataTypes.STRING,
    fiscalCode: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    logoUrl: DataTypes.STRING
  });

  return Company;

}
