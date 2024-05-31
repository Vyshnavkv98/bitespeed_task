"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
(0, dotenv_1.configDotenv)();
class DbConnection {
    static instance;
    constructor() { }
    static getInstance() {
        if (!DbConnection.instance) {
            const options = {
                database: process.env.DB_NAME,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '3306'),
                dialect: 'mysql',
            };
            DbConnection.instance = new sequelize_1.Sequelize(options);
        }
        return DbConnection.instance;
    }
}
exports.DbConnection = DbConnection;
// configDotenv()
// export class dbConnection{
//     async connectDb(){
//         if (!process.env.MONGO_URL) {
//             throw new Error('MONGO_URL environment variable is not defined');
//         }
//         mongoose.connect(process.env.MONGO_URL).then(() => {
//             console.log(`Db connected successfully`);
//         }).catch((error) => {
//             console.error('Error connecting to MongoDB:', error);
//         });
//     }
// }
//# sourceMappingURL=connectDb.js.map