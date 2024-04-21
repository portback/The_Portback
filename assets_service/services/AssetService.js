const { AssetRepository } = require("../database");
const { CustomError } = require("../utils");
const { uploader, cloudinary } = require("../utils/cloudinary");

class AssetService {
  constructor() {
    this.repository = new AssetRepository();
  }

  async createImageAssets(file, mediaType, userId) {
    try {
      const { url, assetId } = await uploader(file);

      const newAsset = await this.repository.createAsset(
        url,
        mediaType,
        assetId,
        userId
      );
      return url;
    } catch (error) {
      throw error;
    }
  }

  async createVideoAsset(req ,userId) {
    try {
      const data = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "video" },
          (error, result) => {
            if (error) {
              reject(new CustomError(`Error uploading Video ${error}`, 400));
            }
            resolve({ url: result?.secure_url, assetId: result?.asset_id });
          }
        );
        req.pipe(stream);
      });

      const newAsset = await this.repository.createAsset(
        data?.url,
        "Video",
        data?.assetId
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  subScribeEvents(payload) {
    const { event, data } = payload;
  }
}

module.exports = AssetService;
