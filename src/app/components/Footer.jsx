import React from "react";
import style from "../styles/Footer.module.css";
import teknetium from "../assets/images/teknetiumfirma.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import workana from "../assets/workana.png";
import whatsapp from "../assets/whatsapp.png";
import  fiverr from "../assets/fiverr.png"
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.containerData}>
          <Image
            className={style.icon}
            alt="Icon"
            src={teknetium}
            width={320}
            height={70}
          ></Image>
          <div className={style.infoContainer}>
            <div className={style.phoneAddress}>
              <div className={style.phone}>
                <div className={style.titleLinkLabel}>Phone</div>
                <div>+54 911xxxxxxxxx</div>
              </div>
              <div className={style.address}>
                <div className={style.titleLinkLabel}> Address</div>
                <div>Av Falsa 123, Ciudad Imaginaria, Pais inexistente</div>
              </div>
            </div>
            <div className={style.getInTouch}>
              <div className={style.titleLinkLabel}>Get in touch</div>
              <div className={style.linkIcons}>
                <Image src={linkedin} width={40} alt="linkedin" height={40}></Image>
                <Image src={email} width={40}  alt="email" height={40}></Image>
                <Image src={whatsapp} width={40} alt="whatsapp" height={40}></Image>
                <Image src={ fiverr} width={55} alt="fiverr" height={40}></Image>

               
              </div>
              <Image src={workana} width={100} alt="workana" height={60}></Image>
            </div>
          </div>
        </div>
        <hr className={style.hr}></hr>
        <div className={style.copyright}>
          © Copyright 2024 Teknetium, All rights reserved
        </div>
      </div>
    </>
  );
}
