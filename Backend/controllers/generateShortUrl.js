import { nanoid } from "nanoid";
import URL from "../models/url.model.js";

const generateShortId = async (req, res) => {
  const shortId = nanoid(8);
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "url is required" });

  const givenUrl = body.url;
  const dbUrl = await URL.findOne({ redirectUrl: givenUrl });
  if (dbUrl) return res.json({ id: dbUrl.shortId });
  await URL.create({
    shortId: shortId,
    redirectUrl: givenUrl,
    visitHistory: [],
  });

  return res.json({ id: shortId });
};

export default generateShortId;
