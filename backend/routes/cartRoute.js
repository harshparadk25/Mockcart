import express from "express";
import { addToCart, removeFromCart, getCart, updateQty } from "../controllers/cartController.js";

const router = express.Router();
router.post("/", addToCart);       
router.get("/", getCart);      
router.delete("/:id", removeFromCart);  
router.patch("/:id", updateQty);

export default router;