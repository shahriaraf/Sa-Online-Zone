// DashboardHome.jsx
import React, { useState } from 'react';
import { 
  FiDollarSign, 
  FiPackage, 
  FiMail, 
  FiSearch, 
  FiEye, 
  FiMessageCircle, 
  FiShoppingCart,
  FiClock,
  FiUser,
  FiMapPin,
  FiStar,
  FiCheck,
  FiX
} from 'react-icons/fi';

const DashboardHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showViewAll, setShowViewAll] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);

  // Sample user data
  const userData = {
    name: 'John Don',
    isVerified: true,
    balance: 15420.50,
    totalOrders: 47,
    receiveOrders: 23
  };

  // Sample data
  const announcements = [
    "🎉 New feature: Advanced post analytics now available!",
    "💰 Bonus week: Get 10% extra on all deposits until Friday",
    "🔧 Scheduled maintenance on Sunday 2-4 AM"
  ];

  const headlines = [
    "📈 Market trends show 25% growth in digital services",
    "🌟 Top performers this month awarded special badges",
    "🚀 New partnership with leading e-commerce platforms"
  ];

  const partnerSites = [
    { name: 'Amazon', logo: '🛒', url: '#' },
    { name: 'eBay', logo: '🏪', url: '#' },
    { name: 'Shopify', logo: '🛍️', url: '#' },
    { name: 'Etsy', logo: '🎨', url: '#' }
  ];

  const deals = {
    online: [
      { title: 'Premium Package 50% OFF', price: '$49', originalPrice: '$99' },
      { title: 'Digital Marketing Course', price: '$29', originalPrice: '$59' }
    ],
    offline: [
      { title: 'Local Business Meetup', price: 'Free', location: 'New York' },
      { title: 'Workshop: Social Media', price: '$25', location: 'Chicago' }
    ]
  };

  const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Services', 'Digital'];
  const subCategories = {
    'Electronics': ['Smartphones', 'Laptops', 'Cameras'],
    'Fashion': ['Clothing', 'Shoes', 'Accessories'],
    'Home & Garden': ['Furniture', 'Decor', 'Tools'],
    'Services': ['Marketing', 'Design', 'Development'],
    'Digital': ['Software', 'Apps', 'Online Courses']
  };
  const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France'];

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop',
      title: 'Professional Web Development Service',
      price: 299.99,
      seller: 'TechExpert',
      rating: 4.9,
      postTime: '2024-01-15 10:30 AM',
      details: 'Complete website development with modern design, responsive layout, and SEO optimization.',
      sellerAccount: {
        name: 'TechExpert',
        rating: 4.8,
        completedOrders: 156,
        joinDate: 'Jan 2020',
        isVerified: true
      }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      title: 'Digital Marketing Strategy',
      price: 199.50,
      seller: 'MarketPro',
      rating: 4.7,
      postTime: '2024-01-14 2:15 PM',
      details: 'Comprehensive digital marketing strategy including SEO, social media, and content marketing.',
      sellerAccount: {
        name: 'MarketPro',
        rating: 4.6,
        completedOrders: 89,
        joinDate: 'Mar 2021',
        isVerified: true
      }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      title: 'Mobile App Development',
      price: 499.99,
      seller: 'AppBuilder',
      rating: 5.0,
      postTime: '2024-01-13 9:45 AM',
      details: 'Custom mobile app development for iOS and Android with modern UI/UX design.',
      sellerAccount: {
        name: 'AppBuilder',
        rating: 4.9,
        completedOrders: 234,
        joinDate: 'May 2019',
        isVerified: true
      }
    }
  ];

  const handleBuyNow = (post) => {
    setSelectedPost(post);
    setShowBuyModal(true);
  };

  const calculateFees = (amount) => {
    const adminFeeRate = 0.05; // 5%
    const sellerFee = amount * adminFeeRate;
    const buyerFee = amount * adminFeeRate;
    const generation1Fee = amount * 0.02; // 2%
    const generation2Fee = amount * 0.01; // 1%
    
    return {
      baseAmount: amount,
      sellerFee,
      buyerFee,
      generation1Fee,
      generation2Fee,
      totalForBuyer: amount + buyerFee,
      sellerReceives: amount - sellerFee
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FiUser className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-2">
                  <span>Welcome, {userData.name}</span>
                  {userData.isVerified && (
                    <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      <FiCheck className="w-4 h-4 mr-1" />
                      Verified
                    </div>
                  )}
                </h1>
                <p className="text-gray-600">Ready to grow your business today?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Balance</p>
                <p className="text-3xl font-bold text-green-600">${userData.balance.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FiDollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Orders</p>
                <p className="text-3xl font-bold text-blue-600">{userData.totalOrders}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FiPackage className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Receive Orders</p>
                <p className="text-3xl font-bold text-purple-600">{userData.receiveOrders}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <FiMail className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Announcements & Headlines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📢 Announcements</h3>
            <div className="space-y-3">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700">{announcement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📰 Headlines</h3>
            <div className="space-y-3">
              {headlines.map((headline, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-gray-700">{headline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Sites */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Our Partner Sites</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partnerSites.map((partner, index) => (
              <a key={index} href={partner.url} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl">{partner.logo}</span>
                <span className="font-medium text-gray-700">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Deals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💻 Online Deals</h3>
            <div className="space-y-4">
              {deals.online.map((deal, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{deal.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">{deal.price}</span>
                      {deal.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Deal
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Offline Deals</h3>
            <div className="space-y-4">
              {deals.offline.map((deal, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{deal.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">{deal.price}</span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <FiMapPin className="w-3 h-3 mr-1" />
                        {deal.location}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                    View Deal
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Search & Filter Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!selectedCategory}
            >
              <option value="">All Sub Categories</option>
              {selectedCategory && subCategories[selectedCategory]?.map(subCat => (
                <option key={subCat} value={subCat}>{subCat}</option>
              ))}
            </select>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Countries</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Posts Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">📝 Latest Posts</h3>
              <button
                onClick={() => setShowViewAll(true)}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View All
              </button>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 3).map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2">{post.title}</h4>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">${post.price}</span>
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{post.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-sm text-gray-500">by {post.seller}</span>
                    </div>
                    <button
                      onClick={() => handleBuyNow(post)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Modal */}
        {showViewAll && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">All Posts</h3>
                  <button
                    onClick={() => setShowViewAll(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map(post => (
                    <div key={post.id} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex space-x-4">
                        <img src={post.image} alt={post.title} className="w-24 h-24 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{post.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                            <FiClock className="w-4 h-4" />
                            <span>{post.postTime}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{post.details}</p>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <FiUser className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium">{post.sellerAccount.name}</span>
                            {post.sellerAccount.isVerified && (
                              <FiCheck className="w-4 h-4 text-blue-500" />
                            )}
                            <span className="text-sm text-gray-500">
                              ({post.sellerAccount.completedOrders} orders)
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-green-600">${post.price}</span>
                            <div className="flex space-x-2">
                              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-sm">
                                <FiMessageCircle className="w-4 h-4 inline mr-1" />
                                Chat
                              </button>
                              <button
                                onClick={() => {
                                  setShowViewAll(false);
                                  handleBuyNow(post);
                                }}
                                className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                              >
                                <FiShoppingCart className="w-4 h-4 inline mr-1" />
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Buy Now Modal */}
        {showBuyModal && selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Purchase Confirmation</h3>
                  <button
                    onClick={() => setShowBuyModal(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedPost.title}</h4>
                  <p className="text-gray-600">{selectedPost.details}</p>
                </div>

                {/* Fee Breakdown */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Fee Breakdown</h5>
                  {(() => {
                    const fees = calculateFees(selectedPost.price);
                    return (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Base Amount:</span>
                          <span className="font-medium">${fees.baseAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Admin Fee (Buyer):</span>
                          <span className="font-medium text-red-600">+${fees.buyerFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Admin Fee (Seller):</span>
                          <span className="font-medium text-red-600">-${fees.sellerFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1st Generation Fee:</span>
                          <span className="font-medium">${fees.generation1Fee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2nd Generation Fee:</span>
                          <span className="font-medium">${fees.generation2Fee.toFixed(2)}</span>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total You Pay:</span>
                          <span className="text-green-600">${fees.totalForBuyer.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Seller Receives:</span>
                          <span>${fees.sellerReceives.toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowBuyModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert('Purchase confirmed! Order will be processed shortly.');
                      setShowBuyModal(false);
                    }}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Confirm Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;