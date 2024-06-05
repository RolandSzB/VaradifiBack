import {
  createProduct,
  getAllProducts,
  deleteOneProduct,
} from "../services/product.services.js";

export async function getProducts(req, res) {
  const dbProducts = await getAllProducts();
  res.send(JSON.stringify(dbProducts));
}

export async function addNewProduct(req, res) {
  //LUAREA DATELOR
  const { name, phone, email, size, type } = req.body;
  //VERIFICARI
  if (!name) {
    throw new Error("Name is required");
  }
  if (!phone) {
    throw new Error("Telephone Number is required");
  }
  if (!email) {
    throw new Error("Email is required");
  }
  if (!size) {
    throw new Error("Size is required");
  }
  if (!type) {
    throw new Error("Type is required");
  }
  //LOGICA - SERVICE + REPOSITORY
  const productId = await createProduct(name, phone, email, size, type);
  //RASPUNS
  res.send(JSON.stringify({ id: productId }));
}

export async function deleteProduct(req, res) {
  const { productId } = req.body;

  if (!productId) {
    throw new Error("Product id is required");
  }

  await deleteOneProduct(productId);

  res.send("Deleted");
}
