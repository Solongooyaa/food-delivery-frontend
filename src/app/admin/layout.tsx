export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[300px] bg-white flex flex-col py-6 px-4">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold ">NomNom</h1>
          <p className="text-sm text-gray-500">Swift delivery</p>
        </div>

        {/* Menu Buttons */}
        <div className="space-y-4">
          <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full  ">
            Food menu
          </button>
          <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full">
            Orders
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6">{children}</div>
    </div>
  );
}
