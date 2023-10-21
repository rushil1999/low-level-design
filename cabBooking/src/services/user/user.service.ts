import { Rider, User, userData } from "../../models/user/user.model";
import { v4 as uuidv4 } from 'uuid';
import { validateUser } from "./helpers/user.validators";

class UserServiceClass {
  getUsers(): User[] {
    return userData
  }

  registerUser(username: string, userType: string, email?: string, carNumber?: string): User {
    try {

      const newUserId = uuidv4();
      validateUser({ username, newUserId })
      console.log("New Id", newUserId);
      let newUser: User;
      switch (userType) {
        case 'RIDER': {
          newUser = new Rider(email || "", username, newUserId,);
          break;
        };
        case 'DRIVER': {
          newUser = new Rider(carNumber || "", username, newUserId,);
          break;
        }
        default: {
          newUser = new User(username, newUserId);
        }

      }
      userData.push(newUser);
      return newUser;

    } catch (error: any) {
      throw error;
    }
  }

}

export const UserService = new UserServiceClass();