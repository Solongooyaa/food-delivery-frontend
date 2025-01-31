"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Footer } from "./(components)/Footer";
import { Header } from "./(components)/Header";
import { WebCategory } from "./(components)/WebCategory";
import { WebFood } from "./(components)/WebFood";
import { useRouter } from "next/router";
import { useAuthFetch } from "../(hooks)/useFetchData";

export default function WebHome() {
  return (
    <div>
      {/* <Header />
      <WebCategory />
      <WebFood />
      <Footer /> */}
    </div>
  );
}
