'use client'
import React, { useState } from "react";
import { GoPlay } from "react-icons/go";

const HomeBanner = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      {!showVideo && (
        <div className="flex relative" onClick={handleImageClick}>
          <img className="w-full h-700 cursor-pointer" src="/home_images/home_banner.png/" alt="Home Banner" />
          <div className="flex justify-center items-center absolute inset-0">
            <GoPlay className="size-28 text-white cursor-pointer" />
          </div>
        </div>
      )}
      {showVideo && (
        <iframe
          width="1600"
          height="900"
          src="https://www.youtube.com/embed/1DSQ3D0jpaE?autoplay=1"
          title="VDS Hero Banner V2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default HomeBanner;
