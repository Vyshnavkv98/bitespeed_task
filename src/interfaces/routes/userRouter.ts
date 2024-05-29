import { Router } from 'express';
import {  UserController} from '../controllers/userController';


const userRouter = Router();

let user_ontroller = new UserController();

userRouter.post('/identity', user_ontroller.checkIdentity);
// userRouter.post('/otp_verify', user_controller.verifyOtp);
// userRouter.post('/login', user_controller.login);

export default userRouter;