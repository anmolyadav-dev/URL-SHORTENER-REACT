import express from "express";
import generateShortId from "../../controllers/generateShortUrl.js";

const router = express.Router();

router.post("/", generateShortId);

export default router;
