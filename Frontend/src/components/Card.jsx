import React from "react";
import { useState } from "react";
import axios from "axios";
const Card = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      setUrl("https://" + url);
    }
    setError("");

    setLoading(true);
    try {
      if (url) {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/url/shortId`,
          {
            url:
              !url.startsWith("https://") && !url.startsWith("http://")
                ? "https://" + url
                : url,
          }
        );
        setLoading(false);
        const shortId = res.data.id;
        console.log(shortId);

        setShortUrl(`${import.meta.env.VITE_API_URL}/${shortId}`);
        console.log(shortUrl);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        alert("Short URL copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const isValidUrl = (url) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i" // fragment locator
    );
    return !!urlPattern.test(url);
  };

  return (
    <div className="p-24 w-1/2 shadow-sm shadow-black z-[999] bg-black/30 backdrop-blur-sm">
      <form
        // action="POST"
        // target="/api/url"
        className="text-center placeholder:text-white/10  "
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="p-3 bg-transparent shadow-sm shadow-blue-400 focus:shadow-blue-500 focus:outline-none w-1/2"
        />
        <button
          className="bg-blue-500 px-6 py-3 shadow-sm"
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Create Short Url"}
        </button>
      </form>

      <div className="flex items-center justify-center">
        {error && <div className="mt-4  text-red-500">{error}</div>}
        {shortUrl && (
          <div className="mt-10 text-white ">
            Short URL:{" "}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className="ml-4 bg-blue-500 px-4 py-2 rounded text-white"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
