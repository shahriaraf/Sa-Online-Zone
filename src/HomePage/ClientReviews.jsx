import React from 'react';

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Startup Founder",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "This platform saved my startup! Found a developer who built our MVP in just 3 days for a fraction of agency costs. The quality exceeded my expectations.",
      highlight: "MVP in just 3 days"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment: "Our go-to for quick design tasks. The freelancers are professional and deliver fast. Only wish there were more niche specialists sometimes.",
      highlight: "go-to for quick design tasks"
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "E-commerce Manager",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5,
      comment: "Completed 50+ micro-jobs here. The escrow system gives me peace of mind, and the quality is consistently good. Saved us thousands in operational costs.",
      highlight: "50+ micro-jobs completed"
    }
  ];

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Trusted by Thousands of Professionals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-blue-500">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-600 mb-4 italic">
                "{review.comment}"
              </blockquote>
              
              <p className="text-blue-500 font-medium">
                <span className="bg-blue-50 px-2 py-1 rounded">✨ {review.highlight}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg inline-flex items-center">
            Read More Success Stories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;