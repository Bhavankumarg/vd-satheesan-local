import React from "react";
import WhatDrivesMeSlider from "./WhatDrivesMeSlider"
const WhatDriveMe = () => {
  return (
    <>
    <div className="lg:flex bg-[url('/home_images/about_satheesan_background.png')]">
    <div className="p-10">
        <h3 className="text-4xl py-20 p-20 bg-[#173A5B] text-white text-center">
          What Drives Me
        </h3>
      </div>
      <div className="">
        <WhatDrivesMeSlider/>
      </div>
    </div>
      
    </>
    
  );
};

export default WhatDriveMe;
