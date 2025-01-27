"use client";
import { Label } from "@/components/ui/label";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";

export default function AdminOrderPage() {
  const { getToken } = useAuth();
  const [data, setData] = useState([]);

  const onPost = async (postPath: string, body: any) => {
    const token = await getToken();
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${postPath}`, {
      method: "POST",
      headers: {
        authentication: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
  return (
    <div className="w-[1171px] h-[948px] bg-[#ffffff] rounded">
      <div className="flex justify-between items-center p-6">
        <h1>Orders</h1>
        <input type="date" className="w-40 h-10 border rounded-xl" />
        <div>
          <Label htmlFor="email">Your email address</Label>
        </div>
      </div>
    </div>
  );
}
