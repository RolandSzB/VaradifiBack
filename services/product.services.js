import { Product } from "../models/product.model";

export async function getAllProducts() {
  return await Product.findAll({
    attributes: ["id", "name", "tel", "email", "size", "type"],
  });
}

export async function createProduct(name, tel, email, size, type) {
  const transaction = await sequelize.transaction();

  try {
    const productRow = await Product.create(
      { name, tel, email, size, type },
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
