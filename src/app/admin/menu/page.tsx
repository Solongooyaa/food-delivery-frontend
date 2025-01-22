"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Uploader } from "../_components/Uploader";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminMenuPage() {
  const [value, setValue] = useState("");
  const [foods, setFoods] = useState([
    {
      _id: "",
      foodName: "",
      image: "",
      category: "",
      price: 0,
      ingredients: "",
    },
  ]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "food-delivery");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/do0qq0f0b/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const dataJson = await response.json();
      setFoods((prev) => ({ ...prev, image: dataJson.secure_url }));
    }
  };

  console.log(foods);

  const addFood = async (food: any) => {
    const response = await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
  };

  return (
    // <div className="w-full h-screen ">
    //   <div className="w-full h-[300px]] bg-[#FFFFFF] mt-6 rounded-lg px-8 py-16">
    //     Salads
    //     <div className="w-[270px] h-[241px] border 1px rounded-xl border-dotted border-[#EF4444] text-black flex flex-col items-center justify-center gap-6 ">
    //       <button
    //         className="bg-red-500 w-10 h-10 rounded-full  "
    //         onClick={addFood}
    //       >
    //         +
    //       </button>
    //       Add new Dish to Salads
    //       <input type="file" onChange={handleUpload} />
    //       {/* { imageUrl && <img src={imageUrl} alt=""} */}
    //       {foods[0]?.image && <img src={foods[0]?.image} alt="" />}
    //       {foods.map((food: any) => (
    //         <Badge key={food._id}>
    //           {food.foodName} {food.image} {food.ingredients} {food.price}
    //           {/* <Badge key={foods?._id}>
    //         {foods?.foodName} {foods?.image} {foods?.ingredients} {foods?.price} */}
    //         </Badge>
    //       ))}
    //       <div>
    //         <label htmlFor="">Food name</label>
    //         <input
    //           type="text "
    //           placeholder="Type food name"
    //           onChange={(e) => {
    //             setFoods((prev) => ({ ...prev, foodName: e.target.value }));
    //           }}
    //         />
    //       </div>
    //       <div className="w-">
    //         <label htmlFor="">Food image</label>
    //         <input
    //           type="file"
    //           placeholder="Choose a file or drag & drop it here"
    //           onChange={Uploader}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="">Food price</label>
    //         <input
    //           type="text "
    //           placeholder="Enter price..."
    //           onChange={(e) => {
    //             price: "price";
    //           }}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="">ingredients</label>
    //         <input
    //           type="number "
    //           placeholder="List ingredients..."
    //           onChange={(e) => {
    //             ingredients: "ingredients";
    //           }}
    //         />
    //       </div>
    //       <button onClick={addFood}></button>
    //     </div>
    //   </div>
    // </div>
    <div className="w-[1000px] h-[176px] bg-[#ffffff] p-6 gap-6 rounded-xl  ">
      <p className="">Salad</p>

      <div className="w-[270px] h-[241px] border 1px rounded-xl border-dotted border-[#EF4444] text-black flex flex-col items-center justify-center gap-6 ">
        <Dialog>
          <button
            className="bg-red-500 w-10 h-10 rounded-full  "
            onClick={addFood}
          >
            +
          </button>
          <div className="flex items-center gap-4 mt-4 ">
            {foods.map((food) => (
              <Badge
                className="bg-[#ffffff] text-black gap-4 p-2 rounded-full border border-[#E4E4E7] hover:border-red-500 w-[100px]"
                key={food?._id}
              >
                {food.foodName} {food.image} {food.ingredients} {food.price}
              </Badge>
            ))}
          </div>

          <div className="w-[460px] h-[272px]">
            <DialogTrigger>
              {/* <div className="bg-red-500 w-10 h-10 rounded-full">+</div> */}
              {/* <div className="flex  "> */}
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Add new food</DialogTitle>
              <label htmlFor="">Food name</label>
              <input
                className="border rounded-lg"
                placeholder="Type food name..."
                onChange={(e) => setValue(e.target.value)}
              />
              {/* </div> */}
              <div>
                <label htmlFor="">Food price</label>
                <input
                  type="text "
                  placeholder="Enter price..."
                  onChange={(e) => {
                    setValue(e.target.value);
                    price: "price";
                  }}
                />
              </div>
              <div>
                <label htmlFor="">ingredients</label>
                <input
                  type="number "
                  placeholder="List ingredients..."
                  onChange={(e) => {
                    setValue(e.target.value);
                    ingredients: "ingredients";
                  }}
                />
              </div>
              <div className="w-">
                <label htmlFor="">Food image</label>
                <input
                  type="file"
                  placeholder="Choose a file or drag & drop it here"
                  onChange={Uploader}
                />
              </div>
              <button
                className="bg-black w-100 h-100 rounded"
                onClick={() => addFood(value)}
              >
                add
              </button>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
