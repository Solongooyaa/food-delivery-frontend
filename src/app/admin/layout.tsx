import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Header } from "../(web)/(components)/Header";
import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const CLOUDINARY_CLOUD_NAME = ;
  return (
    <ClerkProvider>
      <div className="flex h-screen">
        <div className="w-[300px] bg-white flex flex-col py-6 px-4">
          <Link href={"/"}>
            <div className="mb-[30px]">
              <h1 className="text-2xl font-bold ">NomNom</h1>
              <p className="text-sm text-gray-500">Swift delivery</p>
            </div>
          </Link>

          <div className="space-y-4">
            <Link href={"/admin"}>
              <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full border  ">
                Food menu
              </button>
            </Link>

            <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full border">
              Orders
            </button>
          </div>
        </div>
        <div className="flex-1 bg-gray-50 p-6">{children}</div>
      </div>
    </ClerkProvider>
  );
}
