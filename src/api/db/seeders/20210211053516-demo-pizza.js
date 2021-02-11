'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Pizzas', [
      {
        name: 'Margherita',
        price: 5,
        ingredients: 'tomato, mozzarella',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
         name: 'Bufala',
         price: 6,
         ingredients: 'tomato, mozzarella di bufala',
         createdAt: new Date(),
         updatedAt: new Date() 
       },
       {
         name: 'Diavola',
         price: 7.5,
         ingredients: 'tomato, mozzarella, spicy salami',
         createdAt: new Date(),
         updatedAt: new Date() 
       }
   ], {}); 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pizzas', null, {});
  }
};
