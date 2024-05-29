"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
let user_ontroller = new userController_1.UserController();
userRouter.post('/identity', user_ontroller.checkIdentity);
// userRouter.post('/otp_verify', user_controller.verifyOtp);
// userRouter.post('/login', user_controller.login);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map