import express from "express";
const app = express();

import connectDB from "./config/connectDB";
import initMiddlewares from "./config/initMiddlewares";
import swaggerDocs from "./config/swagger";

import initRouter from "./routes/index";

connectDB();
initMiddlewares(app);

app.use("/api/v1", initRouter);
swaggerDocs(app, 8000);

export default app;
