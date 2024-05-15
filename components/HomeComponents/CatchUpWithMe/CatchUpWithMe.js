import React from 'react';
import CatchupSlider from "./CatchupSlider";

const CatchUpWithMe = () => {
  return (
    <div className="bg-[url('/home_images/about_satheesan_background.png')] lg:flex p-10 gap-4">

      <div className='bg-[#173A5B]'>
        <h3 className="text-4xl mt-20 p-10 text-white w-full text-center justify-center items-center">
          Catch Up With Me
        </h3>
      </div>

      <div className=" w-full p-3 relative">
        <p className='bg-red-900 text-white p-2'>Highlights of the Week</p>
        <img className="bg-[#173A5B] p-3 h-72 w-full object-cover" src="/home_images/vds_video_img_high.png" alt="Video Highlights" />
      </div>

      <div className="w-full">
        <CatchupSlider />
      </div>

    </div>
  );
};

export default CatchUpWithMe;




