import { Router } from 'express';
import { sayHi } from '../controllers/sayHi';


export const sayRouter = Router();
sayRouter.get('/', sayHi);
export default sayRouter;