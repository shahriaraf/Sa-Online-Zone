import React, { useState, useEffect } from 'react';
import {
  FaCheckCircle,
  FaUsers,
  FaBolt,
  FaShieldAlt,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "Lightning Fast Payouts",
      description: "Get paid instantly with our secure payment system"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Flexible Opportunities",
      description: "Work on your terms with diverse online tasks"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Trusted Platform",
      description: "Verified by thousands of businesses and freelancers"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Tasks Completed" },
    { number: "99.9%", label: "Success Rate" }
  ];

  return (
    <section className="relative bg-blue-50 pt-30 pb-60 px-4 md:px-36 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Saonline Zone</span>
            </h2>

            <p className="text-gray-700 text-xl mb-8 leading-relaxed">
              Your premier micro-job marketplace connecting talented digital workers with clients who need{' '}
              <span className="font-semibold text-blue-600">fast, reliable solutions</span>.
              Experience the future of flexible work.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-white shadow-lg border border-cyan-200 transform scale-105'
                      : 'bg-white/60 hover:bg-white hover:shadow-md'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    activeFeature === index ? 'bg-cyan-100 text-cyan-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Join Our Community</span>
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-80 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <FaUsers className="w-10 h-10 text-cyan-600" />
                    </div>
                    <p className="text-gray-600 font-medium">Your illustration here</p>
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                    <FaCheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce delay-500">
                    <FaBolt className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="text-2xl font-bold text-cyan-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float delay-1000">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            Ready to experience a smarter way to work and hire?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 border-2 border-cyan-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300">
              Learn More
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
