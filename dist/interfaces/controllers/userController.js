"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const verifyIdentity_1 = require("../../application/usecases/userUsecases/verifyIdentity");
class UserController {
    constructor() { }
    checkIdentity = async (req, res) => {
        try {
            const { email, phoneNumber } = req.body;
            console.log(req.body);
            const response = await (0, verifyIdentity_1.verifyIdentity)(email, phoneNumber);
            if (response) {
                res.status(201).send({ message: 'Registration success' });
            }
            else {
                res.status(404).send({ message: 'Something went wrong!!' });
            }
        }
        catch (e) {
            console.log('\n verify identity:', e.message);
            const code = !e.code ? 500 : e.code >= 400 && e.code <= 599 ? e.code : 500;
            res.status(code).send({ message: e.message });
        }
    };
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map