import BannerInfo from "./components/BannerInfo";
import BrandCarousel from "./components/BrandCarousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/SliderCarousel";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <BannerInfo />
        <BrandCarousel />
        <Slider />
        <Footer></Footer>
      </div>
    </div>
  );
}
