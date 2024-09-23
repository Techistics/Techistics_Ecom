import React from 'react';
import './Trending.css';
import tom from '../../assets/tomato.jpg';
import wb from '../../assets/wb.jpg';
import whb from '../../assets/whb.webp';
import khus from '../../assets/khus.webp';

const Trending = () => {
    return (
        <>
        <main className="container   px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 mr-20 ">
                <div className="trending-card bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img
                            src={tom}
                            alt="tom"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="content p-4">
                        <p className="price text-lg font-semibold">Cashmare Tank + Bag</p>
                        <p className="text-gray-500 font-medium mt-1">
                            $98.00 <span className="discount text-red-500 line-through">$120.00</span>
                        </p>
                    </div>
                </div>

                <div className="trending-card bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img
                            src={wb}
                            alt="wb"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="content p-4">
                        <p className="price text-lg font-semibold">Cashmare Tank + Bag</p>
                        <p className="text-gray-500 font-medium mt-1">
                            $98.00 <span className="discount text-red-500 line-through">$120.00</span>
                        </p>
                    </div>
                </div>

                <div className="trending-card bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img
                            src={whb}
                            alt="whb"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="content p-4">
                        <p className="price text-lg font-semibold">Cashmare Tank + Bag</p>
                        <p className="text-gray-500 font-medium mt-1">
                            $98.00 <span className="discount text-red-500 line-through">$120.00</span>
                        </p>
                    </div>
                </div>

                <div className="trending-card bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img
                            src={khus}
                            alt="khus"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="content p-4">
                        <p className="price text-lg font-semibold">Cashmare Tank + Bag</p>
                        <p className="text-gray-500 font-medium mt-1">
                            $98.00 <span className="discount text-red-500 line-through">$120.00</span>
                        </p>
                    </div>
                </div>
            </div>
        </main></>
    );
};

export default Trending;
