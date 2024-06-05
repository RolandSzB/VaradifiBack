import { Router } from "express";
const router = Router();

const products = [];

router.get("/", function (req, res) {
  res.send(JSON.stringify(products));
});

router.post("/", (req, res) => {
  products.push(req.body);
  console.log("PRO", products);
  res.send("OK");
});

router.delete("/", (req, res) => {
  const { productId } = req.body;

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );
  products.splice(productIndex, 1);
  res.send("Deleted product from database");
});

export default router;
