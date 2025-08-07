import React, { useState, useEffect } from "react";

// Dummy blog posts data
const posts = [
  {
    date: "May 5, 2019",
    category: "Design",
    title: "The Best Tips to Make You Rich.",
    image: "https://i.ibb.co.com/RT0QJs0k/micheile-henderson-So-T4-m-Zhyh-E-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    date: "Oct 6, 2019",
    category: "Logo",
    title: "How to Create a Great Business.",
    image: "https://i.ibb.co.com/60jtqrJz/seo-galaxy-z-Z7-J5qri6q-Y-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    date: "Sep 20, 2019",
    category: "Branding",
    title: "Steps to Encourage Yourself to Work.",
    image: "https://i.ibb.co.com/RTxk6jXZ/mario-gogh-VBLHICVh-l-I-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  // Adding more posts for better carousel demonstration
  {
    date: "Nov 15, 2019",
    category: "Marketing",
    title: "Digital Marketing Strategies That Work.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    date: "Dec 2, 2019",
    category: "Business",
    title: "Building Your Online Presence.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
];

// Custom arrow buttons
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow absolute -top-12 right-12 z-20"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow absolute -top-12 right-2 z-20"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
    </svg>
  </button>
);

const RecentPost = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, posts.length - slidesToShow);

  const handlePrev = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
  };

  return (
    <section className="py-30 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm text-blue-500 uppercase font-semibold mb-1">
              What are the latest news
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Creative Recent Posts
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md mt-4 md:mt-0">
            We specialize in providing creative and cost-effective business solutions tailored to your unique needs. Whether you’re a startup or an established enterprise, our strategies help you drive growth, increase efficiency, and stay ahead in your industry.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <PrevArrow onClick={handlePrev} />
          <NextArrow onClick={handleNext} />
          
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${(posts.length / slidesToShow) * 100}%`
              }}
            >
              {posts.map((post, index) => (
                <div 
                  key={index} 
                  className="px-2 flex-shrink-0"
                  style={{ width: `${100 / posts.length}%` }}
                >
                  <div className="bg-blue-100 rounded-lg overflow-hidden border border-blue-50 hover:shadow-lg transition duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between text-xs text-blue-500 font-semibold mb-2 uppercase">
                        <span>{post.date}</span>
                        <span>{post.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 border-l-2 border-blue-500 pl-4">
                        {post.description}
                      </p>
                      <a
                        href="#"
                        className="text-xs font-semibold text-blue-500"
                      >
                        ▸ Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;