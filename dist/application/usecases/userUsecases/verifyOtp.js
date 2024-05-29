"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = void 0;
const user_1 = __importDefault(require("../../../domain/models/user"));
// import { UserRepositoryImpl } from "../../../infrastructure/dataAccess/userRepositoryImpl";
// let userRepositoryImpl = new UserRepositoryImpl()
const verifyOtp = async (userData) => {
    const user = new user_1.default({
        email: userData.email,
        phoneNumber: userData.phoneNumber
    });
    await user.save();
    if (!user)
        throw new Error("User not Found");
    else
        return user;
};
exports.verifyOtp = verifyOtp;
//# sourceMappingURL=verifyOtp.js.map