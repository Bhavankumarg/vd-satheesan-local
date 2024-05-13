import React from "react";
import FooterForm from "@/components/Forms/FooterForm";
const Footer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 bg-[url('/footer_images/Get-in-touch-background.png')] p-5 shadow">
        <div className="text-white">
          <h3 className="text-3xl font-bold p-5">Related Websites</h3>
          <p className="p-5 ">Indian National Congress</p>
          <p className="p-5 ">Kerala Pradesh Congress Committee</p>
          <p className="p-5 ">Indian Youth Congress</p>
          <p className="p-5 ">Kerala Legislative Assembly</p>
        </div>
        <div>
          <FooterForm />
        </div>

        <div className="justify-center items-center">
            <a href="mailto:hello@vdsatheesan.com">
            <img
            className="bounce-in mt-10"
            src="/footer_images/ask-me-footer.png/"
          />
            </a>
          
          <p className="text-3xl text-center mt-3 text-white py-3">
            Profile Visitors
          </p>
          <div className="flex mb-5 justify-center py-5">
            <img src="/footer_images/0.gif" />
            <img src="/footer_images/0.gif" />
            <img src="/footer_images/0.gif" />
            <img src="/footer_images/5.gif" />
            <img src="/footer_images/9.gif" />
            <img src="/footer_images/1.gif" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#035C96] to-[#022E4B] py-5 text-center text-white  shadow-t">
        Copyright © 2022 All rights reserved.
      </div>
    </>
  );
};

export default Footer;
