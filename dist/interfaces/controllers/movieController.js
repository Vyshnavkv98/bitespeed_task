"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegController = void 0;
const userSignupUsecase_1 = require("../../application/usecases/userUsecases/userSignupUsecase");
let userRegistartion = new userSignupUsecase_1.UserRegistartion();
class userRegController {
    constructor() {
    }
    async getAllMovies(req, res) {
        try {
            const response = await userRegistartion.getMovies();
            if (response) {
                res.status(200).send(response);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
exports.userRegController = userRegController;
//# sourceMappingURL=movieController.js.map