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
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    dotsClass: "slick-dots",
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
          infinite: true,
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
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ",
      title: "SERVICE C",
      subtitle: "variations cba ",
      service_image: wires,
    },
    {
      description:
        " to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      title: "SERVICE B",
      subtitle: "variations bca",
      service_image: racks,
    },
    {
      description:
        "t the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It use",
      title: "SERVICE A",
      subtitle: "variations abc",
      service_image: modem,
    },
    {
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ",
      title: "SERVICE C",
      subtitle: "variations cba ",
      service_image: wires,
    },
    {
      description:
        " to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      title: "SERVICE B",
      subtitle: "variations bca",
      service_image: racks,
    },
    {
      description:
        "t the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It use",
      title: "SERVICE A",
      subtitle: "variations abc",
      service_image: modem,
    },
  ];
  return (
    <>
      Services
      <div className={style.slider}>
        <Slider className={style.sliderContainer} {...settings}>
          {services.map((e, index) => {
            return (
              <div className={style.sliderElement} key={index}>
                <h3>{e.title}</h3>
                <div>
                  <p>
                    <Image
                      src={e.service_image}
                    
                      className={style.img}
                      alt={e.title}
                    ></Image>
                    {e.subtitle} <br />
                    {e.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
