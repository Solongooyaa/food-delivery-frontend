// export const Footer = () => {
//   return (
//     <div className="w-full h-[755px] bg-[#18181B]">
//       <div className="w-full h-[92px] bg-[#EF4444] mt-[60px] text-[#FAFAFA] flex justify-center items-center font-bold gap-6 text-[30px] text-animation-infinite-scroll">
//         <h4> Fresh fast delivered</h4>
//         <h4> Fresh fast delivered</h4>
//         <h4> Fresh fast delivered</h4>
//         <h4> Fresh fast delivered</h4>
//       </div>
//       <div className="w-full h-[228px] flex justify-around items-start text-[#FAFAFA] mt-[228px] gap-[220px] ml-[88px]">
//         <div>
//           <h4> NOMNOM</h4>
//           <p>Swift delivery</p>
//         </div>
//         <div className="flex justify-center items-start gap-[112px]">
//           <div>
//             <p>NOMNOM</p>
//             <p>Home</p>
//             <p>Contact us</p>
//             <p>Delivery zone</p>
//           </div>
//           <div className="flex justify-center items-start gap-[112px]">
//             <div>
//               {" "}
//               <p>MENU</p>
//               <p>Appetizers</p>
//               <p>Salads</p>
//               <p>Pizzas</p>
//               <p>Main dishes</p>
//               <p>Desserts</p>
//             </div>
//             <div>
//               <p>Side dish</p>
//               <p>Brunch</p>
//               <p>Desserts</p>
//               <p>Beverages</p>
//               <p>Fish & Sea foods</p>
//             </div>
//           </div>

//           <div>
//             <p>FOLLOW US</p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-[92px] mt-[60px] text-[#71717A] flex gap-12 top-[560px] ml-[88px] text-[14px] ">
//         <p>Copy right 2024 © Nomnom LLC</p>
//         <p>Privacy policy </p>
//         <p>Terms and conditoin</p>
//         <p>Cookie policy</p>
//       </div>
//     </div>
//   );
// };
export const Footer = () => {
  return (
    <div className="w-full bg-[#18181B] relative">
      <div className="w-full h-[92px] bg-[#EF4444] text-[#FAFAFA] flex items-center font-bold text-[30px] overflow-hidden text-animation-infinite-scroll">
        <div className="flex gap-6">
          <h4>Fresh fast delivered</h4>
          <h4>Fresh fast delivered</h4>
          <h4>Fresh fast delivered</h4>
          <h4>Fresh fast delivered</h4>
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-start text-[#FAFAFA] mt-28 px-8 gap-12">
        <div>
          <h4 className="font-bold text-lg">NOMNOM</h4>
          <p>Swift delivery</p>
        </div>
        <div className="flex gap-12">
          <div>
            <h5 className="font-semibold mb-2">NOMNOM</h5>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Contact us</li>
              <li>Delivery zone</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">MENU</h5>
            <ul className="space-y-2">
              <li>Appetizers</li>
              <li>Salads</li>
              <li>Pizzas</li>
              <li>Main dishes</li>
              <li>Desserts</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">SIDE MENU</h5>
            <ul className="space-y-2">
              <li>Brunch</li>
              <li>Desserts</li>
              <li>Beverages</li>
              <li>Fish & Seafoods</li>
            </ul>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-2">FOLLOW US</h5>
        </div>
      </div>

      <div className="w-full mt-12 text-[#71717A] flex flex-wrap justify-start gap-4 text-sm px-8 py-4 border-t border-gray-700">
        <p>© 2024 Nomnom LLC</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
};
