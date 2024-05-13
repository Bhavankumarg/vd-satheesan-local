import Image from "next/image";
import HeaderComponents from "../components/shared/HeaderComponents"
import HomeComponents from "../components/HomeComponents"
import Footer from "@/components/shared/FooterComponents";

export default function Home() {
  return (
    <>
    <HeaderComponents/>
    <HomeComponents/>
    <Footer/>
    </>
  );
}
