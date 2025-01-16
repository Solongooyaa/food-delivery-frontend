export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-[400px] h-[1024px] bg-[#ffffff] ">
      <div>
        <div className="font-bold">NomNom</div>
        <div>Swift delivery</div>
      </div>

      <div className="w-[165px] h-[168px]">
        <button className="border rounded">Food menu</button>
        <button className="border rounded">Orders</button>
      </div>

      <div>{children}</div>
    </div>
  );
}
