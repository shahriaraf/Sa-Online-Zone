import React from 'react';

const CTA = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-20 w-40 h-40 bg-white rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Micro-Job Revolution?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Whether you're looking to get work done or earn money with your skills, 
            our platform connects you with the right opportunities in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Find Work
              <svg className="w-5 h-5 inline ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>
            
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Hire Talent
              <svg className="w-5 h-5 inline ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue-100">No upfront costs</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue-100">Secure payments</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue-100">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;