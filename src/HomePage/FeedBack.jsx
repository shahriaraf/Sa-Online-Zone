
import React from "react";
import Slider from "react-slick";
import { Quote, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "@taskQueen",
    role: "Freelancer",
    feedback:
      "WOW Clickers helped me earn money while studying. Fast payment & simple tasks make it perfect!",
    rating: 5,
  },
  {
    name: "@bizOwner98",
    role: "Client",
    feedback:
      "Posting micro-jobs is super easy. Got my tasks done in hours. Highly recommended platform.",
    rating: 5,
  },
  {
    name: "@nayeem_bd",
    role: "Freelancer",
    feedback:
      "I received payment within a day! Very reliable and smooth experience as a first-time user.",
    rating: 4,
  },
];

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20 px-4 md:px-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Quote className="w-4 h-4 mr-2" />
          User Feedback
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-gray-900 leading-tight">
          What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Users Say</span>
        </h2>

        <Slider {...settings}>
          {testimonials.map((user, index) => (
            <div key={index} className="px-2">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center shadow-md">
                    <Quote className="w-8 h-8 text-indigo-600" />
                  </div>
                </div>

                <p className="text-gray-700 italic text-lg mb-6">
                  "{user.feedback}"
                </p>

                <div className="flex justify-center text-yellow-400 mb-2">
                  {Array.from({ length: user.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-indigo-700 font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feedback;