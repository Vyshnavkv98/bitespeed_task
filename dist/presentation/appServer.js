"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("../interfaces/routes/userRouter"));
const connectDb_1 = require("../infrastructure/dataAccess/dbConfig/connectDb");
const morgan_1 = __importDefault(require("morgan"));
class AppServer {
    static async run(port) {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use((0, morgan_1.default)('dev'));
        app.use((0, cors_1.default)());
        app.use('/user', userRouter_1.default);
        app.use('/', userRouter_1.default);
        connectDb_1.DbConnection.getInstance().sync({ alter: true }).then(() => {
            app.listen(port, () => {
                console.log(`Server is running on http://localhost:${port}`);
            });
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }
}
exports.AppServer = AppServer;
//# sourceMappingURL=appServer.js.map