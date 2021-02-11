import db from "../../loaders/database";
const { QueryTypes } = require('sequelize');

export default class PizzasRepository {
  constructor() {
    this.db = db.sequelize;
  }

  static formatPizza(pizzas){
    let newPizza = ( pizzas.length ) > 0 ? pizzas.map(pizza => {
      pizza.ingredients = pizza.ingredients.split(",").map(str => str.trim())
      return pizza;
    }) : pizzas

    return newPizza;
  }


  async findAll() {
    const fetchAllPizzaQuery = await this.db.query('SELECT * from Pizzas',
    { type: QueryTypes.SELECT}).catch(err => console.error(err))
    return fetchAllPizzaQuery;
  }

  async getAllPizzas() {
    let allPizzas           = await this.findAll();
    const formattedPizzas   = PizzasRepository.formatPizza(allPizzas);
    return formattedPizzas;
  }

  async save(data) {
    let { name, price, ingredients } = data;
    ingredients = ingredients.toString();
    await this.db.query('INSERT INTO Pizzas (name, price, ingredients, createdAt, updatedAt) VALUES (:name, :price, :ingredients, :createdAt, :updatedAt)',
    {
      replacements: { name, price, ingredients, createdAt: new Date(), updatedAt: new Date() },
      type: QueryTypes.INSERT
    }).catch(err => console.error(err));

  }

  async savePizza(data) {
    await this.save(data);
  }

}