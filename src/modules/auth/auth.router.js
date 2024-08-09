import { Router } from "express";
import * as authController from './auth.controller.js';
import validation from "../../middleware/validation.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
const router = Router();

router.post('/register', validation(registerSchema), authController.Register);
router.post('/login', validation(loginSchema), authController.Login);

export default router;