"use client";

import Navbar from "../components/Navbar";
import Slider from "../components/SliderCarousel";
import BannerInfo from "../components/BannerInfo";
import style from "../../app/styles/page.module.css";
import { usePathname } from "next/navigation";

import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <div className="backgroundRoot">
        <Navbar route={pathname}></Navbar>

        <div className={style.container}>
          <BannerInfo />
          <BrandCarousel />
          <Slider />
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
