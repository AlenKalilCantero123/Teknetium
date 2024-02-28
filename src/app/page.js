import Image from "next/image";
import styles from "./styles/page.module.css";
import Navbar from "./components/Navbar";
import Slider from "./components/SliderCarousel";
import BannerInfo from "./components/BannerInfo";
import style from "../app/styles/page.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <BannerInfo />
        <Slider />
      </div>
    </div>
  );
}
