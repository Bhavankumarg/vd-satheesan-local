'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="lg:py-20 mx-auto container items-center">
      <Slider {...settings} className="mx-auto container">
        <div className=""> 
          <Image width={110} height={200} className="w-80" src="/home_images/cuwm_video-1.webp"/>
        </div>
        <div className="">
          <Image width={110} height={200} className="w-80" src="/home_images/cuwm_video-2.webp"/>
        </div>
        <div className="">
          <Image width={110} height={200} className="w-80" src="/home_images/cuwm_video-4.webp"/>
        </div>
        <div className="">
          <Image width={110} height={200} className="w-80" src="/home_images/cuwm_video-6.webp"/>
        </div>
        <div className="">
          <Image width={110} height={200} className="w-80" src="/home_images/cuwm_video-7.webp"/>
        </div>
      </Slider>
    </div>
  );
}
