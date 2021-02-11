'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      /**
       * Orders has many OrderItems relationship
       */
      return queryInterface.addColumn(
        'OrderItems',
        'orderId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Orders', 
            key: 'orderId',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }  
      ).then(() => {
      /**
       * Pizza belongs to OrdersItem
       */
        return queryInterface.addColumn(
          'OrderItems',
          'pizzaId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Pizzas',
              key: 'pizzaId'
            }
          }
        )
      })      
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'OrderItems', // name of Source model
      'orderId' // column we want to remove
    ).then(() => {
      'OrderItems',
      'pizzaId'
    })
  }
};
