import { FaPlay, FaArrowRight, FaMagic } from 'react-icons/fa';
import banner_animation from '../../public/BannerAnimation.json';
import Lottie from 'lottie-react';


const Banner = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-blue-300 pb-40">
 

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-screen py-20">
        {/* Banner Content */}
        <div className="w-full md:w-1/2 lg:w-[45%] text-center md:text-left space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="text-gray-900">Modern</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Microservices
            </span>
            <br />
            <span className="text-gray-900">Architecture</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
            Build and scale applications with{' '}
            <span className="font-semibold text-gray-800">unmatched speed</span>{' '}
            and <span className="font-semibold text-gray-800">flexibility</span>.
            Experience the future of distributed systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <FaArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button className="group flex items-center gap-3 border-2 border-blue-200 text-blue-500 px-8 py-4 rounded-xl hover:bg-blue-50 hover:border-[#08BAF5] transition-all duration-300 font-semibold bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaPlay size={16} className="text-blue-500 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>
        </div>
         {/* ---------- Banner Animation ---------- */}
      <div className="w-full md:w-1/2 lg:w-[55%] flex justify-center">
        <div className="w-[80%] max-w-lg">
          <Lottie animationData={banner_animation} loop={true} />
        </div>
      </div>

      
      </div>
    </div>
  );
};

export default Banner;
