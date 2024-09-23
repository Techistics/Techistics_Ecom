import React from "react";

const ContactC = () => {
  return (
    <div className="Parent">
      <div className="flex flex-col items-center bg-[#F3EAD8] h-36 pt-11">
        <h1 className="font-bold text-3xl">Contact</h1>
        <div className="text-[#807D75]">
          <p>
            <a href="/">Home</a>
            <a className="border-l-2 border-gray-400 h-32 mx-1 my-2" href="/">
              Contact
            </a>
          </p>
        </div>
      </div>

      <div className="Get">
        <h1 className="font-bold text-2xl mt-16 ml-20">Get in Touch</h1>
        <div className="flex flex-wrap ml-20 space-y-5 lg:space-y-0">
          {/* Message Input */}
          <label className="w-full lg:w-[126vh]">
            <span className="block text-sm font-light text-slate-700"></span>
            <input
              type="text"
              name="text"
              className="mt-5 font-thin px-8 py-4 bg-white border shadow-sm placeholder-slate-400 focus:border-gray-200 w-full sm:text-sm h-44"
              placeholder="Enter Message"
            />
          </label>

          {/* Name and Email side by side */}
          <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-[127vh]">
            <label className="w-full lg:w-[61vh]">
              <span className="block text-sm font-light text-slate-700"></span>
              <input
                type="name"
                name="name"
                className="mt-5 mb-5 font-thin h-14 px-4 py-0 bg-white border shadow-sm placeholder-slate-400 focus:border-gray-200 w-full sm:text-sm"
                placeholder="Name"
              />
            </label>

            <label className="w-full lg:w-[61vh]">
              <span className="block text-sm font-light text-slate-700"></span>
              <input
                type="email"
                name="email"
                className="mt-5 lg:ml-6 mb-5 font-thin h-14 px-4 py-0 bg-white border shadow-sm placeholder-slate-400 focus:border-gray-200 w-full sm:text-sm"
                placeholder="Email"
              />
            </label>
          </div>

          {/* Subject Input */}
          <label className="w-full lg:w-[127vh]">
            <span className="block text-sm font-light text-slate-700"></span>
            <input
              type="text"
              name="subject"
              className="mt-5 mb-5 font-thin h-14 px-4 py-0 bg-white border shadow-sm placeholder-slate-400 focus:border-gray-200 w-full sm:text-sm"
              placeholder="Enter Subject"
            />
          </label>
        </div>

        {/* Send Button */}
        <button className="outline outline-red-400 w-28 h-14 ml-20 mt-8 mb-16 outline-1 text-red-400 hover:bg-red-600 hover:text-white">
          Send
        </button>
      </div>
      <div class="text-center md:text-left lg:text-right">
        This text will be centered on small screens, left-aligned on medium
        screens, and right-aligned on large screens and above.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-4">Item 1</div>
        <div class="p-4">Item 2</div>
        <div class="p-4">Item 3</div>
      </div>
    </div>
  );
};

export default ContactC;
