"use client";

import { useAuthFetch } from "@/app/(hooks)/useFetchData";
import { Category } from "@/app/constants/types";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const WebCategory = () => {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const choosenCategory = searchParam.get("category");
  const router = useRouter();
  const { isLoading, data: categories } = useAuthFetch("food-category");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <h2 className="size-[50px] mt-6 pl-8">Categories</h2>
      <Carousel className="w-full pl-4">
        <CarouselContent className="flex mt-4 p-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center gap-4">
            {categories.map((category: Category) => (
              <div
                key={category?._id}
                className={` ${
                  category._id === choosenCategory
                    ? "bg-[#EF4444] text-white"
                    : "bg-[#ffffff] text-black"
                } gap-4 rounded-full border border-[#E4E4E7] text-lg font-medium py-2 px-6 whitespace-nowrap`}
              >
                <div
                  onClick={() => {
                    const newParams = new URLSearchParams(
                      searchParam.toString()
                    );
                    newParams.set("category", category._id);
                    router.push(pathname + "?" + newParams.toString());
                  }}
                >
                  {category?.categoryName}
                </div>
              </div>
            ))}
          </div>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
