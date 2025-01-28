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
      <div className="flex flex-col">
        <h4 className="text-[#F4F4F5] text-xl font-bold">NomNom</h4>
        <span className="text-[#A1A1AA] text-sm">Swift delivery</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="">
          <input
            type="text"
            placeholder="Add location"
            className="w-[300px] h-[40px] pl-12 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <LocateIcon className=" top-[10px] left-4 text-gray-400" />
        </div>
        <div className="bg-[#F4F4F5] rounded-full w-[40px] h-[40px] flex items-center justify-center hover:text-white transition duration-300">
          <ShoppingCart className="w-5 h-5" />
        </div>
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
