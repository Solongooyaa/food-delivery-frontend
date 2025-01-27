"use client";

import React, { useEffect, useState } from "react";
import {
  DialogContent,
  Dialog,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Category from "../_components/Categories";
import { Pencil } from "lucide-react";
import { Plus } from "lucide-react";
import { useAuthFetch } from "../_components/useFetchData";
import { useSearchParams } from "next/navigation";

export default function MenuFood() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  // if (category) {
  //   const { data: foods, setData: setFoods } = useAuthFetch(
  //     `food?categoryId=${category}`
  //   );
  // } else {
  //   const { data: foods, setData: setFoods } = useAuthFetch(`food`);
  // }
  const { data: foods, setData: setFoods } = useAuthFetch(
    `food?categoryId=${category}`
  );

  const [newFood, setNewFood] = useState({
    foodName: "",
    image: "",
    ingredients: "",
    price: "",
    category: category,
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
    const response = await fetch(`http://localhost:8000/food/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setFoods(foods.filter((food: any) => food._id !== id));
    } else {
      console.error("Failed to delete food");
    }
  };

  return (
    <div className="w-full h-[800px] bg-white mt-6 rounded-2xl p-6 ">
      <h1 className="text-3xl font-bold text-gray-800">{category}</h1>
      <div className="bg-white mt-8 rounded-lg flex gap-6 w-full ">
        <div className="flex gap-6">
          {foods?.map((food: any) => (
            <div
              className="flex flex-col max-w-[280px] w-full bg-white border border-gray-200 rounded-xl duration-300"
              key={food?._id}
            >
              <img
                src={food?.image}
                className="w-[365.33px] h-[210px] object-cover rounded-t-xl"
              />
              <button
                onClick={() => deleteFood(food?._id)}
                className="w-[44px] h-[44px] text-red-500 bg-white rounded-full flex items-center justify-center border border-gray-300"
              >
                <Pencil className="w-5 h-5 " />
              </button>

              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-2xl font-semibold text-[#EF4444]">
                  {food?.foodName}

                  <span className="text-lg font-bold text-[#18181B]">
                    {food?.price}₮
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{food?.ingredients}</p>
                </div>
              </div>
            </div>
          ))}

          <Dialog>
            <DialogTrigger>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-red-500 rounded-xl w-[270px] h-[241px] text-black text-lg font-semibold bg-white hover:bg-gray-50 transition-all">
                <div className="text-white bg-red-500 flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full size-sm">
                  <Plus />
                </div>
                <p className="mt-2">Add new Dish</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="text-2xl font-bold text-gray-800">
                Add New Dish
              </DialogTitle>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="foodName"
                    className="text-sm font-medium text-gray-600"
                  >
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
                    className="w-full border p-3 rounded-lg mt-2 text-lg text-gray-800"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="foodPrice"
                    className="text-sm font-medium text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    id="foodPrice"
                    type="number"
                    className="w-full border p-3 rounded-lg mt-2 text-lg text-gray-800"
                    onChange={(e) =>
                      setNewFood((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="ingredients"
                  className="text-sm font-medium text-gray-600"
                >
                  Ingredients
                </label>
                <input
                  id="ingredients"
                  type="text"
                  className="w-full border p-3 rounded-lg mt-2 text-lg text-gray-800"
                  onChange={(e) =>
                    setNewFood((prev) => ({
                      ...prev,
                      ingredients: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="foodImage"
                  className="text-sm font-medium text-gray-600"
                >
                  Food Image
                </label>
                <input
                  placeholder="Choose a file or drag & drop"
                  type="file"
                  className="w-full border p-3 rounded-lg mt-2"
                  onChange={handleUpload}
                />
                {newFood?.image && (
                  <img
                    src={newFood?.image}
                    alt=""
                    className="mt-4 w-full h-32 object-cover rounded-md"
                  />
                )}
              </div>
              <div className="flex items-end justify-end w-[412px] h-[64px] ">
                <div
                  onClick={addFood}
                  className="w-[123px] h-[40px] bg-[#18181B] text-white p-3 rounded-md mt-6 text-lg flex items-center justify-center"
                >
                  Add Dish
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
