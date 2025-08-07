import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the micro-job marketplace work?",
      answer: "Our platform connects clients who need small tasks completed with skilled professionals who can deliver quality work quickly. Clients post jobs, freelancers submit proposals, and work begins once both parties agree."
    },
    {
      question: "What types of jobs can I post or find?",
      answer: "You can post or find a wide range of micro-jobs including graphic design, content writing, programming tasks, social media management, data entry, virtual assistance, and many other digital services."
    },
    {
      question: "How are payments handled?",
      answer: "We use a secure escrow payment system. Clients deposit funds when awarding a job, and freelancers receive payment once the work is approved. Our platform holds funds securely until both parties are satisfied."
    },
    {
      question: "What fees does the platform charge?",
      answer: "We charge a small service fee (typically 10-15%) on completed jobs. This helps us maintain the platform, provide customer support, and ensure secure transactions for all users."
    },
    {
      question: "How do I ensure quality work from freelancers?",
      answer: "All freelancers are rated and reviewed by previous clients. You can view their portfolios, ratings, and work history before hiring. We also offer a dispute resolution process if work doesn't meet expectations."
    },
    {
      question: "Can I hire the same freelancer for multiple jobs?",
      answer: "Absolutely! Many clients build long-term relationships with trusted freelancers. You can save favorite freelancers to your list and easily hire them again for future projects."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-cyan-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-blue-100 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${activeIndex === index ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180 text-blue-500' : 'text-blue-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'}`}
              >
                <p className="text-gray-600 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;