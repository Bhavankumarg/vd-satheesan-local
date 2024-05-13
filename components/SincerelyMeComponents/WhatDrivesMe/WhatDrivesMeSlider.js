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
    slidesToShow: 4,

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
    <>
    <div className="lg:py-20 mx-auto container h-full ">
      <Slider {...settings}>
        <div className="lg:p-0 p-10 justify-center items-center "> 
          <Image width={220} height={239} className="w-full" src="/sincere_images/what_drives_me_images/education.png"/>
        </div>
        <div className="lg:p-0 p-10 justify-center items-center ">
          <Image width={220} height={239} className="w-full" src="/sincere_images/what_drives_me_images/env.png"/>
        </div>
        <div className="lg:p-0 p-10 ">
          <Image width={220} height={239} className="" src="/sincere_images/what_drives_me_images/speech.png"/>
        </div>
        <div className="lg:p-0 p-10 justify-center items-center">
          <Image width={220} height={239} className="w-full" src="/sincere_images/what_drives_me_images/jail.png"/>
        </div>
        <div className="lg:p-0 p-10 justify-center items-center">
          <Image width={220} height={239} className="w-full" src="/sincere_images/what_drives_me_images/pr.png"/>
        </div>
        <div className="lg:p-0 p-10 justify-center items-center">
          <Image width={220} height={239} className="w-full" src="/sincere_images/what_drives_me_images/secularism.png"/>
        </div>
        <div className="lg:p-0 p-10 justify-center items-center">
          <Image width={220} height={239} className="w-full" src="/sincere_images/what_drives_me_images/women.jpg"/>
        </div>
      </Slider>
    </div>
    </>
  );
}
