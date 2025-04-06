const connectDB = require("./src/db/db");
const app = require("./src/app");
const config = require("./src/config/config");
require('dotenv').config();
connectDB();

app.listen(config.PORT, () => {
  console.log(` Server running on ${config.PORT}`);
});
