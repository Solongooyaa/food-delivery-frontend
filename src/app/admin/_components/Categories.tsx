// "use client";
// import { Badge } from "@/components/ui/badge";
// import { Icon } from "lucide-react";
// import React from "react";
// import { useEffect, useState } from "react";
// type Category = {
//   categoryName: string;
//   _id: string;
// };

// export default function Category() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   const addCategory = async () => {
//     const categoryName = prompt("Enter category name");
//     const response = await fetch(`http://localhost:8000/food-category`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ categoryName }),
//     });

//     const data = await response.json();
//     setCategories([...categories, data.newItem]);
//     // console.log(categoryName);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`http://localhost:8000/food-category`);
//       const data = await response.json();
//       setCategories(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-[1171px] mx-auto">
//       <h2 className="text-lg font-semibold text-gray-800 mb-4">
//         Dishes Category
//       </h2>
//       <div className="flex flex-wrap gap-2">
//         {categories.map((category) => (
//           <Badge
//             key={category?._id}
//             className="bg-blue-100 text-black px-3 py-1 rounded-lg "
//           >
//             {category?.categoryName}
//           </Badge>
//         ))}
//       </div>

//       <button
//         onClick={addCategory}
//         className="w-12 h-12 bg-red-500 text-white rounded-full shadow-md flex items-center justify-center"
//       >
//         +
//       </button>
//     </div>
//   );
// }
"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
type Category = {
  categoryName: string;
  _id: string;
};

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = async () => {
    const categoryName = prompt("Add new category");
    const response = await fetch(`http://localhost:8000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
    });

    const data = await response.json();
    setCategories([...categories, data.newItem]);
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
    <div className="w-[1000px] h-[176px] bg-[#ffffff] p-6 gap-6 rounded-lg  ">
      <h2 className="font-bold">Dishes Category</h2>
      <div className="flex items-center gap-4 mt-4 ">
        {categories.map((category) => (
          <Link href={category._id}>
            <Badge
              className="bg-[#ffffff] text-black gap-4 p-2 rounded-full border hover:border-red-500"
              key={category?._id}
            >
              {category?.categoryName}{" "}
            </Badge>
          </Link>
        ))}
      </div>

      <div className="flex  ">
        <button
          className="bg-red-500 w-10 h-10 rounded-full"
          onClick={addCategory}
        >
          +
        </button>
      </div>
    </div>
  );
}
