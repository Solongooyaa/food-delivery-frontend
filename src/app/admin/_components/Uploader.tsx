"use client";
import { useState } from "react";
const CLOUDINARY_NAME = "do0qq0f0b";
const CLOUDINARY_PRESET = "food-delivery";

export const Uploader = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "food-delivery");

      setLoading(true);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/do0qq0f0b/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const dataJson = await response.json();
      setImageUrl(dataJson.secure_url);
    }
  };
  return (
    <div>
      <input disabled={loading} type="file" onChange={handleUpload} />
      <button>Upload</button>
      {imageUrl && <img src={imageUrl} alt="" />}
    </div>
  );
};
