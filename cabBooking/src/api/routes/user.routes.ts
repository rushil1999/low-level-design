import { Router } from "express";
import { UserController } from "../../controllers/user/user.controller";
import { authenticateUser } from "../../middlewares/user.middleware";

const router = Router();

router.use(authenticateUser)
router.get("/users", UserController.getUsers);
router.post("/register", UserController.registerUser);




export default router;