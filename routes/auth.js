import { Router } from "express";
import { login , loginform ,register, registerdoc, registerform, registerformdoc  } from "../controllers/student.js";

const router = new Router();

router.get ('/register' ,registerform );
router.post ('/register' , register);

router.get ('/registerdoc' ,registerformdoc );
router.post ('/registerdoc' , registerdoc);

router.get ('/login' ,loginform );
router.post ('/login' , login);


export default router;