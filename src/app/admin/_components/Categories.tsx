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

  const addCategory = async () => {
    const response = await fetch(`http://localhost:8000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };
  const deleteCategory = async () => {
    const response = await fetch(`http://localhost:8000/food-category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/food-category");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-[1000px] h-[176px] bg-[#ffffff] p-6 gap-6 rounded-xl  ">
          <button className="bg-red-500 w-10 h-10 rounded-full">+</button>
          {/* <div className="flex  "> */}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add new category</DialogTitle>
        <div className="flex items-center gap-4 mt-4 ">
          {categories.map((category) => (
            <Badge
              className="bg-[#ffffff] text-black gap-4 p-2 rounded-full border border-[#E4E4E7] hover:border-red-500"
              key={category?._id}
            >
              {category?.categoryName}{" "}
            </Badge>
          ))}
          Category name
          <input
            className="border rounded-lg"
            placeholder="Type category name..."
          />
          {/* </div> */}
          <button
            className="bg-black w-100 h-100 rounded"
            onClick={addCategory}
          >
            add
          </button>
        </div>
      </DialogContent>
    </Dialog>

    //    <Popover>
    //    <PopoverTrigger>
    //      <div className="w-[60px] border rounded p-4 flex justify-center items-center">
    //        <ArrowBigDown /> Genre
    //      </div>
    //    </PopoverTrigger>
    //    <PopoverContent>
    //      {genres?.map((genre: Genre) => (
    //        <Link
    //          className="p-1"
    //          key={genre.id}
    //          href={`/discover?with_genres=${genre.id}&page=1`}
    //        >
    //          <Badge key={`genre-${genre.id}`}> {genre?.name} </Badge>
    //        </Link>
    //      ))}
    //    </PopoverContent>
    //  </Popover>
  );
}
