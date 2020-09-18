'use strict';
module.exports = (sequelize, DataTypes) => {
  const HotDog = sequelize.define('HotDog', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
 /* HotDog.associate = function(models) {
    // associations can be defined here
  };
  */

  return HotDog;
};