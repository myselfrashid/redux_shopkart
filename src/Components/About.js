import React from 'react';
import Aboutme from '../assets/about_me.gif';

const About = () => {
  return (
    <div className='flex flex-col items-center xs:mx-0 xl:h-[calc(91vh_-_120px)] lg:h-[calc(90vh_-_120px)] md:h-[calc(89vh_-_120px)] xs:h-[calc(95vh_-_180px)] xl:mt-5 lg:mt-5 md:mt-4 xs:mt-16'>
        <div className='flex flex-col xl:pt-4 lg:pt-2 xl:pb-6 lg:pb-4 md:pt-1 xs:pt-0 xs:pb-0'>
            <h1 className='text-center 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-2xl xs:text-2xl font-bold w-full'>Hi! My name is Rashid Ali</h1>
            <h1 className='text-center 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg xs:text-lg font-bold w-full'>I'm a web developer and love to create websites</h1>
        </div>
        <div className='xl:w-80 lg:w-80 md:w-60 xs:w-60 pb-4'>
            <img src={Aboutme} alt='aboutme'/>
        </div>
    </div>
  )
}

export default About