'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = await queryInterface.sequelize.query(`SELECT orderId from Orders`);
    const orderRows = orders[0];

    const pizza     = await queryInterface.sequelize.query(`SELECT pizzaId from Pizzas`);
    const pizzaRows = pizza[0];


    return await queryInterface.bulkInsert('OrderItems', [
      {
        orderId: orderRows[0].orderId,
        pizzaId: pizzaRows[0].pizzaId,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: orderRows[0].orderId,
        pizzaId: pizzaRows[1].pizzaId,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderItems', null, {});
  }
};
