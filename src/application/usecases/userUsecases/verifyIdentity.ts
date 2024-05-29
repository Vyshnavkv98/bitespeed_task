import { error } from "console";
import { UserAttributes } from "../../../domain/interface/IUser";
import User from "../../../domain/models/user";
import { UserRepositoryImpl } from "../../../infrastructure/dataAccess/userRepositoryImpl";
import { getAllIdentity } from "../../../interfaces/utility/getAllIdentityResponse";

let userRepositoryImpl = new UserRepositoryImpl()
export const verifyIdentity = async (email: string, phoneNumber: string) => {

  const emailExist = await userRepositoryImpl.isExistEmail(email)
  const phoneExist = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)


  if (Array.isArray(emailExist) == false && Array.isArray(phoneExist) == false) {
   
      const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'primary')
      if (response) {
        return response
      } else {
        throw new Error('failed to create new identity')
      }
    
  }

  else if (Array.isArray(emailExist) == true && Array.isArray(phoneExist) == false) {
    console.log(Array.isArray(emailExist) == true , phoneExist, 'ffffffffffffffiiiiiiiiiiiirrrrrrrrst');
    if(phoneNumber!==null){
    const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'secondary')
    if (response) {
      return response
    } else {
      throw new Error('failed to create new identity')
    }
  }else{
    const emailData = await userRepositoryImpl.isExistEmail(email)
    const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)
   const res= getAllIdentity(emailData,phoneData)
   console.log(res,'rrrrrrrreeeeeeeeeedddddddssssssssssss');
   
  }
  }
  else if (Array.isArray(emailExist) == false && Array.isArray(phoneExist) == true) {
    console.log(Array.isArray(emailExist) == false && Array.isArray(phoneExist) == true, 'seccccccccccccccccccccccccc');

    const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'secondary')
    if (response) {
      return response
    } else {
      throw new Error('failed to create new identity')
    }
  }
  else if (Array.isArray(emailExist) == true && Array.isArray(phoneExist) == true) {

    let id = null;
    let oldestDate = new Date();

// console.log(emailExist,'emailexist');
console.log(JSON.stringify(emailExist));

    JSON.parse(JSON.stringify(emailExist)).forEach((identity:any) => {

      if (identity.createdAt && new Date(identity.createdAt) < new Date(oldestDate)) {
        oldestDate =identity.createdAt;
          id = identity.id;
          console.log(id);
          
      }
  });
  
  JSON.parse(JSON.stringify(phoneExist)).forEach((identity:any) => {
      if (identity.createdAt && new Date(identity.createdAt) <  new Date(oldestDate)) {
        oldestDate = identity.createdAt;
          id = identity.id;
      }
  });


    const response = await userRepositoryImpl.updateUser(id!)

  
    console.log('Oldest date:', oldestDate);
    console.log('id:', id);


  }


}