const { CustomError } = require("../../utils");
const Assets = require("../models/Assets");

class AssetRepository {
  async createAsset(url, mediaType) {
    try {
      const newAsset = await Assets.create({
        url,
        mediaType,
      });

      return newAsset;
    } catch (error) {
      throw new CustomError("error creating assets", 500);
    }
  }

  async findAssetsByUrl(url) {
    try {
      const asset = await Assets.findOne({
        url,
      });
      return asset;
    } catch (error) {
      throw new CustomError("error finding assets", 404);
    }
  }

  async findAssetsById(_id) {
    try {
      const asset = await Assets.findById(_id);
      return asset;
    } catch (error) {
      throw new CustomError("error finding assets", 404);
    }
  }


  async deleteAsset(_id) {
    try {
      const deleteAsset = await Assets.deleteOne({
        _id,
      });
    } catch (error) {
      throw new CustomError("error deleting assets", 500);
    }
  }
}

module.exports = AssetRepository;
