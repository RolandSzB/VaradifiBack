import { Sequelize } from "sequelize";

const db = {
  NAME: "varadifi",
  USERNAME: "varadifi",
  PASSWORD: "varadifi",

  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.varadifi",
    port: 3306,
    logging: function (str) {
      console.log(str);
    },
  },
};

export const sequelize = new Sequelize(
  db.NAME,
  db.USERNAME,
  db.PASSWORD,
  db.options
);
