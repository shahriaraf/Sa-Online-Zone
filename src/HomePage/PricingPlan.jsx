import React from 'react';

const plans = [
  {
    title: 'STARTER',
    price: '2.99',
    duration: '14 days',
    features: ['Basic UI/UX Design', '50 GB Cloud Storage','Unlimited Bandwitch','International Posting'],
  },
  {
    title: 'ENTERPRISE',
    price: '7.99',
    duration: '30 days',
    features: ['Premium UI/UX Design', '100 GB Cloud Storage','Unlimited Bandwitch','International Posting'],
  },
  {
    title: 'BASIC',
    price: '4.99',
    duration: '20 days',
    features: ['Standard UI/UX Design', '75 GB Cloud Storage','Unlimited Bandwitch','International Posting'],
  },
];

const PricingPlan = () => {
  return (
    <section className="py-30 px-10 md:px-12 bg-blue-50 text-gray-800">
   
      <div className="max-w-6xl mx-auto text-center ">
        <p className="text-sm primary_text_color font-semibold mb-2">CHOOSE YOUR FAVORITE PLAN</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">SELECT A JOB PLAN</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Find the perfect plan that fits your project needs. Whether you’re just getting started or scaling fast, we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-blue-100 rounded-lg shadow hover:shadow-lg  duration-300 p-6 hover:scale-105 transition-all ease-in-out"
            >
              <h3 className="text-lg font-semibold primary_text_color mb-2">{plan.title}</h3>
              <div className="text-3xl font-bold text-[#0f172a] mb-1">
                <span className="text-sm font-medium align-top">$</span>
                {plan.price}
                <span className="text-sm font-medium text-gray-500"> / Per Job</span>
              </div>

              <button className="mt-4 mb-6 w-full primary_btn">
                Select
              </button>

              <ul className="text-sm text-gray-600 space-y-2">
                <li>{plan.duration}</li>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;