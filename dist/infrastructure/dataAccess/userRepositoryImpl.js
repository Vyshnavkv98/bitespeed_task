"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
const user_1 = __importDefault(require("../../domain/models/user"));
class UserRepositoryImpl {
    constructor() {
    }
    async createNewUser(email, phoneNumber, linkPrecedence) {
        try {
            console.log(email, phoneNumber);
            let user;
            if (linkPrecedence == 'primary') {
                user = await user_1.default.create({
                    email: email,
                    phoneNumber: phoneNumber
                });
            }
            else if (linkPrecedence == 'secondary') {
                user = await user_1.default.create({
                    email: email,
                    phoneNumber: phoneNumber,
                    linkPrecedence: linkPrecedence
                });
            }
            if (user)
                await user.save();
            if (!user)
                throw new Error("User not Found");
            else
                return user;
        }
        catch (error) {
            console.log(error.message);
            throw new Error('Error fetching identity from database');
        }
    }
    async isExistEmail(email) {
        try {
            const isRegistered = await user_1.default.findAll({ where: { email } });
            if (isRegistered !== null && isRegistered.length > 0)
                return isRegistered;
            else
                return false;
        }
        catch (error) {
            console.error('Error checking if user exists:', error);
            return false;
        }
    }
    async isExistPhoneNumber(phoneNumber) {
        try {
            const isRegistered = await user_1.default.findAll({ where: { phoneNumber } });
            if (isRegistered !== null && isRegistered.length > 0)
                return isRegistered;
            else
                return false;
        }
        catch (error) {
            console.error('Error checking if user exists:', error);
            return false;
        }
    }
    async findByCreds(email) {
        const userData = await user_1.default.findOne({ where: { email } });
        if (userData !== null)
            return userData;
        else
            return false;
    }
    async updateUser(id) {
        let res = await user_1.default.update({ linkPrecedence: 'primary' }, { where: { id: id } });
        if (res !== null)
            return true;
        else
            return false;
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=userRepositoryImpl.js.map