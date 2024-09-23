import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./Navbar.css";
import fb from "../../assets/facebook.svg";
import linkin from "../../assets/linkin.png";
import inst from "../../assets/video.png";
import twit from "../../assets/twitter.png";
import utube from "../../assets/play.png";
import navpic from "../../assets/navpic.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="bg-white border-b border-gray-300 shadow-lg">
        <div className="justify-between items-center py-2 px-[5%] hidden sm:flex">
          <div className="navelements flex gap-5 cursor-pointer">
            <div className="aboutus">About Us</div>
            <div className="privacy">Privacy</div>
            <div className="faqs">FAQ</div>
            <div className="careers">Careers</div>
          </div>
          <div className="">
            <div className="rightdiv flex gap-5">
              <div className="mywishlist">My wishlist</div>
              <div className="border-[0.5px] border-gray-300 h-6 "></div>
              <div className="track">Track Your Orders</div>
            </div>
          </div>
          <div className="icons flex h-5 gap-4 cursor-pointer">
            <span>
              <img className="facebook h-full" src={fb} alt="Facebook" />
            </span>
            <span>
              <img className="instagram h-full" src={inst} alt="Instagram" />
            </span>
            <span>
              <img className="twitter h-full" src={twit} alt="Twitter" />
            </span>
            <span>
              <img className="linkin h-full" src={linkin} alt="LinkedIn" />
            </span>
            <span>
              <img className="youtube h-full" src={utube} alt="YouTube" />
            </span>
          </div>
        </div>
      </header>

      <main className="sticky top-0 bg-white z-50 shadow-md">
        <div className="relative flex items-center justify-between p-4 h-20 bg-white shadow-md">
          <div className="flex items-center">
            <img src={navpic} alt="Navbar Pic" className="w-18 h-10" />
            <div className="hidden lg:flex lg:gap-x-10 lg:ml-8">
              <a href="/" className="font-bold">
                Home
              </a>
              <a href="/men" className="font-bold">
                Men
              </a>
              <a href="/women" className="font-bold">
                Women
              </a>
              <a href="/baby-collection" className="font-bold">
                Baby Collection
              </a>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
                  Pages
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-black-400"
                  />
                </Menu.Button>
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/login"
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? "bg-gray-100 text-gray-900" : ""
                          }`}
                        >
                          Login
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/cart"
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? "bg-gray-100 text-gray-900" : ""
                          }`}
                        >
                          Cart
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/product"
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? "bg-gray-100 text-gray-900" : ""
                          }`}
                        >
                          Product Details
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
              <a href="/login" className="font-bold">
                Login
              </a>
              <a href="/contact" className="font-bold">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="bg-black justify-center text-white flex h-12 pt-3">Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <a href = "#" className="text-[#CEBD9C] pl-2 underline">Shop now</a></p>
        </div>
      </main>
    </>
  );
};

export default Navbar;
