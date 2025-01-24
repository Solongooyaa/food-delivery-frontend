"use client";

import { useEffect, useState } from "react";
import { Header } from "./(web)/(components)/Header";
import { Footer } from "./(web)/(components)/Footer";
import { ClerkProvider } from "@clerk/nextjs";
// import { useAuthFetch } from "./admin/_components/useFetchData";

export default function Home() {
  const [categories, setCategories] = useState<{ categoryName: string }[]>([]);
  const [foods, setFoods] = useState<
    {
      _id: string;
      foodName: string;
      image: string;
      ingredients: string;
      price: number;
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/food-category`);
      const data = await res.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/food`);
      const data = await res.json();
      setFoods(data);
    };
    fetchData();
  });
  return (
    <div>
      <ClerkProvider>
        <Header />
      </ClerkProvider>
      <div className="w-auto h-auto flex gap-4">
        {categories.map((category) => (
          <div className="flex border bg-[#ffffff] hover:bg-[#EF4444] text-[#18181B] hover:text-[#FAFAFA] rounded-full border-[#18181B] gap-2">
            {category.categoryName}
          </div>
        ))}
      </div>
      <div className="w-full h-auto flex gap-4">
        {foods.map((food) => (
          <div key={food?._id} className="flex flex-col border rounded-full">
            <div>{food?.foodName}</div>
            <img src={food?.image} />
            <div>{food?.ingredients}</div>
            <div>{food?.price}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
