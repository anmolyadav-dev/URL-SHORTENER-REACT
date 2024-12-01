import express from "express";
import { connect } from "./dbConfig/index.js";
import cors from "cors";
import shortenUrlRouter from "./url/shortId/index.js";
import handleRedirectUrl from "./controllers/handleRedirectUrl.js";
import "dotenv/config";
connect();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());
app.use("/api/url/shortId", shortenUrlRouter);
app.get("/:shortId", handleRedirectUrl);
app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));
