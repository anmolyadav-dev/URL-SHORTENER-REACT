import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    redirectUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.models.URL || mongoose.model("url", urlSchema);

export default URL;
