// "use client";
// import { Badge } from "@/components/ui/badge";
// import {
//   DialogContent,
//   Dialog,
//   DialogTrigger,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
// import { ClerkProvider, SignInButton } from "@clerk/nextjs";
// import { Plus } from "lucide-react";
// import Link from "next/link";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";

// import React from "react";
// import { useState } from "react";
// import { useAuthFetch } from "./useFetchData";

// type Category = {
//   categoryName: string;
//   _id: string;
// };

// export default function Category() {
//   const pathname = usePathname();
//   const searchParam = useSearchParams();
//   const choosenCategory = searchParam.get("category");
//   const router = useRouter();

//   const [newCategoryName, setNewCategoryName] = useState("");

//   const { isLoading, data: categories } = useAuthFetch("food-category");

//   const addCategory = async () => {
//     const response = await fetch(`http://localhost:8000/food-category`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ categoryName: newCategoryName }),
//     });
//     response.json();
//   };

//   //

//   if (isLoading) return <div>Loading...</div>;
//   return (
//     <div className="w-full min-h-[200px] bg-white p-6 gap-6 rounded-xl">
//       <p className="font-bold">Dishes category</p>
//       <div className="flex items-center gap-3 mt-6 overflow-x-auto flex-wrap justify-start">
//         {categories?.map((category: Category) => (
//           <div
//             className={` ${
//               category._id === choosenCategory
//                 ? "bg-[#EF4444] text-white"
//                 : "bg-[#ffffff] text-black"
//             } gap-4 p-2 rounded-full border border-[#E4E4E7] hover:border-red-500 `}
//             key={category?._id}
//           >
//             <div
//               onClick={() => {
//                 const newParams = new URLSearchParams(searchParam.toString());
//                 newParams.set("category", category._id);
//                 router.push(pathname + "?" + newParams.toString());
//               }}
//             >
//               {category?.categoryName}
//             </div>
//           </div>
//         ))}
//       </div>
//       <Dialog>
//         <DialogTrigger>
//           <div className="text-white bg-red-500 flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full  size-sm">
//             <Plus />
//           </div>
//         </DialogTrigger>
//         <DialogContent className="w-[460px] h-[272px]">
//           <DialogTitle>Add new category</DialogTitle>
//           Category name
//           <input
//             className="border rounded-lg w-[412px] h-[38px]"
//             placeholder="  Type category name..."
//             onChange={(e) => setNewCategoryName(e.target.value)}
//           />
//           <div className="flex items-end justify-end w-[412px] h-[64px] ">
//             <div
//               className="bg-[#18181B] w-[123px] h-[40px] rounded flex justify-center items-center text-white"
//               onClick={addCategory}
//             >
//               add
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//     // </div>
//   );
// }
"use client";

import {
  DialogContent,
  Dialog,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuthFetch } from "./useFetchData";

type Category = {
  categoryName: string;
  _id: string;
};

export default function Category() {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const choosenCategory = searchParam.get("category");
  const router = useRouter();

  const [newCategoryName, setNewCategoryName] = useState("");
  const {
    isLoading,
    data: categories,
    refetch,
  } = useAuthFetch("food-category");

  // Шинэ категори нэмэх функц
  const addCategory = async () => {
    if (!newCategoryName.trim()) {
      alert("Category name cannot be empty.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/food-category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: newCategoryName }),
      });

      if (response.ok) {
        setNewCategoryName(""); // Оруулах талбарыг цэвэрлэнэ
        refetch(); // Өгөгдлийг дахин татах
      } else {
        console.error("Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-[200px] bg-white p-6 gap-6 rounded-xl">
      <p className="font-bold">Dishes category</p>
      <div className="flex items-center gap-3 mt-6 overflow-x-auto flex-wrap justify-start">
        {categories && categories.length > 0 ? (
          categories.map((category: Category) => (
            <div
              key={category._id}
              className={`${
                category._id === choosenCategory
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              } gap-4 p-2 rounded-full border border-gray-300 hover:border-red-500 cursor-pointer`}
              onClick={() => {
                const newParams = new URLSearchParams(searchParam.toString());
                newParams.set("category", category._id);
                router.push(pathname + "?" + newParams.toString());
              }}
            >
              {category.categoryName}
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
      <Dialog>
        <DialogTrigger>
          <div className="text-white bg-red-500 flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full">
            <Plus />
          </div>
        </DialogTrigger>
        <DialogContent className="w-[460px] h-[272px]">
          <DialogTitle>Add new category</DialogTitle>
          <p>Category name</p>
          <input
            className="border rounded-lg w-full h-[38px] px-2 mb-4"
            placeholder="Type category name..."
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <div className="flex items-center justify-end">
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={addCategory}
            >
              Add
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
