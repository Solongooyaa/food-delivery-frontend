"use client";
import Category from "./_components/Categories";
import { FoodCard } from "./_components/FoodCard";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

// import Layout from "./layout";

export default function Home() {
  return (
    <div>
      <div className="flex items-end justify-end">
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

      <div className="w-full h-screen mt-4">
        <Category />
        <FoodCard />
      </div>
    </div>
  );
}
