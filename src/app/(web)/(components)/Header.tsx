// import { Input } from "@/components/ui/input";
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/nextjs";
// import { LocateIcon, ShoppingCart } from "lucide-react";

// export const Header = () => {
//   return (
//     <div className="w-full h-[68px] bg-[#18181B] flex justify-between items-center">
//       <div className="w-[146px] h-[44px]">
//         <h4 className="text-[#F4F4F5]">NomNom</h4>
//         <h6 className="text-[#F4F4F5] ">Swift delivery</h6>
//       </div>
//       <div className="w-[500px] h-[44px] flex items-center gap-4">
//         <div className="bg-[#ffffff] rounded-full w-[251px] h-[36px] flex items-center gap-2">
//           <input
//             type="text"
//             placeholder="  Add location"
//             className="radius rounded-full flex items-end"
//           />
//         </div>

//         <div className="text-[#18181B] bg-[#F4F4F5] rounded-full w-[36px] h-[36px] flex items-center justify-center">
//           <ShoppingCart className="w-[16px] h-[16px]" />
//         </div>

//         <ClerkProvider>
//           <SignedOut>
//             <SignInButton />
//             <button className="text-white border rounded-md"></button>
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//             <button className="text-white"></button>
//           </SignedIn>
//         </ClerkProvider>
//       </div>
//     </div>
//   );
// };
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { ShoppingCart, LocateIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full h-[80px] bg-[#18181B] flex justify-between items-center px-6">
      {/* Logo Section */}
      <div className="flex flex-col">
        <h4 className="text-[#F4F4F5] text-xl font-bold">NomNom</h4>
        <span className="text-[#A1A1AA] text-sm">Swift delivery</span>
      </div>

      {/* Input, Cart, and Auth Section */}
      <div className="flex items-center gap-6">
        {/* Location Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Add location"
            className="w-[300px] h-[40px] pl-12 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <LocateIcon className="absolute top-[10px] left-4 text-gray-400" />
        </div>

        {/* Shopping Cart Icon */}
        <div className="bg-[#F4F4F5] rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition duration-300">
          <ShoppingCart className="w-5 h-5" />
        </div>

        {/* Authentication Buttons */}
        <ClerkProvider>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300">
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
