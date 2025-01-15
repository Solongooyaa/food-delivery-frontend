"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { useEffect, useState } from "react";
type Category = {
  categoryName: string;
  _id: string;
};

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = async () => {
    const categoryName = prompt("Enter category name");
    const response = await fetch(`http://localhost:8000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
    });

    const data = await response.json();
    setCategories([...categories, data.newItem]);
    // console.log(categoryName);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/food-category`);
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[1171px] h-[176px] bg-[#F4F4F5] ">
      {categories.map((category) => (
        <Badge key={category?._id}>{category?.categoryName} </Badge>
      ))}
      <button className="bg-green-500 " onClick={addCategory}>
        Food menu
      </button>
      <div></div>
    </div>
  );
}
