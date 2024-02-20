import express from "express";


import { getUserProfileAndRepoes } from "../controllers/users.controller.js";



const router = express.Router();

router.get("/profile/:username",getUserProfileAndRepoes)

export default router ;