import React from "react";
import { useRef, useCallback } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

const Gallery = () => {
  const controls = useAnimation();
  const observer = useRef();
  const pawsElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        controls.start("visible");
        console.log("on screen");
      } else {
        controls.start("hidden");
      }
    });
    if (node) observer.current.observe(node);
  });
  
  return (

    
    <div className="text-gray-400 h-1/2 body-font ">
      <div className="container px-5 py-24 mx-auto justify-center flex flex-wrap">
      {/* <div ref={pawsElementRef} className='h-24 md:h-52'>
        <motion.img
          variants={{
            hidden: {
              x: -100,
            },
            visible: {
              x: 0,
              transition: {
                delay: 0.3,
                ease: "easeOut",
              },
            },
          }}
          initial='hidden'
          animate={controls}
          src='/Assets/images/paws.png'
          alt='paws'
          className='h-full'
        />
      </div> */}
      <img
          alt="gallery"
          class="w-1/10 object-cover h-full -mt-24 -ml-20 object-center block"
          src="/Assets/images/dogbaba.gif"
        />

        <div className="flex w-full mb-5 justify-center flex-wrap">
          <h1 className="sm:text-3xl text-2xl md:font-sans font-bold title-font text-black dark:text-white lg:w-1/3 lg:mb-0 mb-2">
            Some of the Adopted one's
          </h1>
        </div>
        <div className="flex w-full mb-10 justify-center flex-wrap">
          <p className="lg:pl-6 lg:w-2/3 md:font-sans font-medium leading-relaxed text-dark-grey">
            Feeding, Rescue and Adoptions are our main domain of work. Our
            volunteers daily feed 500+ dogs and cats in their respective areas.
            Adoption is our prominent feature.
          </p>
        </div>
        <div className="flex flex-wrap md:max-w-7xl">
          <div class="flex flex-wrap justify-end items-center w-1/2">
            <div class="md:p-2 px-1 py-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block rounded-tl-3xl"
                src="https://source.unsplash.com/1600x900/?dog&id=98"
              />
            </div>
            <div class="md:p-2 px-1 py-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://source.unsplash.com/1600x900/?dog&id=41"
              />
            </div>
            <div class="md:p-2 px-1 py-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block rounded-bl-3xl"
                src="https://source.unsplash.com/1600x900/?dog&id=33"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-center items-center w-1/2">
            <div class="md:p-2 px-1 py-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block rounded-tr-3xl"
                src="https://source.unsplash.com/1600x900/?dog&id=19"
              />
            </div>
            <div class="md:p-2 px-1 py-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://source.unsplash.com/1600x900/?cat&id=14"
              />
            </div>
            <div class="md:p-2 px-1 py-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block rounded-br-3xl"
                src="https://source.unsplash.com/1600x900/?dog&id=61"
              />
            </div>
          </div>
          {/* <div class="flex flex-wrap justify-start items-center w-1/3">
            <div class="md:p-2 px-1 py-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://source.unsplash.com/1600x900/?cat&id=17"
              />
            </div>
            <div class="md:p-2 px-1 py-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block rounded-tr-xl lg:rounded-tr-3xl"
                src="https://source.unsplash.com/1600x900/?dog&id=88"
              />
            </div>
            <div class="md:p-2 px-1 py-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block rounded-br-xl lg:rounded-br-3xl"
                src="https://source.unsplash.com/1600x900/?rabbit&id=99"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
    
  );
};

export default Gallery;