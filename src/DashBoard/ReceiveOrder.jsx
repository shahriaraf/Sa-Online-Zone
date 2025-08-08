import React, { useState } from 'react';

const ReceiveOrder = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample incoming orders data
  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-101',
      postShow: 'Premium Electronics Showcase - Latest Smartphones',
      amount: 450.00,
      status: 'Pending',
      time: '2024-01-28 16:45:30',
      customerName: 'John Smith',
      customerEmail: 'john.smith@email.com',
      description: 'High-quality showcase for latest smartphone collection with detailed specifications and comparison charts.',
      duration: '14 days',
      targetAudience: 'Tech enthusiasts, age 25-45',
      requirements: 'Premium placement, mobile-optimized, include video content'
    },
    {
      id: 'ORD-2024-102',
      postShow: 'Fashion Week Collection - Designer Clothing',
      amount: 750.25,
      status: 'Pending',
      time: '2024-01-28 14:20:15',
      customerName: 'Sarah Johnson',
      customerEmail: 'sarah.j@email.com',
      description: 'Exclusive fashion showcase featuring designer clothing and accessories for the upcoming season.',
      duration: '21 days',
      targetAudience: 'Fashion enthusiasts, women 20-40',
      requirements: 'High-resolution images, lifestyle photography, social media integration'
    },
    {
      id: 'ORD-2024-103',
      postShow: 'Home Improvement Tools & Equipment',
      amount: 320.50,
      status: 'Accepted',
      time: '2024-01-28 11:30:45',
      customerName: 'Mike Davis',
      customerEmail: 'mike.davis@email.com',
      description: 'Comprehensive showcase of professional-grade home improvement tools and equipment.',
      duration: '10 days',
      targetAudience: 'DIY enthusiasts, contractors',
      requirements: 'Product demonstrations, before/after examples'
    },
    {
      id: 'ORD-2024-104',
      postShow: 'Organic Beauty & Skincare Products',
      amount: 280.75,
      status: 'Rejected',
      time: '2024-01-28 09:15:20',
      customerName: 'Emily Wilson',
      customerEmail: 'emily.w@email.com',
      description: 'Natural and organic beauty products with focus on sustainable packaging and ingredients.',
      duration: '7 days',
      targetAudience: 'Health-conscious women, age 25-50',
      requirements: 'Ingredient highlighting, sustainability focus, before/after results'
    },
    {
      id: 'ORD-2024-105',
      postShow: 'Fitness Equipment & Supplements',
      amount: 520.00,
      status: 'Pending',
      time: '2024-01-27 18:45:10',
      customerName: 'David Brown',
      customerEmail: 'david.brown@email.com',
      description: 'Complete fitness solution showcase including equipment, supplements, and workout programs.',
      duration: '18 days',
      targetAudience: 'Fitness enthusiasts, gym goers',
      requirements: 'Workout demonstrations, progress tracking features, testimonials'
    },
    {
      id: 'ORD-2024-106',
      postShow: 'Gourmet Food & Recipe Collection',
      amount: 190.30,
      status: 'Accepted',
      time: '2024-01-27 15:20:35',
      customerName: 'Lisa Chen',
      customerEmail: 'lisa.chen@email.com',
      description: 'Premium gourmet food products with accompanying recipe collections and cooking tips.',
      duration: '12 days',
      targetAudience: 'Food lovers, home cooks',
      requirements: 'High-quality food photography, recipe videos, ingredient sourcing info'
    },
    {
      id: 'ORD-2024-107',
      postShow: 'Educational Courses & Learning Materials',
      amount: 380.99,
      status: 'Pending',
      time: '2024-01-27 12:10:25',
      customerName: 'Robert Taylor',
      customerEmail: 'robert.taylor@email.com',
      description: 'Online educational platform showcase featuring various courses and learning materials.',
      duration: '15 days',
      targetAudience: 'Students, professionals seeking skill development',
      requirements: 'Course previews, instructor profiles, student testimonials'
    },
    {
      id: 'ORD-2024-108',
      postShow: 'Travel & Adventure Packages',
      amount: 680.45,
      status: 'Rejected',
      time: '2024-01-27 08:30:15',
      customerName: 'Amanda Rodriguez',
      customerEmail: 'amanda.r@email.com',
      description: 'Exotic travel destinations and adventure packages with detailed itineraries and pricing.',
      duration: '25 days',
      targetAudience: 'Travel enthusiasts, adventure seekers',
      requirements: 'Destination videos, interactive maps, customer reviews'
    }
  ]);

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Accepted': 'bg-green-100 text-green-800 border-green-200',
      'Rejected': 'bg-red-100 text-red-800 border-red-200',
      'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
      'Completed': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    
    const icons = {
      'Pending': '⏰',
      'Accepted': '✅',
      'Rejected': '❌',
      'In Progress': '🔄',
      'Completed': '🎉'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
        <span className="mr-1">{icons[status]}</span>
        {status}
      </span>
    );
  };

  const handleOrderAction = async (orderId, action) => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: action === 'accept' ? 'Accepted' : 'Rejected' }
          : order
      )
    );
    
    setIsProcessing(false);
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.postShow.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const pendingOrders = orders.filter(order => order.status === 'Pending').length;
  const acceptedOrders = orders.filter(order => order.status === 'Accepted').length;
  const rejectedOrders = orders.filter(order => order.status === 'Rejected').length;
  const totalRevenue = orders.filter(order => order.status === 'Accepted').reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <span className="text-3xl">📨</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Receive Orders</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage incoming orders and approve or reject post showcase requests
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                <p className="text-3xl font-bold text-yellow-600">{pendingOrders}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Accepted Orders</p>
                <p className="text-3xl font-bold text-green-600">{acceptedOrders}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected Orders</p>
                <p className="text-3xl font-bold text-red-600">{rejectedOrders}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">❌</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-blue-600">${totalRevenue.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {['all', 'pending', 'accepted', 'rejected'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filterStatus === status
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span>📋</span>
              <span>Incoming Orders</span>
              <span className="bg-white bg-opacity-20 text-sm px-3 py-1 rounded-full">
                {filteredOrders.length} orders
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post Show</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 font-mono">{order.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                        <div className="text-sm text-gray-500">{order.customerEmail}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        <div className="font-medium truncate">{order.postShow}</div>
                        <div className="text-gray-500 text-xs mt-1">Duration: {order.duration}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-green-600">${order.amount.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{order.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-150"
                        >
                          <span className="mr-1">👁️</span>
                          View
                        </button>
                        {order.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => handleOrderAction(order.id, 'accept')}
                              disabled={isProcessing}
                              className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-150 disabled:opacity-50"
                            >
                              <span className="mr-1">✅</span>
                              Accept
                            </button>
                            <button
                              onClick={() => handleOrderAction(order.id, 'reject')}
                              disabled={isProcessing}
                              className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800 hover:bg-red-200 transition-colors duration-150 disabled:opacity-50"
                            >
                              <span className="mr-1">❌</span>
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📨</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-screen overflow-y-auto hide-scrollbar">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Order Details</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <span className="text-2xl">✕</span>
                </button>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Order Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order ID</label>
                  <p className="text-lg font-mono font-semibold text-gray-900">{selectedOrder.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  {getStatusBadge(selectedOrder.status)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <p className="text-lg font-semibold text-green-600">${selectedOrder.amount.toFixed(2)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order Time</label>
                  <p className="text-gray-900">{selectedOrder.time}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Customer Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-gray-900">{selectedOrder.customerName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{selectedOrder.customerEmail}</p>
                  </div>
                </div>
              </div>

              {/* Post Show Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Post Show Details</label>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{selectedOrder.postShow}</h4>
                  <p className="text-gray-600 mb-4">{selectedOrder.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <span className="ml-2 text-gray-600">{selectedOrder.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Target Audience:</span>
                      <span className="ml-2 text-gray-600">{selectedOrder.targetAudience}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="font-medium text-gray-700">Requirements:</span>
                    <p className="text-gray-600 mt-1">{selectedOrder.requirements}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {selectedOrder.status === 'Pending' && (
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={() => handleOrderAction(selectedOrder.id, 'accept')}
                    disabled={isProcessing}
                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition-colors duration-200 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>✅</span>
                        <span>Accept Order</span>
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => handleOrderAction(selectedOrder.id, 'reject')}
                    disabled={isProcessing}
                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition-colors duration-200 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>❌</span>
                        <span>Reject Order</span>
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReceiveOrder;