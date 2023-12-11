import React, { useEffect } from 'react';
import Aos from 'aos';
import Typed from 'typed.js';
import 'aos/dist/aos.css'
const Banner = () => {
    const el = React.useRef(null);
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: [' a Developer','Shaoun'],
            typeSpeed: 200,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    })
    return (
        <div>
<section className="py-8 lg:pt-5 pt-20 md:-pt-20 font-serif">
  <div className="flex flex-col lg:flex-row md:flex-row  items-center max-w-6xl px-6 py-8 mx-auto">
    <div data-aos="fade-right" className="w-full  ">
     <h1 className='lg:text-[50px] md:text-[37px] text-[30px] -mt-24 font-semibold'>Hi,I am <span ref={el} className='text-orange-600'>Shaoun</span></h1>
     <h4 className='lg:text-3xl text-[26px] text-[#919596] mt-5 font-thin'>Mern Stake Developer</h4>
     <p className='lg:text-xl text-base text-[#7b7d7d] mt-4 font-thin w-11/12'>Motivated and Enthusiastic Web Developer, Seeking Opportunities to Learn and Grow.</p>

      
    </div>
    <div  data-aos="fade-up" className="w-full lg:-mr-[200px] lg:pl-32  py-8">
      <img   src="https://i.ibb.co/mv2WVHv/394369822-1730966230758575-407753224679888312-n.jpg" className=" lg:h-[450px] md:h-[350px] rounded-full lg:w-[450px]"/>
    </div>
  </div>
</section>
        </div>
    );
};

export default Banner;