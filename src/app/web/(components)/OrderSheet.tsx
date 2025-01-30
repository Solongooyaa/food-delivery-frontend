// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// export const OrderSheet = () => {
//   const existingOrderString = localStorage.getItem("orderItems");
//   const existingOrder = JSON.parse(existingOrderString || "[]");
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetTitle>Order</SheetTitle>
//         <div>{existingOrder[0].food?.foodName}</div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button type="submit">Save changes</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// };
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
import { ShoppingBasket, ShoppingCart } from "lucide-react";
import { OrderItem } from "@/app/constants/types";

export const OrderSheet = () => {
  const existingOrderString = localStorage.getItem("orderItems");
  const existingOrder = JSON.parse(existingOrderString || "[]");
  const [foodOrderItems, setFoodOrderItems] =
    useState<OrderItem[]>(existingOrder);

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
      <SheetContent>
        <SheetTitle>Order</SheetTitle>
        <div>
          {existingOrder.map((orderItem: any) => (
            <div key={orderItem?.food?._id}>
              <div>{orderItem?.food?.foodName}</div>
              <button>-</button>
              <div>{orderItem?.quantity}</div>
              <button>+</button>
            </div>
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
