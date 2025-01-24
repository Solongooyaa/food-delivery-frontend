"use client";

import React, { useEffect, useState } from "react";
import {
  DialogContent,
  Dialog,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Category from "../_components/Categories";
import { Header } from "@/app/(web)/(components)/Header";
import { Pencil } from "lucide-react";

export default function MenuFood() {
  const [foods, setFoods] = useState([]);

  const [newFood, setNewFood] = useState({
    foodName: "",
    image: "",
    ingredients: "",
    price: "",
  });

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
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
      setNewFood((prev) => ({ ...prev, image: dataJson.secure_url }));
      console.log(dataJson.secure_url);
    }
  };

  const addFood = async () => {
    await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    });
  };
  const deleteFood = async (id: string) => {
    await fetch(`http://localhost:8000/food/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/food`);
      const data = await response.json();
      setFoods(data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-[800px]] bg-[#ffffff] mt-4 rounded-xl p-6">
      <h1 className="text-2xl font-bold">Dishes Category</h1>
      <div className=" bg-[#FFFFFF] mt-6 rounded-lg flex gap-5">
        <div className=" flex gap-5">
          {foods.map((food: any) => (
            <div
              className="border border-[#E4E4E7] rounded-xl gap-4"
              key={food?._id}
            >
              {food?.foodName} {food?.image} {food?.ingredients} {food?.price}
              <button
                onClick={() => deleteFood(food._id)}
                className="w-[44px] h-[44px] text-red-500 bg-[#FFFFFF] rounded-full flex items-center justify-center border"
              >
                <Pencil className="" />
              </button>
            </div>
          ))}

          <Dialog>
            <DialogTrigger>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-red-500 rounded-xl w-[270.75px] h-[241px] text-black text-lg font-bold">
                <div className=" border rounded-full flex flex-col items-center justify-center gap-2 ">
                  +
                </div>
                <p>Add New Dish</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Add New Dish</DialogTitle>

              <div className="flex space-x-4">
                <div>
                  <label htmlFor="foodName" className=" text-sm font-medium">
                    Food Name
                  </label>
                  <input
                    id="foodName"
                    onChange={(e) =>
                      setNewFood((prev) => ({
                        ...prev,
                        foodName: e.target.value,
                      }))
                    }
                    className="w-full border p-2 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="foodPrice" className=" text-sm font-medium">
                    Price
                  </label>
                  <input
                    id="foodPrice"
                    type="number"
                    className="w-full border p-2 rounded-lg"
                    onChange={(e) =>
                      setNewFood((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                <label htmlFor="ingredients" className=" text-sm font-medium">
                  Ingredients
                </label>
                <input
                  id="ingredients"
                  type="text"
                  className="w-full border p-2 rounded-lg"
                  onChange={(e) =>
                    setNewFood((prev) => ({
                      ...prev,
                      ingredients: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="foodImage" className=" text-sm font-medium">
                  Food Image
                </label>
                <input
                  placeholder="Choose a file or drag & drop it here"
                  type="file"
                  onChange={handleUpload}
                />
                {newFood?.image && <img src={newFood?.image} alt="" />}
              </div>

              <button
                onClick={addFood}
                className="w-full bg-[#18181B] text-white p-2 rounded-md"
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
