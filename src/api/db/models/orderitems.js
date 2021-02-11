'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    static associate(models) {
      models.OrderItems.hasMany(models.Orders)
    }
  };
  OrderItems.init({
    orderItemsId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'OrderItems',
  });

  return OrderItems;
};