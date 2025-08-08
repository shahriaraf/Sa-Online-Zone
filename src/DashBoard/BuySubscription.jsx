import React, { useState } from 'react';
import { 
  LuStar, 
  LuDollarSign, 
  LuFileText, 
  LuSettings, 
  LuShield, 
  LuSparkles, 
  LuCheck, 
  LuX, 
  LuCreditCard, 
  LuPhone, 
  LuLink, 
  LuUser, 
  LuGem 
} from 'react-icons/lu';
import Headline from '../HeadLine/Headline';

const BuySubscription = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    nidFront: null,
    nidBack: null,
    permanentAddress: '',
    presentAddress: '',
    socialLink: '',
    contactNumber: '',
    profileImage: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Sample packages data
  const packages = [
    {
      id: 1,
      name: "Starter Package",
      description: "Perfect for beginners who want to start their journey with basic commission benefits.",
      price: 99,
      sellPosts: 10,
      settings: "Basic",
      trustedGuarantee: 85,
      popular: false,
      features: ["Basic Dashboard", "Email Support", "Monthly Reports"]
    },
    {
      id: 2,
      name: "Professional Package",
      description: "Advanced features with higher commission rates for serious entrepreneurs.",
      price: 299,
      sellPosts: 50,
      settings: "Advanced",
      trustedGuarantee: 92,
      popular: true,
      features: ["Advanced Dashboard", "Priority Support", "Weekly Reports", "Analytics Tools"]
    },
    {
      id: 3,
      name: "Enterprise Package",
      description: "Premium package with maximum benefits and exclusive features for top performers.",
      price: 599,
      sellPosts: 200,
      settings: "Premium",
      trustedGuarantee: 98,
      popular: false,
      features: ["Premium Dashboard", "24/7 Support", "Daily Reports", "Advanced Analytics", "Custom Branding"]
    }
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert(`Subscription purchased successfully!\nPackage: ${selectedPackage.name}\nPrice: $${selectedPackage.price}`);
    
    // Reset form
    setFormData({
      nidFront: null,
      nidBack: null,
      permanentAddress: '',
      presentAddress: '',
      socialLink: '',
      contactNumber: '',
      profileImage: null,
    });
    setIsSubmitting(false);
    setShowForm(false);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-4 sm:py-8">
      <Headline className='mb-10'  headlines={["Welcome to our amazing platform!"]} ></Headline>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Choose Your Package
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Select the perfect subscription package that fits your business goals and start earning commissions today
          </p>
        </div>

        {!showForm ? (
          /* Package Listing */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border-2 transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 ${
                  pkg.popular ? 'border-blue-500 ring-2 sm:ring-4 ring-blue-300' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                      <LuStar className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Package Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{pkg.description}</p>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                      ${pkg.price}
                      <span className="text-base sm:text-lg text-gray-500 font-normal">/month</span>
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-600 flex items-center">
                        <LuFileText className="mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Sell Posts
                      </span>
                      <span className="text-sm sm:text-base font-semibold">{pkg.sellPosts}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-600 flex items-center">
                        <LuSettings className="mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Settings
                      </span>
                      <span className="text-sm sm:text-base font-semibold">{pkg.settings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-600 flex items-center">
                        <LuShield className="mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Trusted Guarantee
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-green-600">{pkg.trustedGuarantee}%</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center">
                      <LuSparkles className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Features
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <LuCheck className="mr-2 w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Subscription Form */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 sm:px-8 py-4 sm:py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white">Complete Your Subscription</h2>
                    <p className="text-purple-100 mt-1 text-sm sm:text-base">
                      {selectedPackage.name} - ${selectedPackage.price}/month
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-white hover:text-purple-200 transition-colors p-1"
                  >
                    <LuX className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                {/* NID Upload Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      NID Front Page *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        name="nidFront"
                        onChange={handleInputChange}
                        className="hidden"
                        id="nid-front"
                        required
                      />
                      <label htmlFor="nid-front" className="cursor-pointer flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <LuCreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                          {formData.nidFront ? formData.nidFront.name : 'Upload NID Front'}
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      NID Back Page *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        name="nidBack"
                        onChange={handleInputChange}
                        className="hidden"
                        id="nid-back"
                        required
                      />
                      <label htmlFor="nid-back" className="cursor-pointer flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <LuCreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                          {formData.nidBack ? formData.nidBack.name : 'Upload NID Back'}
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Permanent Address *
                    </label>
                    <textarea
                      name="permanentAddress"
                      rows={3}
                      placeholder="Enter your permanent address"
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Present Address *
                    </label>
                    <textarea
                      name="presentAddress"
                      rows={3}
                      placeholder="Enter your present address"
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                      value={formData.presentAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="contactNumber"
                        placeholder="+1 (555) 123-4567"
                        className="w-full p-3 sm:p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
                        <LuPhone className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Social Link
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="socialLink"
                        placeholder="https://facebook.com/yourprofile"
                        className="w-full p-3 sm:p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        value={formData.socialLink}
                        onChange={handleInputChange}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
                        <LuLink className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Image *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      name="profileImage"
                      onChange={handleInputChange}
                      className="hidden"
                      id="profile-image"
                      required
                    />
                    <label htmlFor="profile-image" className="cursor-pointer flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                        <LuUser className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                      </div>
                      <p className="text-base sm:text-lg font-medium text-gray-700 mb-1 sm:mb-2 text-center">
                        {formData.profileImage ? formData.profileImage.name : 'Upload Profile Image'}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">PNG, JPG up to 5MB</p>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 sm:pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all duration-200 disabled:cursor-not-allowed shadow-lg text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Payment...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Complete Subscription - ${selectedPackage.price}</span>
                        <LuGem className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuySubscription;