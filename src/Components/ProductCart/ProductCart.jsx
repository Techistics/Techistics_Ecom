import React, { useState } from "react"; // Import useState from React

const ProductCart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="parent">
      <div className="bg-pink-500 sm:bg-teal-500 p-4">Hello World</div>
      <div className="bg-pink-500 sm:bg-teal-500 p-4"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen p-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 lg:mb-0 lg:mr-4">Sample Text</h1>

        {/* Input Placeholder */}
        <input
          type="text"
          placeholder="Enter text here"
          className="border border-gray-300 rounded-md p-2 w-full lg:w-auto lg:mr-4 mb-4 lg:mb-0"
        />

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Button 1
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Button 2
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Button 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
