"use client";

import { useEffect, useState } from "react";
import { Header } from "./web/(components)/Header";
import { Footer } from "./web/(components)/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Banner } from "./web/(components)/Banner";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useAuthFetch } from "./admin/_components/useFetchData";
import { Food, Category } from "./constants/types";
import { Plus } from "lucide-react";
import { OrderSheet } from "./web/(components)/OrderSheet";

export default function Home() {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const choosenCategory = searchParam.get("category");
  const router = useRouter();

  const { isLoading, data: categories } = useAuthFetch("food-category");

  if (isLoading) return <div>Loading...</div>;

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const { data: foods } = useAuthFetch(`food?categoryId=${category}`);

  return (
    <div className="w-full h-full font-sans bg-gray-50">
      <ClerkProvider>
        <Header />
      </ClerkProvider>
      <Banner />
      <Carousel className="w-full pl-4">
        <CarouselContent className="flex mt-8 p-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center gap-4">
            {categories.map((category: Category) => (
              <div
                key={category?._id}
                className={` ${
                  category._id === choosenCategory
                    ? "bg-[#EF4444] text-white"
                    : "bg-[#ffffff] text-black"
                } gap-4 rounded-full border border-[#E4E4E7] text-lg font-medium py-2 px-6 whitespace-nowrap`}
              >
                <div
                  onClick={() => {
                    const newParams = new URLSearchParams(
                      searchParam.toString()
                    );
                    newParams.set("category", category._id);
                    router.push(pathname + "?" + newParams.toString());
                  }}
                >
                  {category?.categoryName}
                </div>
              </div>
            ))}
          </div>
        </CarouselContent>
      </Carousel>

      <div className="px-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Appetizers</h2>
        <div className="w-full flex flex-wrap gap-6">
          {foods.map((food: Food) => (
            <div
              key={food?._id}
              className="flex flex-col  max-w-[280px] w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md duration-300"
            >
              <img
                src={food?.image}
                alt={food?.foodName}
                className="w-[365.33px] h-[210px] object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-2xl font-semibold text-[#EF4444]">
                  {food?.foodName}
                  <span className="text-lg font-bold text-[#18181B]">
                    {food?.price}₮
                  </span>
                </div>
                <button
                  onClick={OrderSheet}
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-red-500 text-white"
                >
                  <Plus className=" " />
                </button>

                <p className="text-sm text-gray-600">{food?.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
