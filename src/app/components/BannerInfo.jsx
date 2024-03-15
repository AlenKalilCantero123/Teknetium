import React from "react";
import style from "../styles/BannerInfo.module.css";
import Image from "next/image";
import people from "../assets/images/people.jpg";
import connections from "../assets/images/connections.jpg";

export default function BannerInfo() {
  return (
    <>
      <div className={style.bannerInfoContainer}>
        <div>
          <Image src={people} alt="banner" className={style.bannerInfoImg}></Image>
          <Image src={connections} alt="connections" className={style.bannerInfoImg2}></Image>

          <div className={style.colorShadowSquare}></div>
          <div className={style.colorShadowCircle}></div>
        </div>
        <div className={style.textContent}>
          <div className={style.bannerInfoTitle}>Technetium IT Solutions</div>
          <p className={style.bannerInfoParagraph}>
            Revolutionize Your IT Infrastructure with Our Extensive Suite of
            Cutting-Edge Services! When it comes to enhancing your network,
            trust our seasoned professionals to handle every aspect with
            precision and expertise. From intricate wiring setups to seamless
            modem installations and meticulous rack configurations, we
            specialize in delivering top-notch solutions tailored to your
            specific needs. Experience the unparalleled reliability and
            efficiency of our services as we seamlessly integrate your systems,
            ensuring optimal performance and connectivity at every step. Our
            dedicated team is committed to exceeding your expectations,
            providing personalized support and guidance throughout your IT
            journey. Don't settle for anything less than excellence – partner
            with us today and unleash the full potential of your IT environment.
            Together, we'll pave the way for a future-proof infrastructure that
            empowers your business to thrive in the digital age.
          </p>
        </div>
      </div>
    </>
  );
}
