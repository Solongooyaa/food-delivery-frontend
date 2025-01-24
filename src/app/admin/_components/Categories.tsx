"use client";
import { Badge } from "@/components/ui/badge";
import {
  DialogContent,
  Dialog,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { ClerkProvider, SignInButton } from "@clerk/nextjs";

import React from "react";
import { useEffect, useState } from "react";
// import { useAuthFetch } from "./useFetchData";
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

  // const { isLoading, data: categories } = useAuthFetch<Category[]>("category");

  // if (isLoading) return <div>Loading...</div>;
  return (
    // <div>
    //   <ClerkProvider>
    //     <SignedOut>
    //       <SignInButton />
    //       <button className="text-white border rounded-md end"></button>
    //     </SignedOut>
    //     <SignedIn>
    //       <UserButton />
    //       <button className="text-white"></button>
    //     </SignedIn>
    //   </ClerkProvider>

    <div className="w-full h-[176px] bg-[#ffffff] p-6 gap-6 rounded-xl  ">
      <p className="">Dishes category</p>
      <div className="flex items-center gap-4 mt-4 ">
        {categories.map((category: Category) => (
          <Badge
            className="bg-[#ffffff] text-black gap-4 p-2 rounded-full border border-[#E4E4E7] hover:border-red-500 "
            key={category?._id}
          >
            {category?.categoryName}
          </Badge>
        ))}
      </div>
      <Dialog>
        <DialogTrigger>
          <div className="bg-red-500 w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-xl">
            +
          </div>
        </DialogTrigger>
        <DialogContent className="w-[460px] h-[272px]">
          <DialogTitle>Add new category</DialogTitle>
          Category name
          <input
            className="border rounded-lg w-[412px] h-[38px]"
            placeholder="  Type category name..."
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex items-end justify-end w-[412px] h-[64px] ">
            <button
              className="bg-black w-[123px] h-[40px] rounded  text-white"
              onClick={() => addCategory(value)}
            >
              add
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    // </div>
  );
}
