import { Router } from 'express';
import orders from './routes/orders';
import pizzas from './routes/pizzas';

export default () => {
	const app = Router();
	orders(app);
	pizzas(app)

	return app
}