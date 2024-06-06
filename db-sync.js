import { sequelize } from "./db.js";

import { Product } from "./models/product.model.js";
import { Event } from "./models/event.model.js";
import { Description } from "./models/description.model.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
