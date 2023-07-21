import React from 'react';
import Lottie from "lottie-react";
import coding from "../assets/coding.json";

import Topics from './Topics';

const Home = () => {
  return (

    <section >
      <div className='bg-emerald-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center '>
        <div className='mt-36 lg:mt-6'>
          <h3 className='text-2xl md:text-4xl m-6 font-bold text-gray-800' data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="700">To Make You Stronger</h3>
          <h3 className='text-2xl md:text-4xl m-6 font-bold text-gray-800'
            data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="700"
          >Drag Your Time </h3>
          <h3 className='text-2xl md:text-4xl m-6 font-bold text-gray-800'
            data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="700"
          >To </h3>
          <h1 className='text-4xl md:text-8xl m-6 font-bold text-teal-900'
            data-aos="zoom-in" data-aos-easing="ease-in"
            data-aos-duration="1500"
          >
            QuizTime
          </h1>

        </div>
        <div className=''>
          <Lottie animationData={coding} loop={true} className="-skew-y-12 w-3/4 p-4 mx-auto" />;
        </div>
      </div>
      <div>
        <Topics></Topics>
      </div>
    </section>
  );
};

export default Home;