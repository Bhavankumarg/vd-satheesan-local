import React from "react";
const FooterForm = () =>{
    return(
        <>
        

<form class="p-8  bg-[#072D46] w-full merriweather-regular">
  <div class="mb-5">
            <h3 className="text-center text-3xl font-medium p-5 text-white">Be My Friend</h3>
            <div className="flex mb-5 justify-center">
            <img src="/footer_images/0.gif"/>
            <img src="/footer_images/0.gif"/>
            <img src="/footer_images/0.gif"/>
            <img src="/footer_images/0.gif"/>
            <img src="/footer_images/2.gif"/>
            <img src="/footer_images/5.gif"/>
            </div>
            
    
  </div>
  <div className="mb-5 py-3">
  <input type="text" id="name" name="name" class="bg-[#033B5F]  py-5 text-gray-900 text-xl rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-white focus:none " placeholder="Name" required />
  </div>
  <div class="mb-5 py-3">
    <input type="tel" id="mobile" name="mobile" class="bg-[#033B5F] py-5 text-gray-900 text-xl rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-white focus:outline-none" placeholder="Mobile Number" required />
  </div>
  <div class="mb-5 py-3">
    <input type="email" id="email" name="email" class="bg-[#033B5F] py-5 text-gray-900 text-xl rounded-lg block w-full border border-[#033B5F] text-white focus:outline-none mb-5" placeholder="Email ID" required />
  </div>
  <div className="flex justify-center">
  <button type="submit" class="text-white border  font-medium rounded-md text-xl  px-5 py-2.5 mb-5 w-32">Submit</button>
  </div>
 
</form>

        </>
    )
}

export default FooterForm