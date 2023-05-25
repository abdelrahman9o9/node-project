import { Router } from "express";
import { create, deleteOne, edit, index, show, store, update } from "../controllers/subject.js";

const router = new Router();


router.get('/', index);

router.get('/create', create);

router.post('/', store);

router.get('/:id', show);

router.get('/:id/edit', edit);

router.put('/:id', update);

router.delete('/:id', deleteOne)

export default router;