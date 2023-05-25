import { Router } from "express"
import {create,index,store,show,editDepartment,updateDepartment,deleteDepartment} from "../controllers/departmentController.js";



const router = new Router();

router.get('/', index);

router.get('/create', create);

router.post('/', store);

router.get('/:_id/edit', editDepartment);

router.put('/:_id', updateDepartment);

router.get('/:_id', show);

router.delete('/:_id', deleteDepartment);

export default router;