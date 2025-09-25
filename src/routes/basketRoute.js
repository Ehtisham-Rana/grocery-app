import express from "express";
import { createBasket, getAllBasketItems, getBasketItemById , deleteBasketItemById , updateBasketItemById } from "../controllers/basketController.js";


const router = express.Router();

router.post("/items", createBasket);
router.get("/items", getAllBasketItems);
router.get("/items/:id", getBasketItemById);
router.delete("/items/:id", deleteBasketItemById);
router.patch("/items/:id", updateBasketItemById);

export default router;