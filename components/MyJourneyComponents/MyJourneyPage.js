import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyJourneyPage() {
  const settings = {
    dots:true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className="slider-container mx-auto container py-10 justify-center w-72">
      <Slider {...settings}>
        <div className="">
          <Image width={550} height={450} className="w-full h-full" src="/my_journey_images/my-journey-1.png" />
        </div>
        <div>
          <Image width={550} height={450} className="w-full h-full" src="/my_journey_images/my-journey-2.png" />
        </div>
        <div>
          <Image width={550} height={450} className="w-full h-full" src="/my_journey_images/my-journey-3.png" />
        </div>
      </Slider>
    </div>
  );
}

export default MyJourneyPage;
