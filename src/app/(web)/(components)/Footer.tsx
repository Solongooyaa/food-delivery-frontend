export const Footer = () => {
  return (
    <div className="w-full h-[755px] bg-[#18181B]">
      <div className="w-full h-[92px] bg-[#EF4444] mt-[60px] text-[#FAFAFA] flex justify-center items-center font-bold gap-6 text-[30px]">
        <h2> Fresh fast delivered</h2>
        <h2> Fresh fast delivered</h2>
        <h2> Fresh fast delivered</h2>
        <h2> Fresh fast delivered</h2>
      </div>
      <div className="w-full h-[228px] flex justify-around items-start text-[#FAFAFA] mt-[228px] gap-[220px] ml-[88px]">
        <div>
          <h4> NOMNOM</h4>
          <p>Swift delivery</p>
        </div>
        <div className="flex justify-center items-start gap-[112px]">
          <div>
            <p>NOMNOM</p>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div className="flex justify-center items-start gap-[112px]">
            <div>
              {" "}
              <p>MENU</p>
              <p>Appetizers</p>
              <p>Salads</p>
              <p>Pizzas</p>
              <p>Main dishes</p>
              <p>Desserts</p>
            </div>
            <div>
              <p>Side dish</p>
              <p>Brunch</p>
              <p>Desserts</p>
              <p>Beverages</p>
              <p>Fish & Sea foods</p>
            </div>
          </div>

          <div>
            <p>FOLLOW US</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[92px] mt-[60px] text-[#71717A] flex gap-12 top-[560px] ml-[88px] text-[14px] ">
        <p>Copy right 2024 © Nomnom LLC</p>
        <p>Privacy policy </p>
        <p>Terms and conditoin</p>
        <p>Cookie policy</p>
      </div>
    </div>
  );
};
