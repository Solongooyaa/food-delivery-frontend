"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminOrderPage() {
  return (
    <div className="w-[1171px] h-[948px] bg-[#ffffff] rounded">
      <div className="flex justify-between items-center p-6">
        <h1>Orders</h1>
        <input type="date" className="w-40 h-10 border" />
      </div>
      <Table></Table>
    </div>
  );
}
