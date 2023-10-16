require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./config/connectDB");
const initMiddlewares = require("./config/initMiddlewares");
const swaggerDocs = require("./config/swagger");

const initRouter = require("./routes/index");

connectDB();
initMiddlewares(app);
app.use("/api/v1", initRouter);

const port = 8000;

swaggerDocs(app, port);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
