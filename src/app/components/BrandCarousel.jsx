'use client'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import vital from "../assets/images/vital.png";
import teknetium from "../assets/images/teknetiumfirma.png";
import computer from "../assets/logo.png";

import style from "../styles/BrandCarousel.module.css";


export default function BrandCarousel() {
  let brands = [
    { title: "vital", brand_image: vital ,width:100,height:80},
    { title: "teknetium", brand_image: teknetium,width:200,height:60 },
    { title: "computer", brand_image: computer,width:160,height:80 },
    { title: "vital", brand_image: vital ,width:100,height:80},
    { title: "teknetium", brand_image: teknetium,width:200,height:60 },
    { title: "computer", brand_image: computer,width:160,height:80 },

  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    dotsClass: "slick-dots",
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
        <div className={style.brandsTitle}>the Brands that choose us</div>
      <Slider className={style.sliderContainer} {...settings}>
        {brands.map((e, index) => {
          return (
            <div className={style.sliderElement} key={index}>
              <Image
                src={e.brand_image}
                className={e.title=="teknetium"?style.imgTeknetium:style.img}
                height={e.height}
                width={e.width}
            
                alt={e.title}
              ></Image>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
