const { AssetRepository } = require("../database");

class AssetService {
  constructor() {
    this.repository = new AssetRepository();
  }

  async createAssets(_id, file, mediaType) {
    try {
      const url = await cloundinary.upload(file);

      const newAsset = await this.repository.createAsset(url, mediaType);
    } catch (error) {}
  }

  
}

module.exports = AssetService;
