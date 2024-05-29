import { UserAttributes } from "../interface/IUser";

export interface IUserRepository{
    createNewUser(email:string,phoneNumber:string,linkPrecedence:string):Promise<UserAttributes | null>,
    isExistEmail(email:string):Promise<boolean | UserAttributes[]>,
    isExistPhoneNumber(phoneNumber:string):Promise<boolean | UserAttributes[]>,
    findByCreds(email:string):Promise<UserAttributes | boolean>,
    updateUser(id:number):Promise<boolean | UserAttributes[]>,
    
}

