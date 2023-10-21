import { Request, Response } from "express";
import { User } from "../../models/user/user.model";
import { UserService } from "../../services/user/user.service";

class UserControllerClass {
  getUsers(req: Request, res: Response): void {
    const response: User[] = UserService.getUsers();
    res.json(response);
  }

  registerUser(req: Request, res: Response): void {
    const { username, email, userType } = req.body;
    const response: User = UserService.registerUser(username, userType);
    res.json(response);
  }
}

export const UserController = new UserControllerClass();