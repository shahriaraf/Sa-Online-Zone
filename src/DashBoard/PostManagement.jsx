import React, { useState } from 'react';

const PostManagement = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  // Sample posts data
  const [posts, setPosts] = useState([
    {
      id: 'POST-2024-001',
      title: 'Premium Electronics Showcase',
      amount: 299.99,
      status: 'Active',
      zone: 'North America',
      country: 'United States',
      city: 'New York',
      category: 'Electronics',
      subCategory: 'Smartphones',
      type: 'Product Showcase',
      keywords: 'smartphone, electronics, mobile',
      description: 'Latest smartphone collection with advanced features',
      image: null,
      createdAt: '2024-01-28 14:30:25',
      views: 15420,
      clicks: 1250
    },
    {
      id: 'POST-2024-002',
      title: 'Fashion Week Collection',
      amount: 599.50,
      status: 'Pending',
      zone: 'Europe',
      country: 'France',
      city: 'Paris',
      category: 'Fashion',
      subCategory: 'Designer Clothing',
      type: 'Event Showcase',
      keywords: 'fashion, designer, clothing',
      description: 'Exclusive designer clothing collection',
      image: null,
      createdAt: '2024-01-27 09:15:10',
      views: 8930,
      clicks: 720
    },
    {
      id: 'POST-2024-003',
      title: 'Home Improvement Tools',
      amount: 149.75,
      status: 'Draft',
      zone: 'Asia',
      country: 'Japan',
      city: 'Tokyo',
      category: 'Home & Garden',
      subCategory: 'Tools',
      type: 'Product Listing',
      keywords: 'tools, home improvement, DIY',
      description: 'Professional grade home improvement tools',
      image: null,
      createdAt: '2024-01-26 16:45:30',
      views: 0,
      clicks: 0
    }
  ]);

  // Form data for new post
  const [formData, setFormData] = useState({
    // Step 1 - Targeting
    zone: '',
    country: '',
    city: '',
    // Step 2 - Details
    title: '',
    category: '',
    subCategory: '',
    type: '',
    keywords: '',
    amount: '',
    image: null,
    description: ''
  });

  // Sample data for dropdowns
  const zones = ['North America', 'Europe', 'Asia', 'Africa', 'South America', 'Oceania'];
  const countries = {
    'North America': ['United States', 'Canada', 'Mexico'],
    'Europe': ['France', 'Germany', 'United Kingdom', 'Spain', 'Italy'],
    'Asia': ['Japan', 'China', 'India', 'South Korea', 'Thailand'],
    'Africa': ['South Africa', 'Egypt', 'Nigeria', 'Kenya'],
    'South America': ['Brazil', 'Argentina', 'Colombia', 'Chile'],
    'Oceania': ['Australia', 'New Zealand', 'Fiji']
  };
  const cities = {
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'France': ['Paris', 'Lyon', 'Marseille', 'Nice'],
    'Germany': ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
    'Japan': ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima']
  };

  const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Health & Beauty', 'Sports & Fitness', 'Books & Education'];
  const subCategories = {
    'Electronics': ['Smartphones', 'Laptops', 'Cameras', 'Audio'],
    'Fashion': ['Designer Clothing', 'Shoes', 'Accessories', 'Jewelry'],
    'Home & Garden': ['Tools', 'Furniture', 'Decor', 'Appliances'],
    'Health & Beauty': ['Skincare', 'Makeup', 'Supplements', 'Fitness Equipment'],
    'Sports & Fitness': ['Exercise Equipment', 'Sportswear', 'Outdoor Gear'],
    'Books & Education': ['Textbooks', 'Online Courses', 'Educational Tools']
  };
  const types = ['Product Showcase', 'Event Showcase', 'Product Listing', 'Service Promotion', 'Brand Awareness'];

  const adminFeePercentage = 15; // 15% admin fee

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Active': 'bg-green-100 text-green-800 border-green-200',
      'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Draft': 'bg-gray-100 text-gray-800 border-gray-200',
      'Rejected': 'bg-red-100 text-red-800 border-red-200'
    };
    
    const icons = {
      'Active': '✅',
      'Pending': '⏳',
      'Draft': '📝',
      'Rejected': '❌'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
        <span className="mr-1">{icons[status]}</span>
        {status}
      </span>
    );
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Create new post
    const newPost = {
      ...formData,
      id: `POST-2024-${String(posts.length + 1).padStart(3, '0')}`,
      status: 'Draft',
      createdAt: new Date().toLocaleString(),
      views: 0,
      clicks: 0
    };
    
    setPosts([newPost, ...posts]);
    
    // Reset form
    setFormData({
      zone: '', country: '', city: '',
      title: '', category: '', subCategory: '', type: '',
      keywords: '', amount: '', image: null, description: ''
    });
    setCurrentStep(1);
    setActiveTab('list');
  };

  const calculateAdminFee = () => {
    const amount = parseFloat(formData.amount) || 0;
    return (amount * adminFeePercentage / 100).toFixed(2);
  };

  const calculateTotal = () => {
    const amount = parseFloat(formData.amount) || 0;
    const adminFee = parseFloat(calculateAdminFee());
    return (amount + adminFee).toFixed(2);
  };

  // Step 1 - Targeting Component
  const Step1Targeting = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Targeting</h3>
        <p className="text-gray-600">Define your target location and audience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Zone *</label>
          <select
            name="zone"
            value={formData.zone}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Zone</option>
            {zones.map(zone => (
              <option key={zone} value={zone}>{zone}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Country *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={!formData.zone}
          >
            <option value="">Select Country</option>
            {formData.zone && countries[formData.zone]?.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">City *</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {formData.country && cities[formData.country]?.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  // Step 2 - Details Component
  const Step2Details = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Post Details</h3>
        <p className="text-gray-600">Add your post content and specifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter post title"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Sub Category *</label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={!formData.category}
          >
            <option value="">Select Sub Category</option>
            {formData.category && subCategories[formData.category]?.map(subCat => (
              <option key={subCat} value={subCat}>{subCat}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Type *</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Amount *</label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="0.00"
              className="w-full p-4 pl-8 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 font-medium">$</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Keywords</label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleInputChange}
            placeholder="Enter keywords separated by commas"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleInputChange}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">🖼️</span>
              </div>
              <p className="text-sm font-medium text-gray-700">
                {formData.image ? formData.image.name : 'Upload Image'}
              </p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </label>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter detailed description of your post"
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>
      </div>
    </div>
  );

  // Step 3 - Review Component
  const Step3Review = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Review Information</h3>
        <p className="text-gray-600">Please review all information before submitting</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-6">
        {/* Targeting Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 Targeting Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Zone:</span>
              <p className="text-gray-900">{formData.zone}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Country:</span>
              <p className="text-gray-900">{formData.country}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">City:</span>
              <p className="text-gray-900">{formData.city}</p>
            </div>
          </div>
        </div>

        {/* Post Details */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">📝 Post Details</h4>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-600">Title:</span>
              <p className="text-gray-900 font-medium">{formData.title}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Category:</span>
                <p className="text-gray-900">{formData.category}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Sub Category:</span>
                <p className="text-gray-900">{formData.subCategory}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Type:</span>
                <p className="text-gray-900">{formData.type}</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Keywords:</span>
              <p className="text-gray-900">{formData.keywords || 'No keywords provided'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Description:</span>
              <p className="text-gray-900">{formData.description}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Image:</span>
              <p className="text-gray-900">{formData.image ? formData.image.name : 'No image uploaded'}</p>
            </div>
          </div>
        </div>

        {/* Pricing Information */}
        <div className="border-t pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">💰 Pricing Information</h4>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Post Amount:</span>
              <span className="font-medium">${parseFloat(formData.amount || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Admin Fee ({adminFeePercentage}%):</span>
              <span className="font-medium">${calculateAdminFee()}</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-blue-600">${calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <span className="text-3xl">📄</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Post Management</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create and manage your post showcases with advanced targeting options
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'list'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📋 Post List
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'create'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ➕ Create Post
            </button>
          </div>
        </div>

        {activeTab === 'list' ? (
          /* Post List */
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>📋</span>
                <span>Post List</span>
                <span className="bg-white bg-opacity-20 text-sm px-3 py-1 rounded-full">
                  {posts.length} posts
                </span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 font-mono">{post.id}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs">
                          <div className="font-medium truncate">{post.title}</div>
                          <div className="text-gray-500 text-xs mt-1">{post.category} • {post.subCategory}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-green-600">${post.amount.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(post.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xs text-gray-500">
                          <div>👁️ {post.views.toLocaleString()} views</div>
                          <div>👆 {post.clicks.toLocaleString()} clicks</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedPost(post)}
                            className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-150"
                          >
                            <span className="mr-1">👁️</span>
                            View
                          </button>
                          <button className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-150">
                            <span className="mr-1">✏️</span>
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Create Post Wizard */
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Create New Post</h2>
                <div className="text-white text-sm">
                  Step {currentStep} of 3
                </div>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="p-8">
              {/* Step Content */}
              {currentStep === 1 && <Step1Targeting />}
              {currentStep === 2 && <Step2Details />}
              {currentStep === 3 && <Step3Review />}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 mt-8 border-t">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <span>←</span>
                  <span>Back</span>
                </button>

                <div className="flex space-x-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full ${
                        step === currentStep
                          ? 'bg-blue-600'
                          : step < currentStep
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
                  >
                    <span>Next</span>
                    <span>→</span>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors duration-200"
                  >
                    <span>✓</span>
                    <span>Submit Post</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post Details Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Post Details</h3>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <span className="text-2xl">✕</span>
                </button>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Post ID</label>
                  <p className="text-lg font-mono font-semibold text-gray-900">{selectedPost.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  {getStatusBadge(selectedPost.status)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <p className="text-lg font-semibold text-green-600">${selectedPost.amount.toFixed(2)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Created</label>
                  <p className="text-gray-900">{selectedPost.createdAt}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <p className="text-xl font-semibold text-gray-900">{selectedPost.title}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <p className="text-gray-900">{selectedPost.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <p className="text-gray-900">{selectedPost.category}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sub Category</label>
                  <p className="text-gray-900">{selectedPost.subCategory}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <p className="text-gray-900">{selectedPost.type}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Location</label>
                <p className="text-gray-900">{selectedPost.city}, {selectedPost.country} ({selectedPost.zone})</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">{selectedPost.views.toLocaleString()}</p>
                  <p className="text-sm text-blue-700">Views</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">{selectedPost.clicks.toLocaleString()}</p>
                  <p className="text-sm text-green-700">Clicks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostManagement;