import express from "express";
import authMiddlewere from "../middleware/auth.js";
import {
  placeOrder,
  userOrder,
  listOrders,
  updateStatus,
} from "../controller/orderController.js";

const orderRouter = express.Router();
orderRouter.post("/place", authMiddlewere, placeOrder);
orderRouter.post("/userorders", authMiddlewere, userOrder);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
