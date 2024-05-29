"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectDb_1 = require("../../infrastructure/dataAccess/dbConfig/connectDb");
const sequelize = connectDb_1.DbConnection.getInstance();
class User extends sequelize_1.Model {
    id;
    phoneNumber;
    email;
    linkedId;
    linkPrecedence;
    // public createdAt!: Date;
    // public updatedAt!: Date;
    // public deletedAt?: Date;
    createdAt;
    updatedAt;
    deletedAt;
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    linkedId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    linkPrecedence: {
        type: sequelize_1.DataTypes.ENUM('secondary', 'primary'),
        defaultValue: 'primary',
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'identity',
    timestamps: true,
    paranoid: true,
});
exports.default = User;
//# sourceMappingURL=user.js.map