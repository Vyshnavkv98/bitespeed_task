"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let generateAuthToken = async (userData) => {
    const date = new Date();
    const time = date.getTime();
    let passwordAccess = process.env.PASSWORD_ACCESS;
    const maxAgeAccess = 60 * 1000 * 20 + (1000 * 60);
    const maxAgeRefresh = 60 * 1000 * 60 * 24 * 30 + (1000 * 60);
    const userObj = { _id: userData._id, email: userData.email };
    let accessToken = jsonwebtoken_1.default.sign({ user: userObj }, passwordAccess, { expiresIn: maxAgeAccess.toString() });
    console.log(accessToken, 'tokens');
    return { accessToken };
};
exports.default = generateAuthToken;
//# sourceMappingURL=generateAuthToken.js.map