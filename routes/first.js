import { Router } from "express";
import { welcomeform } from "../controllers/student.js";

const router = new Router();


router.get ('/welcome' , welcomeform );

export default router;