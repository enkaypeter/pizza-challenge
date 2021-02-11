import PizzaService from "../services/pizzas";
const pizzaService = new PizzaService();
const headers = {
  'Content-Type': 'application/json'
};

module.exports = {
  getAllPizzas: async (req, res) => {
    try {
      const response = await pizzaService.fetchAllPizza();

      return {
        headers,
        message: "pizza fetch successful",
        status: "success",
        statusCode: 200,
        body: response
      }

    } catch (error) {
      return {
        headers,
        message: "failed to fetch all pizza",
        status: "error",
        statusCode: 400,
        body:{
          error: e.message
        }
      }      
    }
  },

  savePizza: async (req, res) => {
    try {
      const { body } = req;
      const response = await pizzaService.storePizza(body);

      return {
        headers,
        message: "pizza saved successfully",
        status: "success",
        statusCode: 200,
        body: response
      }

    } catch (error) {
      return {
        headers,
        message: "failed to save pizza",
        status: "error",
        statusCode: 400,
        body:{
          error: e.message
        }
      }      
    }
  }

}