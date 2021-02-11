import OrdersRepository from "../repositories/orders"
export default class OrderService extends OrdersRepository {
  constructor(){
    super();
  }

  async fetchAllOrders(){
    const allOrders = await this.getAllOrders();
    return allOrders;
  }

  async fetchSingleOrders(orderId) {
    // A better approach for this would be to write a validation middleware
    orderId = (orderId == undefined) ? new Error("orderId is required, cannot be undefined") : orderId;
    const singleOrder = await this.getSingleOrders(orderId);
    return singleOrder;
  }


}