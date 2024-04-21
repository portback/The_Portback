const { CustomError } = require(".");
const {
  CLOUDINARY_NAME,
  CLOUDINARY_APIKEY,
  CLOUDINARY_SECRET,
} = require("../config");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_APIKEY,
  api_secret: CLOUDINARY_SECRET,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const uploader = (file) => {
  try {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        file,
        { ...opts, folder: "/home/images" },
        (error, result) => {
          if (result && result.secure_url) {
            console.log(result);
            return resolve({
              url: result.secure_url,
              assetId: result.asset_id,
            });
          }
          console.log(error.message);
          reject("error has occured");
        }
      );
    });
  } catch (error) {
    throw error;
  }
};



module.exports = { cloudinary, uploader };
