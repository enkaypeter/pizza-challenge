import { Router } from 'express';
import expressCallback from "../express-callback"

import { getAllOrders, getSingleOrder } from '../controllers/orders';
const router = Router();

export default (app) => {  
  app.use(router);
  router.get('/orders', expressCallback(getAllOrders));
  router.get('/orders/:id', expressCallback(getSingleOrder))
};