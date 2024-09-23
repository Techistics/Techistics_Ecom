import React from 'react';
import '../Card/Card.css';
import ch1 from '../../assets/cardhero1.webp';
import ch2 from '../../assets/cardhero2.webp';
import ch3 from '../../assets/cardhero3.webp';

const Card = () => {
    return (
        <div className="container mx-auto px-4 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card relative overflow-hidden h-80 w-full max-w-sm cursor-pointer">
                    <img
                        src={ch1}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in transform hover:scale-105"
                        alt="Men's Fashion"
                    />
                    <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white z-10 font-bold px-4 py-1 whitespace-nowrap">
                        Men's Fashion
                    </h3>
                </div>

                <div className="card relative overflow-hidden h-80 w-full max-w-sm cursor-pointer">
                    <img
                        src={ch2}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in transform hover:scale-105"
                        alt="Women's Fashion"
                    />
                    <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white z-10 font-bold px-4 py-1 whitespace-nowrap">
                        Women's Fashion
                    </h3>
                </div>

                <div className="card relative overflow-hidden h-80 w-full max-w-sm cursor-pointer">
                    <img
                        src={ch3}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in transform hover:scale-105"
                        alt="Baby Fashion"
                    />
                    <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white z-10 font-bold px-4 py-1 whitespace-nowrap">
                        Baby Fashion
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Card;
