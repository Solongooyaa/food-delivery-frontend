"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { useEffect, useState } from "react";
type Food = {
  categoryName: string;
  _id: string;
};

export default function Food() {
  const [foods, setFoods] = useState<Food[]>([]);

  const addFood = async () => {
    const categoryName = prompt("Enter food name");
    const response = await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
    });

    const data = await response.json();
    setFoods([...foods, data.newItem]);
    // console.log(categoryName);
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
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-[1171px] mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Foods</h2>
      <div className="flex flex-wrap gap-2">
        {foods.map((category) => (
          <Badge
            key={category?._id}
            className="bg-blue-100 text-black px-3 py-1 rounded-lg hover:bg-blue-200 transition"
          >
            {category?.categoryName}
          </Badge>
        ))}
      </div>

      <button
        onClick={addFood}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md focus:ring-2 focus:ring-green-400 focus:outline-none transition"
      >
        Add
      </button>
    </div>
  );
}
