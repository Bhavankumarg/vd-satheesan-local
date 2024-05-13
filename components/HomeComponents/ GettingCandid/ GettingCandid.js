'use client'
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const GettingCandid = () => {
  return (
    <>
      <div className=" bg-[url('/home_images/about_satheesan_background.png')]">
      
      <div>
      <h6 className="text-4xl text-[#035C96] text-center p-5">
          Getting Candid
        </h6>
        <p className="text-center font-bold">
          ‘Dialogue with VDS’ is a series of weekly in-depth interviews with
          experts from various fields
        </p>
      </div>
      
      <div className="p-10 flex">
        <iframe
          className="w-3/5 h-96"
          src="https://www.youtube.com/embed/SLoAonybiFc"
          title="Dialogue with Sri. TM Thomas Issac, Finance Minister, Kerala &amp; VD Satheesan, MLA- Full Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div></div>
      </div>
    </>
  );
};

export default GettingCandid;
