"use client";
import { Label } from "@/components/ui/label";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <input type="date" className="w-40 h-10 border rounded-full" />
      </div>
      <div>
        {data?.map((user: any) => (
          <div key={user.id}></div>
        ))}
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
