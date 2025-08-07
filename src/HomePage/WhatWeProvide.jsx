import React from "react";
import img_1 from "../../public/02_about.jpg";

const WhatWeProvide = () => {
  return (
    <div className="bg-blue-50 py-30 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-28">

        {/* Content Section */}
        <div className="space-y-5 text-center md:text-left px-2 sm:px-4">
          <h4 className="text-base sm:text-lg font-bold uppercase tracking-widest text-blue-400">
            What We Provide You
          </h4>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
            Delivering Outstanding Business Solutions
          </h2>

          <p className="text-gray-600 text-base leading-relaxed border-l-4 border-blue-400 pl-4 my-6">
            We offer a wide range of services to help your business thrive in
            the digital world. Our solutions are crafted with care, precision,
            and a focus on results. Whether it’s design, development, or ongoing
            support — we ensure top quality with performance and customer
            satisfaction.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 font-medium list-disc list-inside">
            <li>Free Delivery</li>
            <li>Valid HTML5 & CSS3</li>
            <li>Unique & Creative Design</li>
            <li>Powered by Latest Bootstrap</li>
            <li>Performance & Quality</li>
            <li>Friendly Customer Support</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
          <img
            src={img_1}
            alt="About Us"
            className="w-[300px] md:w-full h-[300px] object-cover absolute top-0 left-0 z-20 rounded-md shadow-md"
          />

          {/* Background Card - Gray */}
          <div className="w-full h-[300px] bg-[#F1F1F1] absolute top-6 left-4 sm:left-6 z-10 rounded-md"></div>

          {/* Background Card - Blue */}
          <div className="w-full h-[300px] hidden md:inline bg-blue-400 absolute top-12 left-8 sm:left-10 z-0 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;