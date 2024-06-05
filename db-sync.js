import { sequelize } from "./db.js";

import { Product } from "./models/product.model.js";
import { Event } from "./models/event.model.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
