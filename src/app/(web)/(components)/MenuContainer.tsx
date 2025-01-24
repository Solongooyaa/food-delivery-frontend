// "use client";
// import { useEffect, useState } from "react";
// type Menu = {
//   foodName: string;
//   image: string;
//   ingredients: string;
//   price: string;
// };

// export const MenuContainer = () => {
//   const [menu, setMenu] = useState<Menu[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`http://localhost:3000`);
//       const data = await response.json();
//       setMenu(data?.results?.slice(0, 6));
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-[1440px] h-[2800px]">
//       <div className="w-[1264px] h-[2732px] ">
//         appetiser
//         <div className="w-[397.33px] h-[342px] bg-[#ffffff] border rounded-md gap-5 p-4">
//           <div>
//             {menu?.map((food) => (
//               <div>
//                 <img src={food?.image} alt="" />
//                 <p>{food?.foodName}</p>
//                 <p>{food?.price}</p>
//                 <p>{food?.ingredients}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// "use client";
// import { useAuth } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// // import { useAuthFetch } from "../../hooks/useAuthFetch";

// type Menu = {
//   id: string;
//   food: string;
//   image: string;
//   ingredients: string;
//   price: string;
// };
// export const MenuContainer = () => {
// const { isLoading, data: foods } = useAuthFetch("foods");

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(`http://localhost:3000`);
//     const data = await response.json();
//     setMenu(data?.results?.slice(0, 6));
//   };

//   fetchData();
// }, []);

//   if (foods) return <div>Loading...</div>;
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       Salads
//       {foods?.map((food: Menu) => (
//         <div
//           key={food.id}
//           className="w-full max-w-[400px] bg-white border rounded-lg shadow-md p-4"
//         ></div>
//       ))}
//       {/* {menu?.map((food, index) => (
//         <div
//           key={index}
//           className="w-full max-w-[400px] bg-white border rounded-lg shadow-md p-4"
//         >
//           <img
//             src={food?.image}
//             alt={food?.foodName}
//             className="w-full h-48 object-cover rounded-md"
//           />
//           <div className="mt-4">
//             <p className="text-xl font-semibold">{food?.foodName}</p>
//             <p className="text-gray-600">{food?.ingredients}</p>
//             <p className="text-red-500 font-bold mt-2">${food?.price}</p>
//           </div>
//         </div>
//       ))} */}
//     </div>
//   );
// };
