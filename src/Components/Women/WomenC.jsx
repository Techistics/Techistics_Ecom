import React, { useState } from 'react';

const WomenC = () => {
  const [value, setValue] = useState(500);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [genreCheckboxes, setGenreCheckboxes] = useState({
    history: false,
    horror: false,
    love: false,
    science: false,
    biography: false,
  });
  const [brandCheckboxes, setBrandCheckboxes] = useState({
    green: false,
    anondo: false,
    rinku: false,
    sheba: false,
    red: false,
  });

  const handleChange = (event) => setValue(event.target.value);
  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleTypeChange = (event) => setSelectedType(event.target.value);
  const handleSizeChange = (event) => setSelectedSize(event.target.value);
  const handleColorChange = (event) => setSelectedColor(event.target.value);
  const handleGenreCheckboxChange = (name) => {
    setGenreCheckboxes((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const handleBrandCheckboxChange = (name) => {
    setBrandCheckboxes((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="parent">
      <div className="flex flex-col items-center bg-[#F3EAD8] h-36 pt-11">
        <h1 className="font-bold text-3xl">Category</h1>
        <div className="text-[#807D75]">
          <p>
            <a href="/">Home</a>
            <a className="border-l-2 border-gray-400 h-32 mx-1 my-1" href="/">
              Category
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="box border-[#EDEFF2] text-sm border pt-10 w-64 mt-16 ml-20 pl-10 pr-2">
          <div className="flex flex-col">
            <div className="cat">
              <label htmlFor="category">Category</label>
              <select
                className="h-10 w-44 rounded-2xl border border-[#EDEFF2] mb-5"
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option className="text-[#BBB9B5]" value="">
                  Categories
                </option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
                <option value="category4">Category 4</option>
              </select>
            </div>

            <div className="type mb-5">
              <label htmlFor="type">Type</label>
              <select
                className="h-10 w-44 rounded-2xl border border-[#EDEFF2]"
                id="type"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option className="text-[#BBB9B5]" value="">
                  Select Type
                </option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
                <option value="type4">Type 4</option>
              </select>
            </div>

            <div className="size mb-5">
              <label htmlFor="size">Size</label>
              <select
                className="h-10 w-44 rounded-2xl border border-[#EDEFF2]"
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                <option className="text-[#BBB9B5]" value="">
                  Select Size
                </option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </select>
            </div>

            <div className="color mb-5">
              <label htmlFor="color">Color</label>
              <select
                className="h-10 w-44 rounded-2xl border border-[#EDEFF2]"
                id="color"
                value={selectedColor}
                onChange={handleColorChange}
              >
                <option className="text-[#BBB9B5]" value="">
                  Select Color
                </option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
              </select>
            </div>

            <div className="price mb-5 ">
              <label htmlFor="priceRange">Price Range: ${value}</label>
              <input
                type="range"
                id="priceRange"
                min="0"
                max="1000"
                value={value}
                onChange={handleChange}
                className="w-44"
              />
            </div>

            <div className="Gen">
              <h1 className="font-bold">Filter by Genres</h1>
              {Object.entries(genreCheckboxes).map(([key, checked]) => (
                <div key={key} className="flex items-center space-x-2 custom-checkbox mb-3 mt-3">
                  <input
                    type="checkbox"
                    id={`checkbox-${key}`}
                    checked={checked}
                    onChange={() => handleGenreCheckboxChange(key)}
                  />
                  <label htmlFor={`checkbox-${key}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                </div>
              ))}
            </div>

            <div className="Brand">
              <h1 className="font-bold">Filter by Brands</h1>
              {Object.entries(brandCheckboxes).map(([key, checked]) => (
                <div key={key} className="flex items-center space-x-2 custom-checkbox mb-3 mt-3">
                  <input
                    type="checkbox"
                    id={`checkbox-brand-${key}`}
                    checked={checked}
                    onChange={() => handleBrandCheckboxChange(key)}
                  />
                  <label htmlFor={`checkbox-brand-${key}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product-cards-container mt-16">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div className="product-card" key={index}>
                <img className="product-card-image" src="putcream" alt="Product" />
                <div className="product-card-details">
                  <h2 className="product-card-title">Cashmere Tank + Bag</h2>
                  <p className="product-card-price">
                    $98.00{' '}
                    <span className="text-[#CEBD9C] line-through pl-3">$120.00</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WomenC;
