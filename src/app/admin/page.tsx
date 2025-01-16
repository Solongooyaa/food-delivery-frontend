"use client";

import Category from "./_components/Categories";
import Food from "./_components/Food";
import AdminMenuPage from "./menu/page";

// import Layout from "./layout";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F4F4F5]">
      <Category />
      <AdminMenuPage />
      {/* <Food /> */}
    </div>
  );
}
