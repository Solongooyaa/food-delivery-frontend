import Image from "next/image";
import { Header } from "./(web)/(components)/Header";
import { Footer } from "./(web)/(components)/Footer";
import { HomeCategory } from "./(web)/(components)/HomeCategory";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <Header />
      <HomeCategory />
      <Footer />
    </ClerkProvider>
  );
}
