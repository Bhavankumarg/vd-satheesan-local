import React from "react";
const SincerelyMe = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] merriweather-regular">
        <div className="lg:flex">
          <div className="">
            <h4 className="mx-auto lg:p-5 lg:text-start text-center text-xl">
              “In a democracy, we
              <br /> don’t need
              <br /> monologues
              <br /> We need dialogue”
            </h4>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-7xl p-5">Sincerely, Me</h1>
            <div className="flex justify-center">
              <img className="w-96" src="/sincere_images/Nettor-Kerala.png" />
            </div>
          </div>
        </div>
        <div className="mx-auto p-5">
          <div className="border-t-8 border-red-900 lg:flex">
            <img className="w-96 p-0" src="/sincere_images/si-1.png" />
            <h6 className="bg-[#9D9D9D] gap-0 text-white lg:p-10 p-5 text-xl lg:w-84">
              “We need to strike a balance between sustainable development and
              environment…
            </h6>
            <div className="bg-sky-800 w-full">
              <h6 className="text-white text-xl lg:p-10 p-5 lg:w-3/5">
                There is no space for the conventional kind of opposition for
                the sake of opposing something in this era. We need to have a
                consensus and continuity in developmental activities”
              </h6>
            </div>
            <img
              className="hidden lg:block top-0 mt-52 p-5 bottom-0 right-0 absolute me-20"
              src="/sincere_images/si-2.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SincerelyMe;
