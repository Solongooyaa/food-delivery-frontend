"use client";
import Category from "./_components/Categories";
import AdminMenuPage from "./menu/page";

// import Layout from "./layout";

export default function Home() {
  return (
    <div className="w-full h-screen ">
     
      <Category />
      <AdminMenuPage />
      {/* <Food /> */}
    </div>
  );
}
