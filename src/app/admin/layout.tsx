export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-[205px] h-1024px] bg-[#ffffff]">Sidebar</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
