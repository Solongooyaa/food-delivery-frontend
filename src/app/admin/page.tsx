"use client";

import { useEffect, useState } from "react";
type Category = {
  categoryName: String;
  id: Number;
};

const [categories, setCategories] = useState<Category[]>([]);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000`);
    const data = await response.json();
    setCategories(data);
  };
  fetchData();
}, []);

export default function Home() {
  return (
    <div>
      {categories.map((category) => (
        <div>{category} </div>
      ))}
    </div>
  );
}
