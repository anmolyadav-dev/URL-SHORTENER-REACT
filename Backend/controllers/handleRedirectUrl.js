import URL from "../models/url.model.js";
const handleRedirectUrl = async (req, res) => {
  const id = req.params.shortId;
  console.log(req.params);

  try {
    const dbURL = await URL.findOneAndUpdate(
      { shortId: id },
      { $push: { visitHistory: { timestamps: Date.now() } } }
    );
    if (!dbURL) return res.status(404).json({ error: "URL not found" });
    console.log(dbURL.redirectUrl);
    let redirectUrl = dbURL.redirectUrl;
    if (
      !redirectUrl.startsWith("http://") &&
      !redirectUrl.startsWith("https://")
    ) {
      redirectUrl = "http://" + redirectUrl;
    }
    return res.redirect(redirectUrl);

    //   return res.json({ status: "pending" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default handleRedirectUrl;
