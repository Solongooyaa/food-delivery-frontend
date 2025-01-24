"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "./(web)/(components)/Header";
import { Footer } from "./(web)/(components)/Footer";
import { HomeCategory } from "./(web)/(components)/HomeCategory";
import { ClerkProvider } from "@clerk/nextjs";
// import { MenuContainer } from "./(web)/(components)/MenuContainer";
import { useAuthFetch } from "./admin/_components/useFetchData";

export default function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/food-category`);
      const data = await res.json();
      setCategory(data);
    };
    fetchData();
  }, []);
  return (
    <ClerkProvider>
      <Header />
      <div>
        {category.map((cat) => (
          <div>{cat.categoryName}</div>
        ))}
      </div>
      {/* <MenuContainer /> */}
      <Footer />
    </ClerkProvider>
  );
}
