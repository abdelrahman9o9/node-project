import { Router } from "express";
import { login, loginform ,welcomeform } from "../controllers/user.js";

const router = new Router();


router.get ('/welcome' , welcomeform );


router.get ('/login' ,loginform );
router.post ('/login' , login);
export default router;