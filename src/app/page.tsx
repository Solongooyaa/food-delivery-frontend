import Image from "next/image";
import { Header } from "./(web)/(components)/Header";
import { Footer } from "./(web)/(components)/Footer";
import { HomeCategory } from "./(web)/(components)/HomeCategory";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeCategory />
      <Footer />
    </div>
  );
}
