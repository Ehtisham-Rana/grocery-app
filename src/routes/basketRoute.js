import express from "express";
import { createBasket, getAllBasketItems , deleteBasketItemById } from "../controllers/basketController.js";


const router = express.Router();

router.post("/items",createBasket);
router.get("/items",getAllBasketItems);
router.delete("/items/:id",deleteBasketItemById);

export default router;