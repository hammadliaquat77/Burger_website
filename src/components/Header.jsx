// import React from 'react'
// import { useState } from 'react'
// import { Menu, X } from "lucide-react"; // icons

// function Header() {
//     const [menu , setMenu] = useState(false)
//     const Toggle = ()=> {
//         setMenu(!menu)
//     }
//   return (
//      <header className='flex justify-between text-white  w-[60%] p-10'>
//         <div className='flex justify-center items-center'>
//             <h1 className='md:text-4xl text-2xl font-bold tracking-[5px] font-poppins '>BURGUR</h1>
//         </div>
//         {/* Desktop menu */}
//         <div className='md:flex justify-center items-center hidden'>
//             <ul className='flex gap-10'>
//                 <li className='curser-pointer'>Home</li>
//                 <li className='curser-pointer'>Menu</li>
//                 <li className='curser-pointer'>About</li>
//                 <li className='curser-pointer'>Shop</li>
//             </ul>
//         </div>

//         {/* Mobile menu */}
//             <div className="md:hidden">
//           <button onClick={Toggle}>
//             {menu ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {menu && (
//         <div className="top-full left-0 w-full bg-black md:hidden">
//           <ul className="flex flex-col gap-6 items-center py-6">
//             <li className="cursor-pointer">Home</li>
//             <li className="cursor-pointer">Menu</li>
//             <li className="cursor-pointer">About</li>
//             <li className="cursor-pointer">Shop</li>
//           </ul>
//         </div>
//       )}

//      </header>
//   )
// }

// export default Header





import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" text-white p-4 md:w-[60%] mb-20 md:mb-0">
      <div className="flex justify-between items-center">
        <h1 className='md:text-4xl text-2xl font-bold tracking-[5px] font-poppins md:ml-5'>BURGUR</h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">Home</Link></li>
          <li><Link to="/menu" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">Menu</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">About</Link></li>
          <li><Link to="/shop" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">Shop</Link></li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col justify-between gap-3 mt-3 text-right space-y-1 pr-4 bg-transparent">
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Home</Link>
          <Link to="/category-menu" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Menu</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">About</Link>
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Shop</Link>
        </div>
      )}
    </nav>
  );
}