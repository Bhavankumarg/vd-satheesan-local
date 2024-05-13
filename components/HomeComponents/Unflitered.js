import React from "react";

const Unflitered = () => {
    
  return (
    <>
      <div className="relative h-full">
        {/* Image with absolute positioning */}
        <div className="absolute inset-0 bg-[url('/unfilter_images/unfilter.png')] bg-no-repeat bg-cover brightness-50">
         
        </div>
        <h6 className="text-white p-5 text-4xl text-center relative">
            Me, Unfiltered
          </h6>
        {/* Twitter timeline container */}

        <div className="flex">
          <div className="p-10  relative rounded-lg">
            <a
              className="twitter-timeline"
              data-width="331"
              data-height="500"
              href="https://twitter.com/vdsatheesan?ref_src=twsrc%5Etfw"
            >
              Tweets by vdsatheesan
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </div>
        </div>
      </div>
      {/* <div>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FVDSatheeshanParavur&width=500&show_text=true&height=202&appId"
          width="500"
          height="202"
          className="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div> */}
    </>
  );
};

export default Unflitered;
