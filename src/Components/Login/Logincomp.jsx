import React, { useState } from 'react';

const Logincomp = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='w-full max-w-[130vh] mx-auto shadow-xl m-10 border-gray-200 border-[0.5px] shadow-gray-300'>
      <div className="p-8 sm:p-4 text-center sm:text-left">
        <h1 className='font-semibold text-2xl sm:text-xl'>Login</h1>
        <p className='mt-2'>Enter login details to get access</p>
      </div>

      <div className="px-11 mb-5">
        <h3 className='font-semibold'>Username or Email Address</h3>
        <input
          className="placeholder:text-slate-400 block h-14 bg-white w-full sm:w-full border border-slate-300 py-2 pl-5 pr-3 mt-2 shadow-sm sm:text-sm focus:outline-none"
          placeholder="Username / Email Address"
          type="text"
          name="search"
        />
      </div>

      <div className="px-11">
        <h3 className='font-semibold'>Password</h3>
        <input
          className="placeholder:text-slate-400 block h-14 bg-white w-full sm:w-full border border-slate-300 py-2 pl-5 pr-3 mt-2 shadow-sm sm:text-sm focus:outline-none"
          placeholder="Enter Password"
          type="password"
        />
      </div>

      <div className="px-11 mt-8 flex flex-col sm:flex-row items-start justify-between">
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 border-gray-200 rounded"
          />
          <label className="text-gray-700 font-semibold">Keep Me Logged In</label>
        </div>
        <p className='text-[#ff2020] cursor-pointer mt-4 sm:mt-0 sm:ml-auto'>Forget Password?</p>
      </div>

      <div className="px-11 mt-8 flex flex-col sm:flex-row items-start justify-between sm:space-x-4">
        <p className="text-center sm:text-left mt-4 sm:mt-0">Don’t have an account? 
          <span className='text-[#ff2020]'>
            <a href="#"> Sign Up </a>
          </span>here
        </p>
        <button className='bg-[#ff2020] text-white h-10 px-8 mt-4 sm:mt-0 sm:ml-auto'>Login</button>
      </div>
    </div>
  );
};

export default Logincomp;
