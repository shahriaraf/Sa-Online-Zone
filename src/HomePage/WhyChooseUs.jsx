import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import img_1 from "../../public/01_about.jpg";

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-blue-50 pt-30 pb-80 md:pb-30 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row  gap-12 lg:gap-28">

            {/* Image Section */}
        <div className="relative w-full ">
          {/* Top Image */}
          <img
            src={img_1}
            alt="About Us"
            className="w-[300px] lg:w-full h-[300px] object-cover absolute top-2 left-4 sm:left-6 z-20 rounded-md shadow-md"
          />

          {/* Background Card - Gray */}
          <div className="w-full h-[300px] bg-[#F1F1F1] absolute top-6 left-2 sm:left-4 z-10 rounded-md"></div>

          {/* Background Card - Blue */}
          <div className="w-full h-[300px] bg-blue-400 absolute top-12 left-0 z-0 rounded-md"></div>
        </div>

        {/* Content Section */}
        <div className="w-full space-y-5 text-center md:text-left px-2 sm:px-4">
          <h4 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-400">
            Who We Are
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            PROVIDE AWESOME AND BEST BUSINESS SOLUTIONS
          </h2>
          <p className="text-gray-600 leading-relaxed border-l-4 border-blue-400 pl-4 my-6">
            We specialize in providing creative and cost-effective business solutions tailored to your unique needs. Whether you’re a startup or an established enterprise, our strategies help you drive growth, increase efficiency, and stay ahead in your industry.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-800 font-semibold uppercase text-sm sm:text-base transition-colors duration-300"
          >
            <BsBoxArrowInUpRight className="text-base sm:text-lg" />
            Read More
          </a>
        </div>

    

      </div>
    </div>
  );
};

export default WhyChooseUs;