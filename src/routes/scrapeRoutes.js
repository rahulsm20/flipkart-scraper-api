import express from "express";
import auth from "../middleware/auth.js";
import { postScrapedData } from "../controllers/items.js";
const router = express.Router();

router.post('/',auth,postScrapedData);

export default router