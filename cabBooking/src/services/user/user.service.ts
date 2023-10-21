import { Rider, User, userData } from "../../models/user/user.model";
import { v4 as uuidv4 } from 'uuid';

class UserServiceClass {
  getUsers(): User[] {
    return userData
  }

  registerUser(username: string, userType: string, email?: string, carNumber?: string): User {
    const newUserId = uuidv4();
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

  }
}

export const UserService = new UserServiceClass();