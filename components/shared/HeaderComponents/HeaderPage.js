"use clint";
import React from "react";
const Header = () => {
  return (
    <>
      <nav class="bg-[#033B5F]">
        <div class="max-w-screen-xl flex lg:flex-wrap items-center justify-between p-0">
          <div class="lg:flex">
            <div className="w-1/2">
            <a href="/" class="lg:flex">
              <img src="/home_images/vds-main.png" class="p-0 h-32" alt="vds" />
              <span class="self-center font-bold text-white text-3xl mt-4 flex-none text-start text-center">
                <h6 className="self-center text-center text-3xl">
                V D Satheesan
                </h6>
                <p class=" text-white font-bold ms-2">For the people</p>
              </span>
            </a>
            </div>
            
            <div class="flex lg:grid lg:grid-col  lg:py-5 lg:grid-flow-row">

              <p class="text-white lg:m-5 ms-2">
                <i>
                “People respect us not for our ability to make laws, but because
                of our ability to undo the injustice done to our people.”
                </i>
                 </p>
            </div>
          </div>

          <div class="fixed top-0 right-0 lg:me-14 mt-5">
            <button
              class="px-5 py-2.5 mb-2"
              type="button"
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
            >
              <img src="/home_images/menu.svg" />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="drawer-right-example"
        class="bg-[#033B5F] fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full w-80 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div className="py-4 h-full">

          <ul class="space-y-3 font-medium">
            <li className="border-b">
              <a
                href="/"
                className="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Home</span>
              </a>
            </li>

            <li className="border-b">
              <a
                href="/"
                className="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">My Journey</span>
              </a>
            </li>
            <li className="border-b">
              <a
                href="/sincerely-me"
                class="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Sincerely, Me
                </span>
              </a>
            </li>
            <li className="border-b">
              <a
                href="/my-constituency"
                class="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My Constituency
                </span>
              </a>
            </li>
            <li className="border-b">
              <a
                href="/in-my-book-shelf"
                class="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  In My Book Shelf
                </span>
              </a>
            </li>
            <li className="border-b">
              <a
                href="/press-releases"
                class="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Press Releases
                </span>
              </a>
            </li>
            <li className="border-b">
              <a
                href="newsletters"
                class="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Newsletters
                </span>
              </a>
            </li>
            <li className="">
              <a
                href="/get-in-touch"
                className="flex items-center py-5 text-gray-900 rounded-lg text-white  dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Get in Touch
                </span>
              </a>
            </li>
          </ul>

          
        </div>
      </div>
    </>
  );
};

export default Header;
