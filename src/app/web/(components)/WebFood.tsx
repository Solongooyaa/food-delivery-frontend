"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Plus } from "lucide-react";
import { Food, OrderItem } from "@/app/constants/types";
import { useAuthFetch } from "@/app/(hooks)/useFetchData";

export const WebFood = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const { data: foods } = useAuthFetch(`food?categoryId=${category}`);

  const addFoodToOrder = (food: Food) => {
    localStorage.setItem(
      "orderItems",
      JSON.stringify([
        {
          food: food,
          quantity: 1,
        },
      ])
    );
  };

  const oldValies = localStorage.getItem("orderItems");
  const oldOrderItems = oldValies ? JSON.parse(oldValies) : [];

  const oldFood = oldOrderItems.find(
    (item: OrderItem) => item.food?._id === foods?._id
  );
  if (oldFood) {
    oldFood.quantity += 1;
  } else {
    oldOrderItems.push({
      foods,
      quantity: 1,
    });
  }

  return (
    <div className="w-full h-full font-sans bg-gray-50">
      <div className="px-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Appetizers</h2>
        <div className="w-full flex flex-wrap gap-6">
          {foods.map((food: Food) => (
            <div
              key={food._id}
              className="flex flex-col max-w-[280px] w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md duration-300"
            >
              <div className="relative">
                <img
                  src={food.image}
                  alt={food.foodName}
                  className="w-[365.33px] h-[210px] object-cover rounded-t-xl"
                />
                <button
                  onClick={() => addFoodToOrder(food)}
                  className="w-8 h-8 bottom-2 right-2 flex justify-center items-center rounded-full bg-[#ffffff] text-[#EF4444] absolute"
                >
                  <Plus />
                </button>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-2xl font-semibold text-[#EF4444]">
                  {food.foodName}
                  <span className="text-lg font-bold text-[#18181B]">
                    {food.price}₮
                  </span>
                </div>

                <p className="text-sm text-gray-600">{food.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
