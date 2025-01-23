import { useEffect, useState } from "react";
type Menu = {
  foodName: string;
  image: string;
  ingredients: string;
  price: string;
};

export const MenuContainer = () => {
  const [menu, setMenu] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/food`);
      const data = await response.json();
      setMenu(data?.results?.slice(0, 6));
    };

    fetchData();
  }, []);

  return (
    <div className="w-[1440px] h-[2800px]">
      <div className="w-[1264px] h-[2732px] ">
        appetiser
        <div className="w-[397.33px] h-[342px] bg-[#ffffff] border rounded-md gap-5 p-4">
          <div>
            {menu.map((food) => (
              <div>
                <img src={food.image} alt="" />
                <p>{food.foodName}</p>
                <p>{food.price}</p>
                <p>{food.ingredients}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
