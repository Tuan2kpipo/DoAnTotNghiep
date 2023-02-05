"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 1 THG POST chỉ có thể có 1 labelcode, 1 labelcode co thể có nhiều thg code
      Label.hasMany(models.Post, { foreignKey: "labelCode", as: "labelData" });
    }
  }
  Label.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Label",
    }
  );
  return Label;
};
