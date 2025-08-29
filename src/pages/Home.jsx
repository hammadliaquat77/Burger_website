import React from 'react'
import Burger from "../assets/Big_burger.png"
import Frame5 from "../assets/Frame_5.png"
import Frame6 from "../assets/Frame_6.png"
import Frame7 from "../assets/Frame_7.png"
import Frame8 from "../assets/Frame_8.png"
import Header from '../components/Header'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
        });
    

    return (
        <section id="home" className='min-h-screen w-full bg-[#12372A]  border-b-2 border-[#415F55]'>
            <Header />
            <div className='flex flex-col h-full w-[85%] mx-auto pt-20'>
                {/* section 1 */}
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div data-aos="fade-down" className='text-white text-center'>
                        <h3 data-aos="fade-down" className='md:text-4xl text-xl text-gray-300 text-center font-bold md:tracking-[6px] tracking-[3px]'>The Ultimate</h3>
                        <h1 data-aos="fade-down" className='md:text-7xl text-3xl mb-2 text-center font-extrabold md:tracking-[6px] tracking-[3px] font-serif'>Burger Club</h1>
                        <span data-aos="fade-down" className='md:text-sm font-bold text-gray-300 text-center md:tracking-[3px] text-sm tracking-tighter font-sans'>Savor The Flawor, Join The Club!</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img data-aos="zoom-in-up" className='md:h-[500px] md:w-[570px] h-[300px] w-full pr-8  md:pr-0' src={Burger} alt="Burger" />
                        {/* mobile show div */}
                        <div className='w-full mx-auto flex flex-col'>
                            <span className='md:hidden text-xl text-gray-300 text-center font-light md:tracking-[6px] tracking-[3px]  -mt-7'>Fully Veg Loaded</span>
                            <span className='md:hidden text-xl text-gray-300 pl-10  font-bold font-serif md:tracking-[6px] tracking-[3px] '>RS 599/</span>
                        </div>
                    </div>
                </div>

                {/* section 2 */}
                <div className='w-[80%] mx-auto md:-mt-20 flex justify-center md:justify-start mt-10 mb-6'>
                    <div className='md:flex grid grid-cols-2 md:flex-row gap-4'>
                        <img className='md:h-[70px] hidden md:block w-[80px] hover:transition-all duration-200 md:hover:scale-125 hover:scale-110 cursor-pointer' src={Frame5} alt="" />
                        <img className='md:h-[70px] hidden md:block w-[80px] hover:transition-all duration-200 md:hover:scale-125 hover:scale-110 cursor-pointer' src={Frame6} alt="" />
                        <img className='md:h-[70px] hidden md:block w-[80px] hover:transition-all duration-200 md:hover:scale-125 hover:scale-110 cursor-pointer' src={Frame7} alt="" />
                        <img className='md:h-[70px] hidden md:block w-[80px] hover:transition-all duration-200 md:hover:scale-125 hover:scale-110 cursor-pointer' src={Frame8} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home