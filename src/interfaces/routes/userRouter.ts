import { Router } from 'express';
import {  UserController} from '../controllers/userController';


const userRouter = Router();

let user_ontroller = new UserController();

userRouter.post('/identity', user_ontroller.checkIdentity);


export default userRouter;