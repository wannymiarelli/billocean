module.exports = function(sequelize, DataTypes){

  var Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    vat: DataTypes.STRING,
    fiscalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    note: DataTypes.TEXT,
    supplier: DataTypes.BOOLEAN,
    customer: DataTypes.BOOLEAN
  });

  return Contact;

}
