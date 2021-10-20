import React, { useRef, useCallback } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

const HomeMain = () => {
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

  const { scrollYProgress } = useViewportScroll();
  const dogY = useTransform(scrollYProgress, [0, 0.03], ["20%", "0%"]);

  const dogOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  return (
    <div>
      <section className='m-0 px-15 lg:pl-32 lg:pr-16 w-full'>
        <div className='justify-center align-center md:py-16'>
          <div className='w-full home-main flex flex-col-reverse justify-between lg:flex-row items-center '>
            <div className='left lg:w-1/2 p-5 max-w-xxl mt-16 ml-16'>
              <div className=' flex flex-col lg:flex-row'>
                <div className='w-9/12'>
                  <h2 className='text-5xl font-bold lg:mb-8'>
                    Raising Hands For Injured Paws
                  </h2>
                </div>
                <div className='self-center w-3/12 flex justify-center align-center mt-6'>
                  <img
                    style={{ height: "max-content" }}
                    src='/Assets/images/pawPrints.png'
                    alt='paws'
                  />
                </div>
              </div>
              <p className='text-lg'>
                <strong>Animal Rescue Community (ARC), Pune</strong> is a group
                of college students raising hands for injured paws since 2020.
                <br />
                Feeding, Rescue and Adoptions are our main domains of work.{" "}
              </p>

              {/* We are a non-profit community organization of around 60 active
                            volunteers, and many passive volunteers all over Pune. <br />
                                        Our
                            volunteers daily feed 500+ dogs and cats in their respective
                            areas. Adoption is our prominent feature. We have been a part of
                            225+ successful adoptions till date. We also take rescue cases
                            enthusiastically. We believe in coexistence and work for
                            reducing human-animal conflicts. <br />
                            <br />
                            <strong>ARC</strong> has recently started working in Nanded,
                            being the first ever animal welfare organization in the city.
                            */}

              <div className='w-full pt-8'>
                <button className='flex justify-center font-bold text-white  bg-black dark:text-black dark:bg-white border-0 py-3 px-10 focus:outline-none rounded-lg text-lg hover:bg-gray-800 dark:hover:bg-gray-100'>
                  Help them
                </button>
              </div>
            </div>
            <img
              className='w-9/12 max-h-screen lg:h-full lg:w-1/2 absolute top-0 right-0'
              style={{ zIndex: -1 }}
              src='/Assets/images/homepageVector.png'
              alt='homevector'
            />
            <div className='right flex justify-end w-10/12 lg:5/12 pb-20 lg:p-0'>
              <motion.img
                initial={{ opacity: 1}}
                style={{ y: dogY, opacity: dogOpacity }}
                src='/Assets/images/homepageDog.png'
                alt='Dog'
                className='w-7/12 h-auto lg:1/2'
              />
            </div>
          </div>
        </div>
      </section>
      <div ref={pawsElementRef} className='h-24 md:h-52'>
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
      </div>
    </div>
  );
};

export default HomeMain;
