import PizzasRepository from "../repositories/pizzas"
export default class PizzasService extends PizzasRepository {
  constructor() {
    super();
  }

  async fetchAllPizza(){
    const allPizza = await this.getAllPizzas();
    return allPizza;
  }

  async storePizza(body){
    // Again! a better approach for this would be to write a validation middleware
    // if(typeof body == 'undefined'){
    //   throw new Error("pizza body is required, cannot be undefined");
    // };
    const saveResponse = await this.savePizza(body);
    return saveResponse;
  }

  


}