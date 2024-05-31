import { configDotenv } from 'dotenv';
import  {Sequelize,Options} from 'sequelize';

configDotenv();


export class DbConnection {
  private static instance: Sequelize;

  private constructor() {}

  public static getInstance(): Sequelize {
    if (!DbConnection.instance) {
      const options: Options = {
        database: process.env.DB_NAME as string,
        username: process.env.DB_USER as string,
        password: process.env.DB_PASS as string,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '3306'), 
        dialect: 'mysql',
      };

      DbConnection.instance = new Sequelize(options);
    }
    return DbConnection.instance;
  }
}

