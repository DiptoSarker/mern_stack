import express from "express";
import authMiddlewere from "../middleware/auth.js";
import {
  addToCart,
  removeToCart,
  getCart,
} from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddlewere, addToCart);
cartRouter.post("/remove", authMiddlewere, removeToCart);
cartRouter.post("/get", authMiddlewere, getCart);

export default cartRouter;
