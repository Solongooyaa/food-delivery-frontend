export type Food = {
  foodName: string;
  _id: string;
  price: number;
  image: string;
  ingredients: string;
  value: string;
};
export type Category = {
  _id: string;
  categoryName: string;
};

export type OrderItem = {
  food: string;
  quantity: number;
  price: number;
};

export type CustomRequest = Request & {
  userId: string;
};

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};
