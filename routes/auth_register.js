import { Router } from "express";
import { register, registerform } from "../controllers/user.js";

const router = new Router();

router.get ('/register' ,registerform );
router.post ('/register' , register);

export default router;