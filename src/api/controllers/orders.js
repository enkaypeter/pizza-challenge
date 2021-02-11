import OrdersService from "../services/orders";
const ordersService = new OrdersService();
const headers = {
  'Content-Type': 'application/json'
};

module.exports = {
  getAllOrders: async (req, res) => {
    try {
      const response = await ordersService.fetchAllOrders();
      
      return {
        headers,
        message: "orders fetch successful",
        status: "success",
        statusCode: 200,
        body: response
      }
    } catch (e) {
      console.error(e);
      return {
        headers,
        message: "failed to fetch all orders",
        status: "error",
        statusCode: 400,
        body:{
          error: e.message
        }
      }
    }
  },

  getSingleOrder: async (req, res) => {
    try {
      const response = await ordersService.getSingleOrders(req.params.id);
      
      return {
        headers,
        message: "orders fetch successful",
        status: "success",
        statusCode: 200,
        body: response
      }
    } catch (error) {
      console.error(e);
      return {
        headers,
        message: "failed to fetch all orders",
        status: "error",
        statusCode: 400,
        body:{
          error: e.message
        }
      }
    }
  }
}