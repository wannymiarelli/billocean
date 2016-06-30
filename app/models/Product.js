module.exports = function(sequelize, DataTypes){

  var Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    nettPrice: DataTypes.DECIMAL,
    grossPrice: DataTypes.DECIMAL,
    buyPrice: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    note: DataTypes.TEXT
  });

  return Product;
}
