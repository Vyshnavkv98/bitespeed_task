
import { UserRepositoryImpl } from "../../../infrastructure/dataAccess/userRepositoryImpl";
import { getAllIdentity } from "../../../interfaces/utility/getAllIdentityResponse";

let userRepositoryImpl = new UserRepositoryImpl()
export const verifyIdentity = async (email: string, phoneNumber: string) => {

  const emailExist = await userRepositoryImpl.isExistEmail(email)
  const phoneExist = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)


  if (Array.isArray(emailExist) == false&&email!==null&& phoneNumber!==null && Array.isArray(phoneExist) == false) {
   
      const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'primary')
      if (response) {
        let emailData= await userRepositoryImpl.isExistEmail(email)
        let res=getAllIdentity(emailData,false)
        return res
      } else {
        throw new Error('failed to create new identity')
      }
    
  }

  else if (Array.isArray(emailExist) == true && Array.isArray(phoneExist) == false) {
    if(phoneNumber!==null){
    const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'secondary')
    if (response) {
      const emailData = await userRepositoryImpl.isExistEmail(email)
    const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)
   const res= getAllIdentity(emailData,phoneData)
   return res
    } else {
      throw new Error('failed to create new identity')
    }
  }else{
    const emailData = await userRepositoryImpl.isExistEmail(email)
    const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)
   const res= getAllIdentity(emailData,phoneData)
   return res
   
  }
  }
  else if (Array.isArray(emailExist) == false && Array.isArray(phoneExist) == true) {
    console.log(Array.isArray(emailExist) == false && Array.isArray(phoneExist) == true, 'seccccccccccccccccccccccccc');
    if(email!==null){
      const response = await userRepositoryImpl.createNewUser(email, phoneNumber, 'secondary')
      if (response) {
        const emailData = await userRepositoryImpl.isExistEmail(email)
      const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)
     const res= getAllIdentity(emailData,phoneData)
     return res
      } else {
        throw new Error('failed to create new identity')
      }
    }else{
      const emailData = await userRepositoryImpl.isExistEmail(email)
      const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)
     const res= getAllIdentity(emailData,phoneData)
     return res
     
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
console.log(response);

    if (response) {
      const emailData = await userRepositoryImpl.isExistEmail(email)
    const phoneData = await userRepositoryImpl.isExistPhoneNumber(phoneNumber)
   const res= getAllIdentity(emailData,phoneData)
   return res
    } else {
      throw new Error('failed to create new identity')
    }


  }else{
    throw new Error('please fill the fields')
  }


}