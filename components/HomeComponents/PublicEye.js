'use client'
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const PublicEye = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <>
      <div className=" bg-[url('/home_images/about_satheesan_background.png')]">
      <h6 className="text-center text-[#035C96] text-4xl p-10">In the Public Eye</h6>
      {/* start */}
      <div className="lg:flex gap-1 lg:p-10">
        

        <div>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_6.png"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_7.png"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_8.png"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_9.png"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/politics.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_2.png"/> 

                

                
                
        </div>

        <div>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_11.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_12.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_13.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS-Yuva-Chithan-Shivir-scaled.jpeg"/>


        </div>

        <div>
                
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_14.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_15.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS-Speech.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/Vds-Satheesan-Metting-Speech.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/vds-group.jpeg"/>
                
        </div>

        <div>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS-Public-Walk-in-Kerala.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_1.png"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_18.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1 w-full" src="/home_images/public_eye_images/public_img_10.png"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_5.png"/> 

                
        </div>

        <div>
        <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_16.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_17.jpeg"/>
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/meeting.jpg"/> 
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1 w-full" src="/home_images/public_eye_images/public_img_4.png"/>  
                <img data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1 w-full" src="/home_images/public_eye_images/public_img_3.png"/>  

                
        </div>

    </div>
        {/* end */}
        
      </div>
    </>
  );
};

export default PublicEye;
