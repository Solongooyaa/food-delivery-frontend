"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { useEffect, useState } from "react";
import { Uploader } from "./Uploader";
import { Dialog } from "@radix-ui/react-dialog";
// import { Food } from "@/app/constants/types";

export default function Food() {
  const [foodName, setFoodName] = useState<any>([]);
  const [price, setPrice] = useState<any>([]);
  const [ingredients, setIngredients] = useState<any>([]);

  const addFood = async () => {
    const food: any = [foodName, price, ingredients];
    const response = await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        food,
      }),
    });

    const data = await response.json();
    setFoodName([...foodName, data.newItem]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/food`);
      const data = await response.json();
      setFoodName(data);
    };
    fetchData();
  }, []);

  return <div className="w-full h-[176px] bg-[#FFFFFF] mt-6 rounded-lg "></div>;
}
