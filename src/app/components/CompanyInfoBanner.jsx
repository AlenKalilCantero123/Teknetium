import React from "react";
import style from "../styles/CompanyInfo.module.css";
export default function CompanyInfoBanner() {
  return (
    <div className={style.companyInfoContainer}>
      <div className={style.textContainer}>
        <div  className={style.textElement}> 
          <div className={style.textTitle}>Our Mission</div>Our mission at
          Teknetium is simple - to empower businesses with cutting-edge
          technology solutions that drive growth, efficiency, and innovation. We
          strive to be your trusted partner in navigating the complex world of
          IT, offering reliable services and expert guidance every step of the
          way.
        </div>
        <div className={style.textElement}>
          <div className={style.textTitle}>What Sets Us Apart</div>At Teknetium,
          we understand that every business is unique. That's why we take a
          personalized approach to every project, working closely with our
          clients to understand their specific goals and challenges. Our team of
          skilled IT professionals is committed to delivering customized
          solutions that exceed expectations and drive tangible results
        </div>
      </div>
    </div>
  );
}
