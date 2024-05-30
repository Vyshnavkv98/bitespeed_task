import { UserAttributes } from '../../domain/interface/IUser';
import User from '../../domain/models/user';
import { IUserRepository } from '../../domain/repositories/userRepository'


export class UserRepositoryImpl implements IUserRepository {
  constructor() {

  }
  public async createNewUser(email: string, phoneNumber: string, linkPrecedence: string): Promise<UserAttributes | null> {
    
    try {
      console.log(email, phoneNumber);
      let user;
      if (linkPrecedence == 'primary') {

        user = await User.create({
          email: email,
          phoneNumber: phoneNumber

        })



      } else if (linkPrecedence == 'secondary') {
         user = await User.create({
          email: email,
          phoneNumber: phoneNumber,
          linkPrecedence: linkPrecedence

        })
      }
      if (user) await user.save()
      if (!user) throw new Error("User not Found")
      else return user


    } catch (error: any) {
      console.log(error.message);

      throw new Error('Error fetching identity from database');
    }
  }

  public async isExistEmail(email: string): Promise<boolean | UserAttributes[]> {
    try {
      const isRegistered = await User.findAll({ where: { email } });
      if (isRegistered !== null && isRegistered.length > 0) return isRegistered
      else return false

    } catch (error) {
      console.error('Error checking if user exists:', error);
      return false;
    }
  }
  public async isExistPhoneNumber(phoneNumber: string): Promise<boolean | UserAttributes[]> {
    try {
      const isRegistered = await User.findAll({ where: { phoneNumber } })

      if (isRegistered !== null && isRegistered.length > 0) return isRegistered
      else return false
    } catch (error) {
      console.error('Error checking if user exists:', error);
      return false;
    }
  }

  public async findByCreds(email: string) {
    const userData = await User.findOne({ where: { email } })
    if (userData !== null) return userData
    else return false
  }

  public async updateUser(id:number): Promise<boolean | UserAttributes[]>{
    let res=await User.update({linkPrecedence:'primary'},{ where: { id:id } })
    if(res!==null)return true
    else return false
  }
}