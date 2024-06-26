import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

import { Description } from "./description.model.js";

export const Event = sequelize.define(
  "Event",
  {
    dateNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dateMonth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    eventPeriod: {
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
Event.hasOne(Description, { onDelete: "CASCADE" });
Description.belongsTo(Event);

//Nu sterge daca exista legatura, trebuie sa sterg manual Description
// Task.hasOne(Description, { onDelete: "RESTRICT" });
// Description.belongsTo(Task);

// Task.hasOne(Description);
// Description.belongsTo(Task);
