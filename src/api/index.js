import { Router } from 'express';
import orders from './routes/orders';
import pizza from './routes/pizza';

export default () => {
	const app = Router();
	orders(app);

	return app
}