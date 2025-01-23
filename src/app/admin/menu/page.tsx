"use client";

import React, { useState } from "react";
import {
  DialogContent,
  Dialog,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Category from "../_components/Categories";

export default function MenuFood() {
  const [food, setFood] = useState([
    {
      foodName: "",
      image: "",
      ingredients: "",
      price: 0,
    },
  ]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
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

  const addFood = async () => {
    await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
  };
  return (
    <div className="w-full h-screen bg-gray-50 p-6">
      <div className="w-full h-[300px]] bg-[#FFFFFF] mt-6 rounded-lg px-8 py-16">
        <h1 className="text-2xl font-bold">Dishes Category</h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {food.map((food: any) => (
            <div key={food?._id}>
              {food?.foodName} {food?.image} {food?.ingredients} {food?.price}
            </div>
          ))}

          <Dialog>
            <DialogTrigger className="flex items-center justify-center border-2 border-dashed border-red-500 rounded-lg w-full h-48 text-red-500 text-xl font-bold">
              <div className=" w-3 h-3 border rounded-full flex flex-col items-center justify-center gap-2">
                +<p>Add New Dish</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Add New Dish</DialogTitle>
              <div className="mt-4 space-y-4">
                <div className="flex space-x-4">
                  <div>
                    <label
                      htmlFor="foodName"
                      className="block text-sm font-medium"
                    >
                      Food Name
                    </label>
                    <input
                      id="foodName"
                      onChange={(e) =>
                        setFood((prev) => [
                          { ...prev[0], foodName: e.target.value },
                        ])
                      }
                      className="w-full border p-2 rounded-lg"
                      // onChange={(e) => setFood(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="foodPrice"
                      className="block text-sm font-medium"
                    >
                      Price
                    </label>
                    <input
                      id="foodPrice"
                      type="number"
                      className="w-full border p-2 rounded-lg"
                      onChange={(e) =>
                        setFood((prev) => [
                          { ...prev[0], price: Number(e.target.value) },
                        ])
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="ingredients"
                    className="block text-sm font-medium"
                  >
                    Ingredients
                  </label>
                  <input
                    id="ingredients"
                    type="text"
                    className="w-full border p-2 rounded-lg"
                    onChange={(e) =>
                      setFood((prev) => [
                        { ...prev[0], ingredients: e.target.value },
                      ])
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="foodImage"
                    className="block text-sm font-medium"
                  >
                    Food Image
                  </label>
                  <input
                    placeholder="Choose a file or drag & drop it here"
                    type="file"
                    onChange={handleUpload}
                  />

                  {food?.image && <img src={food?.image} alt="" />}
                </div>
              </div>
              <button
                onClick={addFood}
                className="w-full bg-red-500 text-white p-2 rounded-lg"
              >
                Add Dish
              </button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
