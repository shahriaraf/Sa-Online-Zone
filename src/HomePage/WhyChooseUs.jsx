import React from 'react';
import { FiCheckCircle, FiShield, FiZap, FiPieChart, FiClock, FiUsers } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiZap className="w-8 h-8 text-cyan-500" />,
      title: "Lightning-Fast Matching",
      description: "Our AI connects you with perfect freelancers or jobs in under 60 seconds"
    },
    {
      icon: <FiShield className="w-8 h-8 text-blue-500" />,
      title: "Secure Payments",
      description: "Escrow protection ensures you only pay for approved work"
    },
    {
      icon: <FiPieChart className="w-8 h-8 text-cyan-500" />,
      title: "Cost-Effective",
      description: "Save up to 70% compared to traditional agencies"
    },
    {
      icon: <FiClock className="w-8 h-8 text-blue-500" />,
      title: "24/7 Availability",
      description: "Global talent pool working across all time zones"
    },
    {
      icon: <FiUsers className="w-8 h-8 text-cyan-500" />,
      title: "Curated Talent",
      description: "Only 18% of applicants pass our rigorous screening"
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Satisfaction Guarantee",
      description: "Free revisions until you're 100% satisfied"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose the Leading Micro-Job Marketplace</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how small tasks get done - combining speed, quality and affordability like no other platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 rounded-xl p-8 hover:bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-300 group">
              <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-sm group-hover:shadow-md mb-6 transition-shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to experience the difference?</h3>
                <p className="text-blue-100">Join thousands of businesses and professionals getting more done</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition-all shadow-lg">
                  Post a Job - It's Free
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition-all">
                  Browse Talent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;