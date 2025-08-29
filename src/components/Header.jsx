import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { Link } from "react-scroll";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    // <nav className=" text-white p-4 md:w-[60%] mb-20 md:mb-0 bg-[#12372A] md:fixed z-50">  
    <nav className="fixed top-0 left-0 w-full text-white p-4 md:w-[60%] bg-[#12372A] z-50 md:left-1/2 md:translate-x-[-50%]">
      <div className="flex justify-between items-center">
        <h1 className='md:text-4xl text-2xl font-bold tracking-[5px] font-poppins md:ml-5'>BURGUR</h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold cursor-pointer">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="menu"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold cursor-pointer">
              Menu
            </Link>
          </li>

          <li>
            <Link
              to="shop"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold cursor-pointer">
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold cursor-pointer">
              About
            </Link>
          </li>
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
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">
            Home
          </Link>

          <Link
            to="menu"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">
            Menu
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">
            About
          </Link>

          <Link
            to="shop"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
}
