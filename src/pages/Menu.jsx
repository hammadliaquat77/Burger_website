import React from 'react'
import bg_burger from "../assets/bg-images/bg-burger.png"
import bg_cookie from "../assets/bg-images/bg-cookie.png"
import bg_custer from "../assets/bg-images/bg-custer.png"
import bg_deal from "../assets/bg-images/bg-deal.png"
import bg_wings from "../assets/bg-images/bg-wings.png"

import menu_burger from "../assets/menu_images/burger.png"
import menu_fries from "../assets/menu_images/fries.png"
import menu_deal from "../assets/menu_images/deal.png"
import menu_roll from "../assets/menu_images/roll.png"
import menu_salid from "../assets/menu_images/salid.png"
import menu_sides from "../assets/menu_images/sides.png"
import menu_Tea from "../assets/menu_images/Tea.png"
import menu_wings from "../assets/menu_images/wings.png"

function Menu() {
  return (
    <div className='min-h-screen w-full bg-[#12372A] overflow-hidden'>
        <div className='relative'>
            <div className='flex'>
                <img className='h-[250px] top-[50px] left-[200px] absolute' src={bg_burger} alt="" />
                <img className='h-[250px] top-[300px] left-[1000px] absolute ' src={bg_burger} alt="" />
                <img className='h-[250px] top-[200px] left-[500px] absolute' src={bg_cookie} alt="" />
            </div>
            <div className='flex'>
                <img className='h-[250px] top-[400px] left-[100px] absolute ' src={bg_custer} alt="" />
                <img className='h-[250px] top-[50px] left-[1000px] absolute' src={bg_deal} alt="" />
            </div>
            <div className='flex'>
                <img className='h-[250px] top-[250px] left-[10px]  absolute' src={bg_cookie} alt="" />
                <img className='h-[250px] top-[400px] right-[200px] absolute' src={bg_wings} alt="" />
            </div>
        </div>

        {/* menu */}
        <div className='flex flex-col justify-center items-center min-h-screen mb-20 md:mb-0'>
                <h1 className='text-3xl font-bold text-white mb-6'>Menu</h1>
            <div className='md:flex md:flex-col md:gap-8 grid grid-cols-2 gap-4 mt-5'>

            <div className='md:flex md:gap-4 space-y-4'>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[100px] object-cover' src={menu_wings} alt="wings" />
                  <span className='text-[12px] tracking-tighter font-mono text-white -mt-4'>New In the club</span>
                </div>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[110px] object-cover' src={menu_burger} alt="burger" />
                  <span className='text-[12px] tracking-tighter font-mono text-white -mt-4'>BURGER</span>
                </div>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[200px] object-cover' src={menu_sides} alt="Sides" />
                  <span className='text-[12px] tracking-tighter font-mono text-white -mt-4'>SIDES</span>
                </div>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[130px] object-cover' src={menu_fries} alt="Sides" />
                  <span className='text-[12px] tracking-tighter font-mono text-white -mt-4'>Fries</span>
                </div>
            </div>

            <div className='md:flex md:gap-4 space-y-4'>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[100px] object-cover' src={menu_Tea} alt="wings" />
                  <span className='text-[12px] tracking-tighter font-mono text-white -mt-4'>New In the club</span>
                </div>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[120px] object-cover' src={menu_deal} alt="wings" />
                  <span className='text-[12px] tracking-tighter font-mono text-white -mt-4'>New In the club</span>
                </div>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[120px] object-cover' src={menu_roll} alt="wings" />
                  <span className='text-[12px] tracking-tighter font-mono text-white'>New In the club</span>
                </div>
                <div className='bg-[#415F55] h-[150px] w-[130px] rounded-xl flex justify-center items-center flex-col'>
                  <img className='w-[100px] object-cover' src={menu_salid} alt="wings" />
                  <span className='text-[12px] tracking-tighter font-mono text-white -mt-4'>New In the club</span>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu