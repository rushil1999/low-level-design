import { NextFunction, Request, Response } from "express"

export const authenticateUser = (req: Request, res: Response, nextFunc: NextFunction): void => {
  console.log("Authenticating user")
  nextFunc()
} 