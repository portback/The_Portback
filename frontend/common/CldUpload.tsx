"use client";
import { CldUploadWidget } from "next-cloudinary";

const CldUpload = () => {
  return (
    <CldUploadWidget
      uploadPreset="cd09fycr"
      onSuccess={(result, { widget }) => {
        console.log(result?.info);
        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          console.log(undefined);
          open();
        }
        return <button onClick={handleOnClick}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
};

export default CldUpload;
