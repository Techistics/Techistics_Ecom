import React from 'react';
import '../../Components/Latest/Latest.css';
import rb from '../../assets/rb.webp';
import rg from '../../assets/rg.webp';
import book from '../../assets/book.webp';

const Latest = () => {
    return (
        <div className='mt-10 bg-[#b3adad15] mb-10'>
            <div>
                <h1 className='font-semibold pt-20 pb-10 text-3xl text-center'>Latest News</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
                    <div className="rb bg-white p-4 rounded-lg shadow-md">
                        <img src={rb} alt="" className='w-full h-auto object-cover'/>
                        <p className='mt-2 text-center'>Fashion Tips</p>
                        <h3 className='head cursor-pointer pt-3 font-medium text-xl text-center pb-3'>
                            What Curling Irons Are The Best <span className='block'>Ones</span>
                        </h3>
                        <p className='text-[#A2A19C] text-center'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                        <button className='und text-black pt-6 underline underline-offset-1 font-semibold block mx-auto'>Read more</button>
                    </div>

                    <div className="rb bg-white p-4 rounded-lg shadow-md">
                        <img src={book} alt="" className='w-full h-auto object-cover'/>
                        <p className='mt-2 text-center'>Fashion Tips</p>
                        <h3 className='head cursor-pointer pt-3 font-medium text-xl text-center pb-3'>
                            What Curling Irons Are The Best <span className='block'>Ones</span>
                        </h3>
                        <p className='text-[#A2A19C] text-center'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                        <button className='und text-black pt-6 underline underline-offset-1 font-semibold block mx-auto'>Read more</button>
                    </div>

                    <div className="rb bg-white p-4 rounded-lg shadow-md">
                        <img src={rg} alt="" className='w-full h-auto object-cover'/>
                        <p className='mt-2 text-center'>Fashion Tips</p>
                        <h3 className='head cursor-pointer pt-3 font-medium text-xl text-center pb-3'>
                            What Curling Irons Are The Best <span className='block'>Ones</span>
                        </h3>
                        <p className='text-[#A2A19C] text-center'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                        <button className='und text-black pt-6 underline underline-offset-1 font-semibold block mx-auto'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Latest;
