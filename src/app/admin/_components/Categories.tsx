"use client";
import { Badge } from "@/components/ui/badge";
import {
  DialogContent,
  Dialog,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";
import { useEffect, useState } from "react";
type Category = {
  categoryName: string;
  _id: string;
};

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [value, setValue] = useState<any>([]);

  const addCategory = async (value: any) => {
    const categoryName: any = [categories, value];
    await fetch(`http://localhost:8000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: value }),
    });

    setCategories(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/food-category");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, [value]);

  return (
    <div className="w-[1000px] h-[176px] bg-[#ffffff] p-6 gap-6 rounded-xl  ">
      <p className="">Dishes category</p>
      <div className="flex items-center gap-4 mt-4 ">
        {categories.map((category) => (
          <Badge
            className="bg-[#ffffff] text-black gap-4 p-2 rounded-full border border-[#E4E4E7] hover:border-red-500 w-[100px]"
            key={category?._id}
          >
            {category?.categoryName}{" "}
          </Badge>
        ))}
      </div>
      <Dialog>
        <div className="w-[460px] h-[272px]">
          <DialogTrigger>
            <div className="bg-red-500 w-10 h-10 rounded-full">+</div>
            {/* <div className="flex  "> */}
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add new category</DialogTitle>
            Category name
            <input
              className="border rounded-lg"
              placeholder="Type category name..."
              onChange={(e) => setValue(e.target.value)}
            />
            {/* </div> */}
            <button
              className="bg-black w-100 h-100 rounded"
              onClick={() => addCategory(value)}
            >
              add
            </button>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
