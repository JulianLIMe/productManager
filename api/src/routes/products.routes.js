import { Router } from "express";
import {
  getProducts,
  createProduct,
  getAnProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getAnProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
