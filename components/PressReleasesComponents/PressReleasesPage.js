import React from "react";
import PressReleasesSlider from "./PressReleasesSlider";
const PressReleasesPage = () => {
  return (
    <>
      <div className="container mx-auto p-16 merriweather-regular">
        <h6 className="text-xl text-center">
          Stay updated with the latest announcements and updates on my efforts
          to create positive change in the country.
        </h6>
      </div>
      <div>
        <PressReleasesSlider />
      </div>
    </>
  );
};

export default PressReleasesPage;
