import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { use } from "react";

export const Pagination = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const router = useRouter();

  return (
    <div className="flex justify-center items-center space-x-2">
      <button className="border border-gray-300 rounded-md px-2 py-1">
        Previous
      </button>
      <button className="border border-gray-300 rounded-md px-2 py-1">
        Next
      </button>
    </div>
  );
};
