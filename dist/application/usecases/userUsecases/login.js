"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepositoryImpl_1 = require("../../../infrastructure/dataAccess/userRepositoryImpl");
const generateAuthToken_1 = __importDefault(require("../../../infrastructure/utils/generateAuthToken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRepository = new userRepositoryImpl_1.UserRepositoryImpl();
const login = async (userData) => {
    const email = userData.email;
    const password = userData.password;
    const user = await userRepository.findByCreds(email);
    if (!user)
        throw new Error("Cannot Find User");
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Incorrect password");
    }
    const userId = user._id.toString();
    const { accessToken } = await (0, generateAuthToken_1.default)({ ...user, _id: userId });
    console.log(accessToken, 'service');
    if (!accessToken)
        throw new Error("Login User Not Found Error");
    return { user, accessToken };
};
exports.default = login;
//# sourceMappingURL=login.js.map