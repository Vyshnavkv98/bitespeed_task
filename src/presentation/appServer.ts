import express from "express"
import cors from 'cors'
import userRouter from "../interfaces/routes/userRouter"
import  {DbConnection}  from "../infrastructure/dataAccess/dbConfig/connectDb"
import logger from "morgan"

export class AppServer{

    public static async run(port:number):Promise<void>{
        const app=express()
        app.use(express.json())
        app.use(logger('dev'))
        app.use(cors())
        app.use('/user',userRouter)
        app.use('/',userRouter)

       
        DbConnection.getInstance().sync({ alter: true }).then(() => {
            app.listen(port, () => {
              console.log(`Server is running on port ${port}`);
            });
          }).catch(err => {
            console.error('Unable to connect to the database:', err);
          });
   
    }
}