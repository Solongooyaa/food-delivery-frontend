"use client";

import { useEffect, useState } from "react";
import { Header } from "./web/(components)/Header";
import { Footer } from "./web/(components)/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Banner } from "./web/(components)/Banner";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useAuthFetch } from "./(hooks)/useFetchData";
import { Food, Category } from "./constants/types";
import { Plus } from "lucide-react";
import { OrderSheet } from "./web/(components)/OrderSheet";
import { WebCategory } from "./web/(components)/WebCategory";
import { WebFood } from "./web/(components)/WebFood";

export default function Home() {
  // const [foods, setFoods] = useState<Food[]>([]);

  const pathname = usePathname();
  const searchParam = useSearchParams();
  const choosenCategory = searchParam.get("category");
  const router = useRouter();

  const { isLoading, data: categories } = useAuthFetch("food-category");

  if (isLoading) return <div>Loading...</div>;

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const { data: foods } = useAuthFetch(`food?categoryId=${category}`);

  return (
    <div className="w-full h-full font-sans bg-gray-50">
      <ClerkProvider>
        <Header />
      </ClerkProvider>
      <Banner />
      <WebCategory />
      <WebFood />
      <Footer />
    </div>
  );
}
