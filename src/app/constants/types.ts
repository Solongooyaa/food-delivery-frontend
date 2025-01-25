export type Food = {
  foodName: string;
  _id: string;
  price: number;
  image: string;
  ingredients: string;
  value: string;
};

type UploaderProps = {
  onUpload: (url: string) => void;

  // other props
};

export type CustomRequest = Request & {
  userId: string;
};

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};
