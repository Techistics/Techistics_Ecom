import React, { useState } from 'react';
import shoe from '../../assets/shoe.webp';
import share from '../../assets/share.png';
import StarRating from './Starrating';
// import Description from './Desc';
import './Product.css'

const Product = () => {
  const [rating, setRating] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleA, setIsVisibleA] = useState(false);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const handleClick = () => {
    setIsVisible(true);
    setIsVisibleA(false);
  };

  const handleClickA = () => {
    setIsVisible(false);
    setIsVisibleA(true);
  };

  return (
    <div className="parent">
      <div className="flex flex-col items-center bg-[#F3EAD8] h-36 pt-11">
        <h1 className="font-bold text-3xl">Product Details</h1>
        <div className="text-[#807D75]">
          <p>
            <a href="/">Home</a>
            <a className="border-l-2 border-gray-400 h-32 mx-1 my-1" href="/">
              Product Details
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#FF2020] pl-20 text-white pt-7 pb-7 m-14 flex items-center">
        <img src={shoe} className="mr-4" alt="Shoe" />
        <div className="pl-10">
          <h1 className="font-medium text-4xl">The Rage of Dragons</h1>
          <p>By Evan Winter</p>
          <p className="font-semibold italic pt-10 text-3xl">$50.00</p>
          <StarRating rating={rating} onChange={setRating} />
          <div className="flex items-center space-x-2 mt-5">
            <button onClick={addToCart} className="bg-white text-black w-36 rounded-3xl h-10">
              Add to Cart ({cartItems})
            </button>
            <img src={share} className="h-5 pl-5" alt="Share" />
          </div>

        </div>

      </div>
      <div className="buttons pt-10 flex  w-full hover:text-red-500 ">
        <div className="">
          <button onClick={handleClick} className=" text-black px-4 py-2 rounded-md flex flex-col">
            Show Paragraph
          </button>
        </div>

        <div className="">
          <button onClick={handleClickA} className=" text-black py-2 rounded-md flex flex-col">
            Show Paragraph
          </button> 
        </div>
      </div>
      <div className="data pl-10 pr-30">
        {isVisible && (
          <p className="mt-4 text-gray-700">
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes <br/>enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of<br/> 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she <br/>eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after<br/> he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company<br/>. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself<br/> quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she <br/> produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large<br/> drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
            <span className='pt-10'>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more <br/>recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses<br/> or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly<br/> need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</span>
          </p>
        )}

        {isVisibleA && (
          <p className="mt-4 text-gray-700">
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes<br/> enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of<br/> 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she <br/>eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after<br/> he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company<br/>. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself<br/> quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she <br/>produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large<br/> drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

            <span className='pt-10'>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more<br/> recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses<br/> or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly <br/>need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</span>
          </p>
        )}

      </div>
    </div>
  ); ``
};

export default Product;
