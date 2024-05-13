import React from "react";
import Homepage from "./HomePage";
import CatchUpWithMe from "./CatchUpWithMe/CatchUpWithMe";
import PublicEye from "./PublicEye";
import HomeBanner from "./HomeBanner";
import GettingCandid from "./ GettingCandid/ GettingCandid";
import Unflitered from "./Unflitered";
import CatchupSlider from "./CatchUpWithMe/CatchupSlider";

const page = () => {
  return (
    <>
      <HomeBanner />
      <Homepage />
      <CatchUpWithMe />
      <PublicEye />
      <GettingCandid/>
      <Unflitered/>
    </>
  );
};
export default page;
