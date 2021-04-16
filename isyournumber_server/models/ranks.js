'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ranks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ranks.init({
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ranks',
    timestamps: false,
  });
  return Ranks;
};