import { Router } from "express";
import { getTasks } from '../controllers/tasks.controller.js';
import { getUsers_v1, getUsers_v2 } from "../controllers/users.controller.js";


const router = Router();


router
    .get("/v1/users", getUsers_v1)
    .get("/v2/users", getUsers_v2)

router
    .get("/tasks", getTasks)

export default router;