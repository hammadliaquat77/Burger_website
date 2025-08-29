import React from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";



function Footer() {
  return (
    <footer className="bg-[#0d2b20] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-100">FoodieHub</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Order delicious food online and get it delivered fresh & fast.
            Burgers, fries, wraps, coffee & more!
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-100">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300 text-sm">
            <li><Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-yellow-200 transition cursor-pointer">Home</Link></li>

            <li><Link
              to="menu"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-yellow-200 transition cursor-pointer">Menu</Link></li>

            <li><Link
              to="shop"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-yellow-200 transition cursor-pointer">shop</Link></li>

            <li><Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-yellow-200 transition cursor-pointer">About</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-100">Get in Touch</h3>
          <p className="mt-3 text-gray-300 text-sm">📍 Karachi, Pakistan</p>
          <p className="text-gray-300 text-sm">📞 +92 316 3093120</p>
          <p className="text-gray-300 text-sm">✉️ hammadraza9391@gmail.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/hammadliaquat77/" target="_blank" className="hover:text-yellow-200 transition"><FaGithub size={26} /></a>
            <a href="https://www.linkedin.com/in/hammad-raza77/" target="_blank" className="hover:text-yellow-200 transition"><FaLinkedin size={26} /></a>
            <a href="https://portfolio-alpha-pearl-85.vercel.app/" target="_blank" className="hover:text-yellow-200 transition"><CgWebsite size={26} /></a>
            <a href="https://www.facebook.com/hammad.nagori.16/" className="hover:text-yellow-200 transition"><FaFacebook size={26} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FoodieHub. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
