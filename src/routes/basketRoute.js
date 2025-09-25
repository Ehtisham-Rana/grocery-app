import express from "express";
import { createBasket, getAllBasketItems } from "../controllers/basketController.js";


const router = express.Router();

router.post("/basket/items",createBasket);
router.get("/basket/items",getAllBasketItems);

export default router;