import { DataTypes, Model, Optional } from 'sequelize';
import {DbConnection} from '../../infrastructure/dataAccess/dbConfig/connectDb';
import { UserAttributes } from '../interface/IUser';


const sequelize = DbConnection.getInstance();


class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public phoneNumber?: string;
  public email?: string;
  public linkedId?: number;
  public linkPrecedence?: 'secondary' | 'primary';
  // public createdAt!: Date;
  // public updatedAt!: Date;
  // public deletedAt?: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt?: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    linkPrecedence: {
      type: DataTypes.ENUM('secondary', 'primary'),
      defaultValue: 'primary',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'identity',
    timestamps: true,
    paranoid: true, 
  }
);

export default User;