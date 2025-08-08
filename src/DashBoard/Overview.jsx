import React, { useState } from 'react';

const Overview = () => {
  // Sample user data
  const userData = {
    accountBalance: 2456.75,
    spentBalance: 1834.50,
    totalOrders: 47,
    receiveOrders: 23,
    pendingOrders: 8,
    inProgressOrders: 5,
    subscriptionName: 'Professional Package',
    subscriptionStatus: 'Active',
    subscriptionExpiry: '2024-02-28',
    referralUsers: 15,
    totalEarnings: 3291.25,
    monthlyGrowth: 12.5
  };

  const [timeRange, setTimeRange] = useState('30d');

  // Sample recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'deposit',
      description: 'Account deposit via PayPal',
      amount: 500.00,
      timestamp: '2024-01-28 14:30',
      status: 'completed'
    },
    {
      id: 2,
      type: 'order',
      description: 'New showcase order received',
      amount: 299.99,
      timestamp: '2024-01-28 12:15',
      status: 'pending'
    },
    {
      id: 3,
      type: 'referral',
      description: 'Referral commission earned',
      amount: 85.50,
      timestamp: '2024-01-27 16:45',
      status: 'completed'
    },
    {
      id: 4,
      type: 'withdrawal',
      description: 'Withdrawal request processed',
      amount: -150.00,
      timestamp: '2024-01-27 09:20',
      status: 'processing'
    }
  ];

  // Sample status information
  const statusInfo = [
    {
      category: 'Account Status',
      status: 'Verified',
      description: 'Your account is fully verified and active',
      icon: '✅',
      color: 'green'
    },
    {
      category: 'Payment Status',
      status: 'Connected',
      description: 'Payment methods are configured and working',
      icon: '💳',
      color: 'blue'
    },
    {
      category: 'KYC Status',
      status: 'Approved',
      description: 'Identity verification completed successfully',
      icon: '🆔',
      color: 'green'
    },
    {
      category: 'Support Level',
      status: 'Premium',
      description: 'Priority support with 24/7 assistance',
      icon: '🛠️',
      color: 'purple'
    }
  ];

  const getActivityIcon = (type) => {
    const icons = {
      deposit: '💰',
      order: '📦',
      referral: '🤝',
      withdrawal: '💸',
      subscription: '💎'
    };
    return icons[type] || '📋';
  };

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      active: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-gray-100 text-gray-800'}`;
  };

  const getStatusColor = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-800 border-green-200',
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200',
      red: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[color] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
              <p className="text-xl text-gray-600">Welcome back! Here's what's happening with your account.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Account Balance */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Account Balance</p>
                <p className="text-3xl font-bold text-green-600">${userData.accountBalance.toFixed(2)}</p>
                <p className="text-sm text-green-500 mt-1">+{userData.monthlyGrowth}% this month</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>

          {/* Spent Balance */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Spent Balance</p>
                <p className="text-3xl font-bold text-red-600">${userData.spentBalance.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">Total expenditure</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💸</span>
              </div>
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-blue-600">{userData.totalOrders}</p>
                <p className="text-sm text-gray-500 mt-1">All time orders</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
            </div>
          </div>

          {/* Total Earnings */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-3xl font-bold text-purple-600">${userData.totalEarnings.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">Including referrals</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Receive Orders */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Receive Orders</p>
                <p className="text-2xl font-bold text-indigo-600">{userData.receiveOrders}</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-xl">📨</span>
              </div>
            </div>
          </div>

          {/* Pending Orders */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold text-yellow-600">{userData.pendingOrders}</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl">⏳</span>
              </div>
            </div>
          </div>

          {/* In Progress Orders */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-orange-600">{userData.inProgressOrders}</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🔄</span>
              </div>
            </div>
          </div>

          {/* Referral Users */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Referral Users</p>
                <p className="text-2xl font-bold text-green-600">{userData.referralUsers}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🤝</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Subscription Information */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="mr-2">💎</span>
                Current Subscription
              </h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{userData.subscriptionName}</h4>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(userData.subscriptionStatus.toLowerCase())}`}>
                  {userData.subscriptionStatus}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expires</span>
                  <span className="font-semibold">{userData.subscriptionExpiry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Renewal</span>
                  <span className="font-semibold text-blue-600">Auto-renew</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors">
                Manage Subscription
              </button>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="mr-2">📊</span>
                Recent Activities
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">{getActivityIcon(activity.type)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{activity.description}</p>
                        <p className="text-sm text-gray-500">{activity.timestamp}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${activity.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {activity.amount > 0 ? '+' : ''}${Math.abs(activity.amount).toFixed(2)}
                      </p>
                      <span className={getStatusBadge(activity.status)}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 font-semibold py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                View All Activities
              </button>
            </div>
          </div>
        </div>

        {/* Status Information */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="mr-2">📋</span>
              Status Information
            </h3>
            <p className="text-green-100 mt-1">Current status of your account and services</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {statusInfo.map((status, index) => (
                <div key={index} className={`p-6 rounded-xl border-2 ${getStatusColor(status.color)}`}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                      {status.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{status.category}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          status.color === 'green' ? 'bg-green-600 text-white' :
                          status.color === 'blue' ? 'bg-blue-600 text-white' :
                          status.color === 'purple' ? 'bg-purple-600 text-white' :
                          'bg-gray-600 text-white'
                        }`}>
                          {status.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{status.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-2">⚡</span>
            Quick Actions
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group">
              <div className="text-3xl mb-2">💰</div>
              <p className="font-semibold text-gray-900 group-hover:text-blue-600">Add Funds</p>
            </button>
            
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group">
              <div className="text-3xl mb-2">📦</div>
              <p className="font-semibold text-gray-900 group-hover:text-green-600">Create Order</p>
            </button>
            
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group">
              <div className="text-3xl mb-2">💸</div>
              <p className="font-semibold text-gray-900 group-hover:text-purple-600">Withdraw</p>
            </button>
            
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors group">
              <div className="text-3xl mb-2">📞</div>
              <p className="font-semibold text-gray-900 group-hover:text-orange-600">Support</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;