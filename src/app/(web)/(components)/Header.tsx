import { Input } from "@/components/ui/input";
import { Icon } from "lucide-react";
import { CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

export const Header = () => {
  return (
    <div className="w-full h-[30px] bg-[#18181B]">
      <div>
        <h4 className="text-[#F4F4F5]">NomNom</h4>
        <h6 className="text-[#F4F4F5]">Swift delivery</h6>
        <div></div>
      </div>
    </div>
  );
};
