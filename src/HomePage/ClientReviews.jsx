import React, { useState, useEffect } from 'react';

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Startup Founder",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "This platform saved my startup! Found a developer who built our MVP in just 3 days for a fraction of agency costs. The quality exceeded my expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment: "Our go-to for quick design tasks. The freelancers are professional and deliver fast. Only wish there were more niche specialists sometimes.",
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "E-commerce Manager",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5,
      comment: "Completed 50+ micro-jobs here. The escrow system gives me peace of mind, and the quality is consistently good. Saved us thousands in operational costs.",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Product Manager",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment: "The talent pool is amazing. We've launched several mini-projects successfully. Highly recommend for startups and lean teams!",
    },
    {
      id: 5,
      name: "James Lee",
      role: "App Developer",
      avatar: "https://randomuser.me/api/portraits/men/48.jpg",
      rating: 4,
      comment: "Perfect for getting quick UI/UX feedback. The community is supportive, and the platform is very intuitive.",
    },
    {
      id: 6,
      name: "Linda Brown",
      role: "CEO, GreenTech",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      comment: "We completed our rebranding campaign using just freelance creatives from here. Smooth process and stunning results.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const maxIndex = Math.ceil(reviews.length / slidesPerView) - 1;
      setCurrentIndex(prevIndex => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length, slidesPerView]);

  const maxIndex = Math.ceil(reviews.length / slidesPerView) - 1;

  return (
    <section className="py-30 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm text-blue-500 uppercase font-semibold mb-1">
              What Our Clients Say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Real Voices, Real Success
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md mt-4 md:mt-0">
            Discover how our tailored freelance solutions have helped thousands of professionals and businesses achieve their goals with speed and efficiency.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              width: `${(reviews.length / slidesPerView) * 100}%`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / reviews.length}%` }}
              >
                <div className="bg-blue-100 h-full p-6 rounded-lg border border-blue-50 hover:shadow-lg transition duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-black">{review.name}</h4>
                      <p className="text-sm text-blue-500">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sm text-gray-600 border-l-2 border-blue-500 pl-4 italic">
                    "{review.comment}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg inline-flex items-center">
            Read More Success Stories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
import React, { useState, useEffect } from 'react';

// Custom arrow buttons
const PrevArrow = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-white p-3 rounded-full shadow-lg absolute -top-16 right-16 z-20 transition-all duration-300 ${
      disabled 
        ? 'bg-gray-300 cursor-not-allowed' 
        : 'bg-blue-500 hover:bg-blue-600 hover:scale-110'
    }`}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </button>
);

const NextArrow = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-white p-3 rounded-full shadow-lg absolute -top-16 right-2 z-20 transition-all duration-300 ${
      disabled 
        ? 'bg-gray-300 cursor-not-allowed' 
        : 'bg-blue-500 hover:bg-blue-600 hover:scale-110'
    }`}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
    </svg>
  </button>
);

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Startup Founder",
      company: "TechStart Inc.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "This platform saved my startup! Found a developer who built our MVP in just 3 days for a fraction of agency costs. The quality exceeded my expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment: "Our go-to for quick design tasks. The freelancers are professional and deliver fast. Only wish there were more niche specialists sometimes.",
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "E-commerce Manager",
      company: "RetailPro",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5,
      comment: "Completed 50+ micro-jobs here. The escrow system gives me peace of mind, and the quality is consistently good. Saved us thousands in operational costs.",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment: "The talent pool is amazing. We've launched several mini-projects successfully. Highly recommend for startups and lean teams!",
    },
    {
      id: 5,
      name: "James Lee",
      role: "App Developer",
      company: "DevStudio",
      avatar: "https://randomuser.me/api/portraits/men/48.jpg",
      rating: 4,
      comment: "Perfect for getting quick UI/UX feedback. The community is supportive, and the platform is very intuitive.",
    },
    {
      id: 6,
      name: "Linda Brown",
      role: "CEO",
      company: "GreenTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      comment: "We completed our rebranding campaign using just freelance creatives from here. Smooth process and stunning results.",
    },
  ];

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // Large devices: 3 slides
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // Medium devices: 2 slides
      } else {
        setSlidesPerView(1); // Small devices: 1 slide
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset current index when slidesPerView changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerView]);

  const maxIndex = Math.max(0, reviews.length - slidesPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (canGoNext) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, canGoNext]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 lg:py-24 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="mb-6 lg:mb-0">
            <p className="text-sm text-blue-500 uppercase font-semibold mb-2 tracking-wider">
              What Our Clients Say
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Real Voices, Real Success
            </h2>
          </div>
          <p className="text-gray-600 max-w-md lg:max-w-lg text-sm leading-relaxed">
            Discover how our tailored freelance solutions have helped thousands of professionals and businesses achieve their goals with speed and efficiency.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Arrows - Only show if there are more reviews than visible */}
          {reviews.length > slidesPerView && (
            <>
              <PrevArrow onClick={handlePrev} disabled={!canGoPrev} />
              <NextArrow onClick={handleNext} disabled={!canGoNext} />
            </>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="bg-blue-100 h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex space-x-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    {/* Review Content */}
                    <blockquote className="text-gray-700 mb-6 text-base leading-relaxed italic">
                      "{review.comment}"
                    </blockquote>

                    {/* Reviewer Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-14 h-14 rounded-full object-cover border-3 border-blue-200 shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                        <p className="text-blue-500 font-medium text-sm">{review.role}</p>
                        {review.company && (
                          <p className="text-gray-500 text-xs">{review.company}</p>
                        )}
                      </div>
                    </div>

                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      

      

        {/* CTA Section */}
        <div className="mt-30 text-center">
          <div className="bg-blue-100 rounded-2xl p-8 shadow-lg border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Thousands of Satisfied Clients
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to experience the same success? Start your project today and see why our clients love working with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center group">
                Read More Success Stories
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="border-2 border-blue-500 text-blue-500 font-medium py-3 px-8 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-blue-100 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-blue-600">10,000+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-green-600">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-purple-600">50,000+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;