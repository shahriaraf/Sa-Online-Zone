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
