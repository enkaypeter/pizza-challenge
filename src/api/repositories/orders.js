import db from "../../loaders/database";
const { QueryTypes } = require('sequelize');
export default class OrdersRepository {
  constructor() {
    this.db = db.sequelize;
  }

  // Format ingredients from comma sepearted string to array
  static formatOrders(rawOrders){
    const order = rawOrders.length > 0 ? 
    rawOrders.map(order => {
      order.ingredients = order.ingredients.split(",").map(str => str.trim())
      return order;
    }) :
    rawOrders;

    return order;
  }

  async findAll() {
    const fetchAllOrderItemsQuery = await this.db.query('SELECT * from Orders',
     { type: QueryTypes.SELECT})
    return fetchAllOrderItemsQuery;
  }

  async find(orderId) {
    const fetchSingleOrdersQuery = await this.db.query('SELECT Pizzas.name, Pizzas.ingredients, Pizzas.price, OI.quantity FROM Orders JOIN OrderItems OI ON Orders.orderId = OI.orderId JOIN Pizzas ON Pizzas.pizzaId = OI.pizzaId WHERE Orders.orderId = :orderId',
    {
      replacements: { orderId },
      type: QueryTypes.SELECT
    });
    return fetchSingleOrdersQuery;
  }

  async getAllOrders() {
    let allOrders   = await this.findAll();
    return allOrders;
  }

  async getSingleOrders(orderId){
    let rawOrder      = await this.find(orderId);
    const singleOrderItem = OrdersRepository.formatOrders(rawOrder);
    return singleOrderItem;
  }
}