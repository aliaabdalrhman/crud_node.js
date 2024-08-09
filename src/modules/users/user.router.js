import { Router } from "express"
import * as userController from "./user.controller.js"
import { auth } from "../../middleware/auth.js";
import getUserSchema from "./user.validation.js";
import validation from "../../middleware/validation.js";

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', validation(getUserSchema), userController.getUser);
router.delete('/', auth, userController.deleteUser);
router.put('/', auth, userController.updateUser);


export default router;