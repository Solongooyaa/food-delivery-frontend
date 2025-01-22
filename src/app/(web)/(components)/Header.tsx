import { Input } from "@/components/ui/input";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export const Header = () => {
  return (
    <div className="w-full h-[68px] bg-[#18181B] flex justify-around">
      <div className="w-[146px] h-[44px]">
        <h4 className="text-[#F4F4F5]">NomNom</h4>
        <h6 className="text-[#F4F4F5] size-[12px]">Swift delivery</h6>
      </div>
      <div>
        <input
          type="text"
          placeholder=" Add location"
          className="radius rounded-full"
        />
        <ClerkProvider>
          <SignedOut>
            <SignInButton />
            <button className="text-white"></button>
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
