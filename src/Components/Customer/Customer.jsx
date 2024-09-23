import React, { useState } from "react";
import "../Customer/Customer.css";
import fo from "../../assets/founder.png";
import right from "../../assets/right1.png";
import left from "../../assets/left1.png";

const slides = [
  {
    content: (
      <>
        <h1 className="montserrat-heading font-bold pt-20 pb-10 text-3xl">
          Customer Testimonials
        </h1>
        <p className="text-xl">
          Everybody is different, which is why we offer styles for <br />
          every body. Laborum fuga incidunt laboriosam voluptas <br />
          iure, delectus dignissimos facilis neque nulla earum.
        </p>
      </>
    ),
    image: fo,
    name: "Petey Cruiser",
    role: "Designer at Colorlib",
  },
  {
    content: (
      <>
        <h1 className="lg:ml-20 lg:mr-20 montserrat-heading font-bold pt-20 pb-10 text-3xl">
          Customer Testimonials
        </h1>
        <p className="text-xl">
          Everybody is different, which is why we offer styles for <br />
          every body. Laborum fuga incidunt laboriosam voluptas <br />
          iure, delectus dignissimos facilis neque nulla earum.
        </p>
      </>
    ),
    image: fo,
    name: "Another Name",
    role: "Another Role",
  },
];

const Customer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleForwardClick = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleReverseClick = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-[80vh] bg-[#F3EAD8] text-black text-center">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-container ${
              index === currentSlide ? "slide-in" : "hidden-slide"
            }`}
          >
            <div className="slide-content">
              {slide.content}
              <div className="relative md:flex hidden">
                <button
                  onClick={handleForwardClick}
                  className="absolute top-0 right-36"
                >
                  <img src={right} className="w-8 h-8" alt="Next" />
                </button>
                <button
                  onClick={handleReverseClick}
                  className="absolute top-0 left-36"
                >
                  <img src={left} className="w-8 h-8" alt="Previous" />
                </button>
              </div>
              <div className="flex items-center justify-center mt-7">
                <img src={slide.image} alt="Founder" className="mr-4" />
                <div>
                  <span className="text-[#292621] block">{slide.name}</span>
                  <p className="text-[#74706B]">{slide.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
