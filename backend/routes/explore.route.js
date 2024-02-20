import express from "express"

import  {exploreRepo} from "../controllers/explore.controller.js"

const router = express.Router();

router.get("/repo/:language",exploreRepo)

export default router ;