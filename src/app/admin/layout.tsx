// export default function AdminLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="flex w-[400px] h-[1024px] bg-[#ffffff] ">
//       <div>
//         <div className="font-bold">NomNom</div>
//         <div>Swift delivery</div>
//       </div>

//       <div className="w-[165px] h-[168px]">
//         <button className="border rounded">Food menu</button>
//         <button className="border rounded">Orders</button>
//       </div>

//       <div>{children}</div>
//     </div>
//   );
// }
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[300px] bg-white shadow-lg flex flex-col py-6 px-4">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold ">NomNom</h1>
          <p className="text-sm text-gray-500">Swift delivery</p>
        </div>

        {/* Menu Buttons */}
        <div className="space-y-4">
          <button className="w-full py-3 px-4  text-black rounded-lg  ">
            Food menu
          </button>
          <button className="w-full py-3 px-4  text-gray-500  ">Orders</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6">{children}</div>
    </div>
  );
}
