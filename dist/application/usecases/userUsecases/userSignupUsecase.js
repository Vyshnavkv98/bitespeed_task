"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistartion = exports.otpCache = exports.userCache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const userRepositoryImpl_1 = require("../../../infrastructure/dataAccess/userRepositoryImpl");
const sendMailVerification_1 = __importDefault(require("../../../infrastructure/utils/sendMailVerification"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userCache = new node_cache_1.default();
exports.otpCache = new node_cache_1.default();
let userRepositoryImpl = new userRepositoryImpl_1.UserRepositoryImpl();
class UserRegistartion {
    constructor() { }
    async createUser(userData) {
        try {
            const response = await (0, sendMailVerification_1.default)(userData.username, userData.email);
            if (!response) {
                throw new Error("Cannot find otp");
            }
            let hasedPassword = await bcrypt_1.default.hash(userData.password, 10);
            exports.userCache.set(userData.email, { username: userData.username, password: hasedPassword, email: userData.email });
            exports.otpCache.set(userData.email, response);
            console.log(response, 'from sentemail');
        }
        catch (error) {
            console.error('Error in user registration:', error.message);
            throw error;
        }
    }
}
exports.UserRegistartion = UserRegistartion;
//# sourceMappingURL=userSignupUsecase.js.map