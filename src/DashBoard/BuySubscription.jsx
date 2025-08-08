import React, { useState } from 'react';

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
      commissions: {
        fast: 15,
        second: 10,
        third: 5
      },
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
      commissions: {
        fast: 25,
        second: 18,
        third: 12
      },
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
      commissions: {
        fast: 35,
        second: 28,
        third: 20
      },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
        
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Choose Your Package</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect subscription package that fits your business goals and start earning commissions today
          </p>
        </div>

        {!showForm ? (
          /* Package Listing */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.popular ? 'border-purple-500 ring-4 ring-purple-200' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      🌟 Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      ${pkg.price}
                      <span className="text-lg text-gray-500 font-normal">/month</span>
                    </div>
                  </div>

                  {/* Commission Structure */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="mr-2">💰</span>
                      Commission Generation
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                        <span className="text-sm font-medium">Fast Level</span>
                        <span className="font-bold text-green-600">{pkg.commissions.fast}%</span>
                      </div>
                      <div className="flex justify-between items-center bg-yellow-50 p-3 rounded-lg">
                        <span className="text-sm font-medium">Second Level</span>
                        <span className="font-bold text-yellow-600">{pkg.commissions.second}%</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                        <span className="text-sm font-medium">Third Level</span>
                        <span className="font-bold text-blue-600">{pkg.commissions.third}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">📝 Sell Posts</span>
                      <span className="font-semibold">{pkg.sellPosts}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">⚙️ Settings</span>
                      <span className="font-semibold">{pkg.settings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">🛡️ Trusted Guarantee</span>
                      <span className="font-semibold text-green-600">{pkg.trustedGuarantee}%</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-3">✨ Features</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="mr-2 text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg'
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
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Complete Your Subscription</h2>
                    <p className="text-purple-100 mt-1">
                      {selectedPackage.name} - ${selectedPackage.price}/month
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-white hover:text-purple-200 transition-colors"
                  >
                    <span className="text-2xl">✕</span>
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* NID Upload Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      NID Front Page *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-400 transition-colors">
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
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl">🆔</span>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
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
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-400 transition-colors">
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
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl">🆔</span>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          {formData.nidBack ? formData.nidBack.name : 'Upload NID Back'}
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Permanent Address *
                    </label>
                    <textarea
                      name="permanentAddress"
                      rows={3}
                      placeholder="Enter your permanent address"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.presentAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="contactNumber"
                        placeholder="+1 (555) 123-4567"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-400">📞</span>
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
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={formData.socialLink}
                        onChange={handleInputChange}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-400">🔗</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Image *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-purple-400 transition-colors">
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
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">👤</span>
                      </div>
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        {formData.profileImage ? formData.profileImage.name : 'Upload Profile Image'}
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Payment...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Complete Subscription - ${selectedPackage.price}</span>
                        <span>💎</span>
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