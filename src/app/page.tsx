"use client";

import { useEffect, useState } from "react";
import { Header } from "./web/(components)/Header";
import { Footer } from "./web/(components)/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Banner } from "./web/(components)/Banner";
import { useAuthFetch } from "./admin/_components/useFetchData";

export default function Home() {
  const [categories, setCategories] = useState<
    { _id: string; categoryName: string }[]
  >([]);
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
  // const { isLoading, data: categories } = useAuthFetch("food-category");
  // if (isLoading) return <div>Loading...</div>;

  // const { data: foods, setData: setFoods } = useAuthFetch(
  //   `food?categoryId=${category}`
  // );

  return (
    <div className="w-full h-[1800px] font-sans bg-grey-dark">
      <ClerkProvider>
        <Header />
      </ClerkProvider>
      <Banner />

      <div className="w-full flex  gap-6 mt-8 px-6">
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-center bg-white text-[#18181B] text-lg font-medium py-2 px-6 rounded-full border-2 border-gray-300 hover:bg-[#EF4444] hover:text-white "
          >
            {category.categoryName}
          </div>
        ))}
      </div>
      <div>Appetizer</div>
      <div className="w-full h-auto flex flex-wrap gap-6 mt-10 px-6">
        {foods.map((food) => (
          <div
            key={food?._id}
            className="flex flex-col max-w-[280px] w-full bg-white border border-gray-200 rounded-xl duration-300"
          >
            <img
              src={food?.image}
              className="w-[365.33px] h-[210px] object-cover rounded-t-xl"
            />
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
      </div>
      <Footer />
    </div>
  );
}
