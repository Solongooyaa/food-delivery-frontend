"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
// import { Uploader } from "./_components/Uploader";
import Category from "../_components/Categories";

export default function AdminMenuPage() {
  const [food, setFood] = useState({
    foodName: "",
    image: "",
    category: "",
    price: 30,
  });

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "food-delivery");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/do0qq0f0b/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const dataJson = await response.json();
      setFood(dataJson.secure_url);
    }
  };

  const addFood = async () => {
    const response = await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
  };
  return (
    <div className="w-full h-screen bg-[#F4F4F5]">
      {/* <Category /> */}

      <div className="w-full h-[176px] bg-[#FFFFFF] mt-6 rounded-lg ">
        <div>NEW FOOD</div>
        <input type="file" onChange={handleUpload} />
        {/* { imageUrl && <img src={imageUrl} alt=""} */}
        {food?.image && <img src={food?.image} alt="" />}
        <button onClick={addFood}></button>
      </div>
    </div>
  );
}
