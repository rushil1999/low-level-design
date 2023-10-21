import { BadReqeustError } from "../../../models/exceptios";
import { User } from "../../../models/user/user.model"
import { checkIfStringIsEmpty, isNullOrUndefined } from "../../general/utils";

export const validateUser = (user: any): void => {
  const { username, userId } = user;
  console.log("Validating", username, checkIfStringIsEmpty(username));
  if (checkIfStringIsEmpty(username) || isNullOrUndefined(username)) {
    console.log("Throwing error")
    throw new BadReqeustError("Input not valid", "username")
  }
} 