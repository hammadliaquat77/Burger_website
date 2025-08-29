import React from 'react'
import burger from "../assets/shop/burger.png"
import cheese from "../assets/shop/cheese.png"
import cofee from "../assets/shop/coffe.png"
import plater from "../assets/shop/platr.png"
import roll from "../assets/shop/Roll.png"
import wings from "../assets/shop/wings.png"
import tea from "../assets/menu_images/Tea.png"
import juices from "../assets/shop/juices.png"

import AOS from 'aos';
import 'aos/dist/aos.css';


function Shop() {

  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });

  return (
    <section id='shop' className='min-h-screen w-full bg-[#12372A] overflow-hidden border-b-2 border-[#415F55]'>
      {/* Shop */}
      <div className='flex flex-col justify-center items-center pt-14 mb-10'>
        <h1 className='text-3xl font-bold text-white mb-14'>Shop</h1>

        {/* card */}
        <div className='flex flex-col gap-2'>
          <div className='md:flex md:flex-row gap-3'>
            <div className='md:flex md:gap-4 space-y-4'>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={burger} alt="" className='w-[120px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={cheese} alt="" className='w-[120px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={roll} alt="" className='w-[120px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={tea} alt="" className='w-[100px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
            </div>
          </div>

          {/* card card 2 line */}
          <div className='flex flex-row gap-3'>
            <div className='md:flex md:gap-4 space-y-4'>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={cofee} alt="" className='w-[120px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={wings} alt="" className='w-[120px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={plater} alt="" className='w-[120px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
              <div data-aos="flip-left" className='bg-[#415F55] text-white h-[250px] min-w-[160px] rounded-xl flex justify-center items-center flex-col hover:transition-transform transform duration-300 hover:scale-110'>
                <img src={juices} alt="" className='w-[120px] h-[120px]' />
                <p className='font-bold tracking-[1px]'>Classic Burger</p>
                <span className='font-semibold font-mono mb-4'>Rs. 599</span>
                <button className='bg-white px-5 py-2 rounded-full text-[#12372A] font-semibold'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop