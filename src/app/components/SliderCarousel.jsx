"use client";
import Image from "next/image";
import React from "react";
import wires from "../assets/images/wires.jpg";
import racks from "../assets/images/racks.jpg";
import modem from "../assets/images/modem.jpg";
import style from "../styles/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    dotsClass: "slick-dots",
    arrows: false,

    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2500,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          dotsClass: "slick-dots",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2500,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const services = [
    {
      description:
        "     to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now ",
      title: "SERVICE C",
      subtitle: "variations cba ",
      service_image: wires,
    },
    {
      description:
        "     to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now ",
      title: "SERVICE B",
      subtitle: "variations bca",
      service_image: racks,
    },
    {
      description:
        "     to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now ",
      title: "SERVICE A",
      subtitle: "variations abc",
      service_image: modem,
    },
    {
      description:
        "     to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now ",
      title: "SERVICE C",
      subtitle: "variations cba ",
      service_image: wires,
    },
    {
      description:
        "     to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now ",
      title: "SERVICE B",
      subtitle: "variations bca",
      service_image: racks,
    },
    {
      description:
        "     to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now ",
      title: "SERVICE A",
      subtitle: "variations abc",
      service_image: modem,
    },
  ];
  return (
    <>
 
      <div className={style.slider}>
        <Slider className={style.sliderContainer} {...settings}>
          {services.map((e, index) => {
            return (
              <div className={style.sliderElement} key={index}>
                <div>
                  <Image
                    src={e.service_image}
                    className={style.img}
                    alt={e.title}
                  ></Image>
                  <p className={style.subtitle}>{e.subtitle}</p>
                  <p className={style.description}>{e.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
