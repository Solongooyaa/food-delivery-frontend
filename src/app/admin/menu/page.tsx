"use client";

import { useState } from "react";

export default function AdminMenuPage() {
  const [food, setFood] = useState({
    foodName: "",
    image: "",
    category: "",
    price: 0,
    ingredients: "",
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
      setFood((prev) => ({ ...prev, image: dataJson.secure_url }));
    }
  };

  console.log(food);

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
    <div className="w-full h-screen ">
      <div className="w-full h-[300px]] bg-[#FFFFFF] mt-6 rounded-lg px-8 py-16">
        Salads
        <div className="w-[270px] h-[241px] border 1px rounded-xl border-dotted border-[#EF4444] text-black flex flex-col items-center justify-center gap-6 ">
          <button
            className="bg-red-500 w-10 h-10 rounded-full  "
            onClick={addFood}
          >
            +
          </button>
          Add new Dish to Salads
          <input type="file" onChange={handleUpload} />
          {/* { imageUrl && <img src={imageUrl} alt=""} */}
          {food?.image && <img src={food?.image} alt="" />}
        </div>
      </div>
    </div>
  );
}
