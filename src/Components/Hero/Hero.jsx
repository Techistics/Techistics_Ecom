import React, { useState, useEffect } from 'react';
import h1hero from '../../assets/h1_hero1.jpg';
import h2hero from '../../assets/h1_hero2.jpg';
import arrow from '../../assets/right.png';
import arrowl from '../../assets/left.png';
import './Hero.css';

const Hero = () => {
  const [currentHero, setCurrentHero] = useState('hero1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { toggleHero(); }, 3000);
    return () => clearTimeout(timer);
  }, [currentHero]);

  const toggleHero = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentHero(currentHero === 'hero1' ? 'hero2' : 'hero1');
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <main>
      <div className='hero-container relative'>
        <div className={`relative transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {currentHero === 'hero1' && (
            <div className='hero1 relative'>
              <button
                onClick={toggleHero}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded z-10">
                <img src={arrowl} alt="Previous Hero" className="w-6 h-6" />
              </button>
              <div className="relative">
                <img src={h1hero} alt="Hero" className="w-full" />
                <div className="absolute inset-0 flex flex-col items-start justify-center text-black pl-[20vh] text-center rounded-lg">
                  <h1 className="text-3xl pl-11 pb-4 text-red-600 font-clicker-script font-normal slider-font">Fashion Sale</h1>

                  <h1 className="text-[max(3vw,2rem)] font-bold ">Minimal Menz Style</h1>
                  <p className='pt-4 text-gray-500'>Consectetur adipisicing elit. Laborum fuga incidunt<br />laboriosam voluptas iure, delectus dignissimos facilis neque<br />nulla earum.</p>
                  <button type="button" className='button ease-in duration-200 center-button bg-black mt-10'> Shop now </button>
                </div>
                <button
                  onClick={toggleHero}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded z-10">
                  <img src={arrow} alt="Next Hero" className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
          {currentHero === 'hero2' && (
            <div className='hero2 relative'>
              <button
                onClick={toggleHero}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded z-10">
                <img src={arrowl} alt="Previous Hero" className="w-6 h-6" />
              </button>
              <div className="relative">
                <img src={h2hero} alt="Hero" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-end justify-center text-black pr-[20vh] text-center rounded-lg">
                  <h1 className="text-3xl pl-11 pb-4 text-red-600 font-clicker-script font-normal slider-font">
                    Fashion Sale
                  </h1>

                  <h1 className="text-5xl font-bold">Minimal Menz Style</h1>
                  <p className='pt-4 text-gray-500'>Consectetur adipisicing elit. Laborum fuga incidunt<br />laboriosam voluptas iure, delectus dignissimos facilis neque<br />nulla earum.</p>
                  <button type="button" className='butto ease-in duration-200 bg-black m-8'>Shop now </button>
                </div>
                <button
                  onClick={toggleHero}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded z-10">
                  <img src={arrow} alt="Next Hero" className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Hero;
