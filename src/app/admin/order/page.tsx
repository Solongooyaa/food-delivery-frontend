export default function AdminOrderPage() {
  const onPost async (postPath: string, body: any) => {
    fetch(`http://localhost:3000/api/${postPath}`, {
      method: "POST",
      headers: {
        authentication: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
  return (
    <div className="w-[1171px] h-[948px]">
      <h1>AdminOrderPage</h1>
    </div>
  );
}
