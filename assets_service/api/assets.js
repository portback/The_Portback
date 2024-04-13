const { uploader, cloudinary } = require("../utils/cloudinary");



module.exports = (app) => {
  app.post("/image", async (req, res, next) => {
    try {
      const { image } = req.body;

      const response = await uploader(image);
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/video", async (req, res, next) => {
    try {
      if (!req.headers["content-type"].startsWith("multipart/form-data")) {
        return res.status(400).json({ error: "Invalid content type" });
      }

      // Create a stream from the incoming request
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "video" },
        (error, result) => {
          if (error) {
            console.error("Error uploading to Cloudinary:", error);
            return res.status(500).json({ error: "An error occurred" });
          }
          res.json({ url: result.secure_url });
        }
      );

      // Pipe the request stream to Cloudinary
      req.pipe(stream);
    } catch (err) {
      console.error("Error uploading to Cloudinary:", err);
      res.status(500).json({ error: "An error occurred" });
    }
  });
};
