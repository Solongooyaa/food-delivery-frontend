"use client";
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
  };

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category._id}>{category.categoryName} </div>
      ))}
      <button className="" onClick={addCategory}>
        add new
      </button>
    </div>
  );
}
