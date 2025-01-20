import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const CLOUDINARY_CLOUD_NAME = ;
  return (
    <ClerkProvider>
      <div className="flex h-screen">
        <div className="w-[300px] bg-white flex flex-col py-6 px-4">
          <div>
            <h1 className="text-2xl font-bold ">NomNom</h1>
            <p className="text-sm text-gray-500">Swift delivery</p>
          </div>

          <div className="space-y-4">
            <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full  ">
              Food menu
            </button>
            <button className="w-[150px] py-3 px-4 hover:bg-[#18181B] hover:text-[#FAFAFA] text-black rounded-full">
              Orders
            </button>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 p-6">{children}</div>
      </div>
    </ClerkProvider>
  );
}
