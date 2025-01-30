"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pencil, ShoppingBasket, ShoppingCart } from "lucide-react";
import { OrderItem } from "@/app/constants/types";

export const OrderSheet = () => {
  const existingOrderString = localStorage.getItem("orderItems");
  const existingOrder = JSON.parse(existingOrderString || "[]");
  const [foodOrderItems, setFoodOrderItems] =
    useState<OrderItem[]>(existingOrder);
  const onMinusOrderItems = (idx: number) => {
    const newOrderItems = foodOrderItems.map((orderItem, index) => {
      if (idx === index && orderItem.quantity > 1) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1,
        };
      } else {
        return orderItem;
      }
    });
    setFoodOrderItems(newOrderItems);
    localStorage.setItem("orderItems", JSON.stringify(newOrderItems));
  };
  const onPlusOrderItems = (idx: number) => {
    const newOrderItems = foodOrderItems.map((orderItem, index) => {
      if (idx === index) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });
    setFoodOrderItems(newOrderItems);
    localStorage.setItem("orderItems", JSON.stringify(newOrderItems));
  };
//   const deleteFood = async (id: string) => {
//     const response = await fetch(`http://localhost:8000/food/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       setFoods(foods.filter((food: any) => food._id !== id));
//     } else {
//       console.error("Failed to delete food");
//     }
//     console.log(setFoods(foods.filter((food: any) => food._id !== id)));
//   };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="w-[40px] h-[40px] bg-[#F4F4F5] rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition duration-300 cursor-pointer"
          variant="outline"
        >
          <ShoppingCart className="w-5 h-5"></ShoppingCart>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#404040]">
        <SheetTitle className="flex gap-4 w-[471px] h-[28px] text-[#FAFAFA]">
          <ShoppingCart></ShoppingCart>
          Order Details
        </SheetTitle>
        <div className="w-[350px] h-[540px] bg-[#ffffff] gap-4 mt-4 rounded-xl">
          <p className="pt-4 pl-2">My Cart</p>
          {existingOrder.map((orderItem: any, idx: number) => (
            <div className="flex gap-4 mt-2 pl-2" key={orderItem?.food?._id}>
              <div className="w-[120px] rounded-xl mt-4">
                <img
                  src={orderItem?.food?.image}
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="w-[200px] h-[120px] ">
                {/* <button
                  onClick={() => deleteFood(food?._id)}
                  className="w-[44px] h-[44px] text-red-500 bg-white rounded-full flex items-center justify-center border border-gray-300"
                >
                  <Pencil className="w-5 h-5 " />
                </button> */}
                <p className="text-[#EF4444]">{orderItem?.food?.foodName}</p>
                <p className="text-sm text-gray-600">
                  {orderItem?.food.ingredients}
                </p>
                <div className="flex gap-4">
                  <button onClick={() => onMinusOrderItems(idx)}>-</button>
                  <p>{orderItem?.quantity}</p>
                  <button onClick={() => onPlusOrderItems(idx)}>+</button>
                  <div>{orderItem?.food?.price}₮</div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center border rounded-full ">
            Add food
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="mt-4" type="submit">
              Checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
