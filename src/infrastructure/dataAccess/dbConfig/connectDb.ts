import { configDotenv } from 'dotenv';
import  {Sequelize} from 'sequelize';

configDotenv();

  export class DbConnection {
    private static instance: Sequelize;
  
    private constructor() {}
  
    public static getInstance(): Sequelize {
      if (!DbConnection.instance) {
        DbConnection.instance = new Sequelize(
          process.env.DB_NAME as string,
          process.env.DB_USER as string,
          process.env.DB_PASS as string,
          {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT as 'mysql', 
          }
        );
      }
      return DbConnection.instance;
    }
  }




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