import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Header } from "../(web)/(components)/Header";
import Link from "next/link";
import { LayoutDashboardIcon, SettingsIcon, TruckIcon } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const CLOUDINARY_CLOUD_NAME = ;
  return (
    <div className="flex h-screen ">
      <div className="w-[205px] bg-white flex flex-col pb-[30px]  py-6 px-4">
        <Link href={"/"}>
          <div className="mb-[30px] p-6 gap-6">
            <h1 className="text-2xl font-bold ">NomNom</h1>
            <p className="text-sm text-gray-500">Swift delivery</p>
          </div>
        </Link>

        <div className="w-[165px] h-[168px] ">
          <Link href={"/admin"}>
            <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full border flex gap-1">
              <LayoutDashboardIcon />
              Food menu
            </button>
          </Link>
          <Link href={"/admin/order"}>
            <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full border flex gap-3">
              <TruckIcon />
              Orders
            </button>
          </Link>
          <Link href={"/"}>
            <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full border flex gap-3">
              <SettingsIcon />
              Settings
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 p-6">{children}</div>
    </div>
  );
}
