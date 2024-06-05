import { Router } from "express";

import {
  getProducts,
  addNewProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProducts);

router.post("/", addNewProduct);

router.delete("/", deleteProduct);

export default router;
