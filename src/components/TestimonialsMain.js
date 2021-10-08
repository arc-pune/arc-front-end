import React from 'react'
import TestimonialSlider from "./TestimonialSlider";
// import { TestimonialCard } from './TestimonialCard';

export const TestimonialsMain = () => {
    return (
      <div className='text-gray-400 h-1/2 body-font'>
        <div className=' container px-5 py-24 mx-auto justify-center flex flex-wrap'>
          <div className='flex w-full mb-5 justify-center flex-wrap'>
            <h1 className='text-center sm:text-3xl text-2xl md:font-sans font-bold title-font text-black lg:w-1/3 lg:mb-0 mb-2'>
              Testimonials
            </h1>
          </div>
          <div className='flex w-full mb-10 justify-center flex-wrap'>
            <p className=' lg:pl-6 lg:w-2/3 md:font-sans font-medium leading-relaxed text-dark-grey'>
              We have been a part of 225+ successful adoptions till date. We
              also take rescue cases enthusiastically. <br />
              We believe in coexistence and work for reducing human-animal
              conflicts.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    );
}
export default TestimonialsMain;