"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { useEffect, useState } from "react";
type Food = {
  foodName: string;
  _id: string;
};

export default function Food() {
  const [foods, setFoods] = useState<Food[]>([]);

  const addFood = async () => {
    const categoryName = prompt("Enter category name");
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
    <div className="w-full h-[176px] bg-[#FFFFFF] mt-6 rounded-lg ">
      {foods.map((food) => (
        <Badge key={food?._id}>{food?.foodName} </Badge>
      ))}
      <div>
        <button onClick={addFood}></button>
        <input type="file" />
      </div>
    </div>
  );
}
