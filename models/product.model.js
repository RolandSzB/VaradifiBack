import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

//Sterge fiecare direct, nu am nevoie de Description.delete, nici de tranzactie
// Task.hasOne(Description, { onDelete: "CASCADE" });
// Description.belongsTo(Task);

//Nu sterge daca exista legatura, trebuie sa sterg manual Description
// Task.hasOne(Description, { onDelete: "RESTRICT" });
// Description.belongsTo(Task);

// Task.hasOne(Description);
// Description.belongsTo(Task);
