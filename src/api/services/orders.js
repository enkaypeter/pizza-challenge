import OrdersRepository from "../repositories/orders"

export default class OrderService extends OrdersRepository {
  constructor(){
    super();
  }

  async fetchAllOrders(){
    const allOrders = await this.getAllOrders();
    console.log(allOrders);
    return allOrders;
  }

  async fetchSingleOrders(orderId) {
    // A better approach for this will be to write a validation middleware;
    orderId == undefined ? new Error("orderId is required, cannot be undefined") : orderId;
  }


}