import express from "express";
import { createBasket } from "../controllers/basketController.js";


const router = express.Router();

router.post("/basket/items",createBasket);


export default router;