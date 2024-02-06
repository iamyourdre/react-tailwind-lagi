import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';

import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import banner6 from '../assets/banner6.jpg'
import banner7 from '../assets/banner7.jpg'
import banner8 from '../assets/banner8.jpg'
import banner9 from '../assets/banner9.jpg'

const Carousel = () => {
  const carouselImg = [
    {
      id: 'img1',
      url: banner1,
    },
    {
      id: 'img2',
      url: banner2,
    },
    {
      id: 'img3',
      url: banner3,
    },
    {
      id: 'img4',
      url: banner4,
    },
    {
      id: 'img5',
      url: banner5,
    },
    {
      id: 'img6',
      url: banner6,
    },
    {
      id: 'img7',
      url: banner7,
    },
    {
      id: 'img8',
      url: banner8,
    },
    {
      id: 'img9',
      url: banner9,
    },
  ];

  return (
    <div data-hs-carousel='{"loadingClasses": "opacity-0"}' class="relative">
      <div class="hs-carousel relative overflow-hidden w-full rounded-xl">
        <div class="hs-carousel-body top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700">
          {carouselImg.map((img, index) => (
            <div key={img.id} class="hs-carousel-slide">
              <img src={img.url} alt="" class="flex justify-center w-full"/>
              {/* <div class="flex justify-center h-full bg-gray-100 p-6">
                <span class="self-center text-4xl transition duration-700">First slide</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-start items-center w-1/6 h-full text-white">
        <span class="ml-2 sm:ml-5" aria-hidden="true">
          {/* <FaChevronLeft className="inline"/> */}
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-end items-center w-1/6 h-full text-white">
        <span class="sr-only">Next</span>
        <span class="mr-2 sm:mr-5" aria-hidden="true">
          {/* <FaChevronRight className="inline" /> */}
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        {carouselImg.map(() => (
          <span className="hs-carousel-active:bg-jkt-red bg-jkt-light shadow w-1 h-1 md:w-2 md:h-2 rounded-full cursor-pointer" />
        ))}
      </div>

    </div>
  );
};

export default Carousel;
