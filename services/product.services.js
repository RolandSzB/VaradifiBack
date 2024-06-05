import { Product } from "../models/product.model.js";
import { sequelize } from "../db.js";

export async function getAllProducts() {
  return await Product.findAll({
    attributes: ["id", "name", "phone", "email", "size", "type"],
  });
}

export async function createProduct(name, phone, email, size, type) {
  const transaction = await sequelize.transaction();

  try {
    const productRow = await Product.create(
      { name, phone, email, size, type },
      { transaction }
    );

    await transaction.commit();
    return productRow.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}

export async function deleteOneProduct(productId) {
  const transaction = await sequelize.transaction();
  try {
    await Product.destroy(
      {
        where: {
          id: productId,
        },
      },
      { transaction }
    );
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
