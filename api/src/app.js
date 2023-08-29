import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerProducts from "./routes/products.routes.js";
import "dotenv/config";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("main page");
});

app.use("/api", routerProducts);

export default app;
