import React from "react";
import "./Footer.css";
import fb from "../../assets/fbfooter.png";
import inst from "../../assets/insfooter.png";
import utube from "../../assets/youfooter.png";
import cfooter from "../../assets/capitalfooter.webp";

const Footer = () => {
  return (
    <footer className="bg-[#171613] text-white w-full">
      <section>
        <div className="flex flex-col lg:flex-row items-center justify-start lg:ml-12">
          {/* Subscribe Section */}
          <div className="subscribe mt-14 text-center lg:text-left">
            <h1 className="font-semibold text-2xl mb-2">
              Subscribe Newsletter
            </h1>
            <p className="text-sm">
              Subscribe to our newsletter to get 5% off on all <br /> products.
            </p>
          </div>

          {/* Input and Button Section */}
          <div className="place flex flex-col lg:flex-row items-center mt-6 lg:mt-10 lg:ml-20">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text-black placeholder-gray-500 p-4 border border-gray-300 rounded-md w-full lg:w-auto lg:mr-2"
              style={{ height: "65px", width: "440px" }}
            />
            <button
              className="mt-4 lg:mt-0 bg-red-600 text-white p-2 rounded-md "
              style={{ height: "65px", width: "140px" }}
            >
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="icons flex mt-8 lg:mt-0 lg:ml-8 items-start">
            <span className="ml-8 mt-4 lg:mt-16 cursor-pointer">
              <img className="h-6" src={fb} alt="Facebook" />
            </span>
            <span className="ml-8 mt-4 lg:mt-16 cursor-pointer">
              <img className="h-6" src={inst} alt="Instagram" />
            </span>
            <span className="ml-8 mt-4 lg:mt-16 cursor-pointer">
              <img className="h-6" src={utube} alt="Youtube" />
            </span>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden">
      {/* Border on top */}
      <div className="border-t border-[#bbb9b52c] w-full mt-16"></div>

      {/* Footer content */}
      <div className="flex flex-col lg:flex-row mt-10 px-5 overflow-hidden">
        
        {/* Footer Image */}
        <div className="mb-10 lg:mb-0 lg:mt-10">
          <img src={cfooter} className="h-10 w-auto" alt="Footer Image" />
        </div>

        {/* Shop Men, Women, Child, and Quick Links */}
        <div className="flex flex-col lg:flex-row lg:gap-32 lg:pl-[10vh] pt-9 space-y-10 lg:space-y-0 w-full max-w-full">
          {/* Shop Men */}
          <h2 className="font-normal">
            <span className="font-semibold">Shop Men</span>
            <ul className="mt-6 text-[#BBB9B5]">
              <li className="mt-2 hov"><a href="#Formal" className="hover:underline">ClothingFashion</a></li>
              <li className="mt-2 hov"><a href="#Winter" className="hover:underline">Winter</a></li>
              <li className="mt-2 hov"><a href="#Summer" className="hover:underline">Summer</a></li>
              <li className="mt-2 hov"><a href="#Formal" className="hover:underline">Formal</a></li>
              <li className="mt-2 hov"><a href="#Casual" className="hover:underline">Casual</a></li>
            </ul>
          </h2>

          {/* Shop Women */}
          <h2 className="font-normal">
            <span className="font-semibold">Shop Women</span>
            <ul className="mt-6 text-[#BBB9B5]">
              <li className="mt-2 hov"><a href="#Formal" className="hover:underline">ClothingFashion</a></li>
              <li className="mt-2 hov"><a href="#Winter" className="hover:underline">Winter</a></li>
              <li className="mt-2 hov"><a href="#Summer" className="hover:underline">Summer</a></li>
              <li className="mt-2 hov"><a href="#Formal" className="hover:underline">Formal</a></li>
              <li className="mt-2 hov"><a href="#Casual" className="hover:underline">Casual</a></li>
            </ul>
          </h2>

          {/* Shop Child */}
          <h2 className="font-normal">
            <span className="font-semibold">Shop Child</span>
            <ul className="mt-6 text-[#BBB9B5]">
              <li className="mt-2 hov"><a href="#Formal" className="hover:underline">ClothingFashion</a></li>
              <li className="mt-2 hov"><a href="#Winter" className="hover:underline">Winter</a></li>
              <li className="mt-2 hov"><a href="#Summer" className="hover:underline">Summer</a></li>
              <li className="mt-2 hov"><a href="#Formal" className="hover:underline">Formal</a></li>
              <li className="mt-2 hov"><a href="#Casual" className="hover:underline">Casual</a></li>
            </ul>
          </h2>

          {/* Quick Links */}
          <h2 className="font-normal">
            <span className="font-semibold">Quick Links</span>
            <ul className="mt-6 text-[#BBB9B5]">
              <li className="mt-2 hov"><a href="#TrackYourOrders" className="hover:underline">Track Your Orders</a></li>
              <li className="mt-2 hov"><a href="#Support" className="hover:underline">Support</a></li>
              <li className="mt-2 hov"><a href="#FAQ" className="hover:underline">FAQ</a></li>
              <li className="mt-2 hov"><a href="#Carrier" className="hover:underline">Carrier</a></li>
              <li className="mt-2 hov"><a href="#About" className="hover:underline">About</a></li>
              <li className="mt-2 hov"><a href="#ContactUs" className="hover:underline">Contact Us</a></li>
            </ul>
          </h2>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-[#bbb9b52c] w-full mb-11"></div>

      {/* Copyright Text */}
      <p className="text-center text-[#BBB9B5] mb-2 font-light">
        Copyright ©2024 All rights reserved | This template is made with ❤️ by&nbsp;
        <a className="text-red-600 cursor-pointer">Colorlib</a>
      </p>

      {/* Bottom Bar */}
      <div className="bg-[#171613] h-3 w-full"></div>
    </section>
    </footer>
  );
};

export default Footer;
