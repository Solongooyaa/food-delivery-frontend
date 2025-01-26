import { Input } from "@/components/ui/input";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { LocateIcon, ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full h-[68px] bg-[#18181B] flex justify-between items-center">
      <div className="w-[146px] h-[44px]">
        <h4 className="text-[#F4F4F5]">NomNom</h4>
        <h6 className="text-[#F4F4F5] ">Swift delivery</h6>
      </div>
      <div className="w-[500px] h-[44px] flex items-center gap-4">
        <div className="bg-[#ffffff] rounded-full w-[251px] h-[36px] flex items-center gap-2">
          <input
            type="text"
            placeholder="  Add location"
            className="radius rounded-full"
          />
        </div>

        <div className="text-[#18181B] bg-[#F4F4F5] rounded-full w-[36px] h-[36px] flex items-center justify-center">
          <ShoppingCart className="w-[16px] h-[16px]" />
        </div>

        <ClerkProvider>
          <SignedOut>
            <SignInButton />
            <button className="text-white border rounded-md"></button>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <button className="text-white"></button>
          </SignedIn>
        </ClerkProvider>
      </div>
    </div>
  );
};
