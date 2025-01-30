// "use client";
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/nextjs";
// import { ShoppingCart, LocateIcon } from "lucide-react";
// import Link from "next/link";
// import { OrderSheet } from "./OrderSheet";
// import { useState } from "react";

// export const Header = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="w-full h-[80px] bg-[#18181B] flex justify-between items-center px-6">
//       <div className="flex flex-col">
//         <h4 className="text-[#F4F4F5] text-xl font-bold">NomNom</h4>
//         <span className="text-[#A1A1AA] text-sm">Swift delivery</span>
//       </div>
//       <div className="flex items-center gap-6">
//         <div className="">
//           <input
//             type="text"
//             placeholder="Add location"
//             className="w-[300px] h-[40px] pl-12 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
//           />
//         </div>
//         <div
//           onClick={() => setOpen(true)}
//           className="bg-[#F4F4F5] rounded-full w-[40px] h-[40px] flex items-center justify-center transition duration-300"
//         >
//           {/* <Link href={"/ordersheet"}> */}
//           <ShoppingCart className="w-5 h-5" />
//           {/* </Link> */}
//         </div>
//         <ClerkProvider>
//           <SignedOut>
//             <SignInButton>
//               <button className="px-4 py-2 bg-red-500 text-white rounded-full">
//                 Sign In
//               </button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </ClerkProvider>
//       </div>
//     </header>
//   );
// };
"use client";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { OrderSheet } from "./OrderSheet";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[80px] bg-[#18181B] flex justify-between items-center px-6">
      <div className="flex flex-col">
        <h4 className="text-[#F4F4F5] text-xl font-bold">NomNom</h4>
        <span className="text-[#A1A1AA] text-sm">Swift delivery</span>
      </div>
      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Add location"
          className="w-[300px] h-[40px] pl-4 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        <div onClick={() => setOpen(true)}></div>
        <OrderSheet />
        <ClerkProvider>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-red-500 text-white rounded-full">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkProvider>
      </div>
    </header>
  );
};
