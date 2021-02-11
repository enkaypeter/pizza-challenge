import { Router } from 'express';
import expressCallback from "../express-callback"

import { getAllPizzas, savePizza } from '../controllers/pizzas';
const router = Router();

export default (app) => {  
  app.use(router);
  router.get('/pizzas', expressCallback(getAllPizzas));
  router.post('/pizzas', expressCallback(savePizza))
};