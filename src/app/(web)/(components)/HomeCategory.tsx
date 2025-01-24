export const HomeCategory = () => {
  return (
    <div>
      <div className="w-full max-w-[1440px] mx-auto p-4">
        <p className="text-2xl font-bold mb-4">Categories</p>
        <div className="flex flex-wrap gap-3">
          {[
            "Appetizers",
            "Salads",
            "Pizzas",
            "Lunch favorites",
            "Main dishes",
            "Fish & Sea foods",
            "Side dish",
            "Brunch",
            "Dessert",
          ].map((category, index) => (
            <p
              key={index}
              className="px-4 py-2 border rounded-full border-[#E4E4E7] text-[#18181A] hover:bg-[#EF4444] hover:text-[#FAFAFA] cursor-pointer"
            >
              {category}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
