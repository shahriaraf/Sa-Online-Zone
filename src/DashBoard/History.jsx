import React, { useState } from 'react';

const History = () => {
  const [activeTab, setActiveTab] = useState('deposit');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');

  // Sample data for different history types
  const depositHistory = [
    {
      id: 'DEP-2024-001',
      amount: 500.00,
      method: 'Bank Transfer',
      status: 'Completed',
      date: '2024-01-28 14:30:25',
      transactionId: 'TXN123456789',
      fee: 5.00
    },
    {
      id: 'DEP-2024-002',
      amount: 250.75,
      method: 'PayPal',
      status: 'Pending',
      date: '2024-01-27 16:20:10',
      transactionId: 'TXN987654321',
      fee: 2.50
    },
    {
      id: 'DEP-2024-003',
      amount: 1000.00,
      method: 'Credit Card',
      status: 'Completed',
      date: '2024-01-26 09:15:45',
      transactionId: 'TXN456789123',
      fee: 10.00
    }
  ];

  const withdrawalHistory = [
    {
      id: 'WITH-2024-001',
      amount: 300.00,
      method: 'Bank Transfer',
      status: 'Processing',
      date: '2024-01-28 12:45:30',
      transactionId: 'WTH789123456',
      fee: 15.00
    },
    {
      id: 'WITH-2024-002',
      amount: 150.50,
      method: 'PayPal',
      status: 'Completed',
      date: '2024-01-25 18:20:15',
      transactionId: 'WTH456789123',
      fee: 7.50
    }
  ];

  const orderHistory = [
    {
      id: 'ORD-2024-001',
      title: 'Premium Electronics Showcase',
      amount: 299.99,
      status: 'Completed',
      date: '2024-01-28 14:30:25',
      duration: '7 days',
      views: 15420,
      clicks: 1250
    },
    {
      id: 'ORD-2024-002',
      title: 'Fashion Week Collection',
      amount: 599.50,
      status: 'Active',
      date: '2024-01-27 09:15:10',
      duration: '14 days',
      views: 8930,
      clicks: 720
    }
  ];

  const receiveOrderHistory = [
    {
      id: 'RECV-2024-001',
      customerName: 'John Smith',
      title: 'Tech Gadgets Showcase',
      amount: 450.00,
      status: 'Accepted',
      date: '2024-01-28 16:45:30',
      commission: 67.50
    },
    {
      id: 'RECV-2024-002',
      customerName: 'Sarah Johnson',
      title: 'Beauty Products Display',
      amount: 320.75,
      status: 'Pending',
      date: '2024-01-27 14:20:15',
      commission: 48.11
    }
  ];

  const subscriptionHistory = [
    {
      id: 'SUB-2024-001',
      packageName: 'Professional Package',
      amount: 299.00,
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      renewalDate: '2024-02-01'
    },
    {
      id: 'SUB-2024-002',
      packageName: 'Starter Package',
      amount: 99.00,
      status: 'Expired',
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      renewalDate: 'N/A'
    }
  ];

  const referralHistory = [
    {
      id: 'REF-2024-001',
      referredUser: 'Mike Davis',
      packagePurchased: 'Professional Package',
      commission: 85.50,
      level: 'Direct',
      status: 'Paid',
      date: '2024-01-25 10:30:15'
    },
    {
      id: 'REF-2024-002',
      referredUser: 'Emily Wilson',
      packagePurchased: 'Enterprise Package',
      commission: 125.75,
      level: '2nd Level',
      status: 'Pending',
      date: '2024-01-23 14:45:20'
    }
  ];

  const postHistory = [
    {
      id: 'POST-2024-001',
      title: 'Premium Electronics Showcase',
      category: 'Electronics',
      amount: 299.99,
      status: 'Active',
      date: '2024-01-28 14:30:25',
      views: 15420,
      clicks: 1250,
      zone: 'North America'
    },
    {
      id: 'POST-2024-002',
      title: 'Fashion Week Collection',
      category: 'Fashion',
      amount: 599.50,
      status: 'Draft',
      date: '2024-01-27 09:15:10',
      views: 0,
      clicks: 0,
      zone: 'Europe'
    }
  ];

  const tabs = [
    { key: 'deposit', label: 'Deposit History', icon: '💰' },
    { key: 'withdrawal', label: 'Withdrawal History', icon: '💸' },
    { key: 'order', label: 'Order History', icon: '📦' },
    { key: 'receive', label: 'Receive Orders', icon: '📨' },
    { key: 'subscription', label: 'Subscriptions', icon: '💎' },
    { key: 'referral', label: 'Referrals', icon: '🤝' },
    { key: 'post', label: 'Posts', icon: '📄' }
  ];

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Completed': 'bg-green-100 text-green-800 border-green-200',
      'Active': 'bg-blue-100 text-blue-800 border-blue-200',
      'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Processing': 'bg-orange-100 text-orange-800 border-orange-200',
      'Accepted': 'bg-green-100 text-green-800 border-green-200',
      'Rejected': 'bg-red-100 text-red-800 border-red-200',
      'Paid': 'bg-green-100 text-green-800 border-green-200',
      'Draft': 'bg-gray-100 text-gray-800 border-gray-200',
      'Expired': 'bg-red-100 text-red-800 border-red-200',
      'Failed': 'bg-red-100 text-red-800 border-red-200'
    };
    
    const icons = {
      'Completed': '✅',
      'Active': '🟢',
      'Pending': '⏳',
      'Processing': '⏱️',
      'Accepted': '✅',
      'Rejected': '❌',
      'Paid': '💰',
      'Draft': '📝',
      'Expired': '⏰',
      'Failed': '❌'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
        <span className="mr-1">{icons[status]}</span>
        {status}
      </span>
    );
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case 'deposit': return depositHistory;
      case 'withdrawal': return withdrawalHistory;
      case 'order': return orderHistory;
      case 'receive': return receiveOrderHistory;
      case 'subscription': return subscriptionHistory;
      case 'referral': return referralHistory;
      case 'post': return postHistory;
      default: return [];
    }
  };

  const getFilteredData = () => {
    const data = getCurrentData();
    return data.filter(item => {
      const matchesSearch = Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      // Simple date filtering (can be enhanced)
      const matchesDate = dateFilter === 'all' || 
        (dateFilter === 'today' && item.date?.includes('2024-01-28')) ||
        (dateFilter === 'week' && item.date?.includes('2024-01'));
      
      return matchesSearch && matchesDate;
    });
  };

  // Render different table structures based on active tab
  const renderTableContent = () => {
    const data = getFilteredData();
    
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
            <div className="text-4xl mb-2">📋</div>
            <p>No records found</p>
          </td>
        </tr>
      );
    }

    switch (activeTab) {
      case 'deposit':
        return data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">${item.amount.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.method}</td>
            <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(item.status)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.transactionId}</td>
            <td className="px-6 py-4 whitespace-nowrap text-red-600">${item.fee.toFixed(2)}</td>
          </tr>
        ));
      
      case 'withdrawal':
        return data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-red-600">${item.amount.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.method}</td>
            <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(item.status)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.transactionId}</td>
            <td className="px-6 py-4 whitespace-nowrap text-orange-600">${item.fee.toFixed(2)}</td>
          </tr>
        ));

      case 'order':
        return data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.id}</td>
            <td className="px-6 py-4 max-w-xs truncate">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">${item.amount.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(item.status)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">{item.duration}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{item.views?.toLocaleString()}</td>
          </tr>
        ));

      case 'receive':
        return data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.customerName}</td>
            <td className="px-6 py-4 max-w-xs truncate">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">${item.amount.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(item.status)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-purple-600">${item.commission.toFixed(2)}</td>
          </tr>
        ));

      case 'subscription':
        return data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap font-medium">{item.packageName}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">${item.amount.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(item.status)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.startDate}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.endDate}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{item.renewalDate}</td>
          </tr>
        ));

      case 'referral':
        return data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.referredUser}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.packagePurchased}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">${item.commission.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 py-1 rounded text-xs ${
                item.level === 'Direct' ? 'bg-blue-100 text-blue-800' :
                item.level === '2nd Level' ? 'bg-purple-100 text-purple-800' :
                'bg-indigo-100 text-indigo-800'
              }`}>
                {item.level}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(item.status)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
          </tr>
        ));

      case 'post':
        return data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{item.id}</td>
            <td className="px-6 py-4 max-w-xs truncate">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">${item.amount.toFixed(2)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(item.status)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{item.views?.toLocaleString()}</td>
          </tr>
        ));

      default:
        return null;
    }
  };

  const getTableHeaders = () => {
    switch (activeTab) {
      case 'deposit':
      case 'withdrawal':
        return ['ID', 'Amount', 'Method', 'Status', 'Date', 'Transaction ID', 'Fee'];
      case 'order':
        return ['Order ID', 'Title', 'Amount', 'Status', 'Date', 'Duration', 'Views'];
      case 'receive':
        return ['ID', 'Customer', 'Title', 'Amount', 'Status', 'Date', 'Commission'];
      case 'subscription':
        return ['ID', 'Package', 'Amount', 'Status', 'Start Date', 'End Date', 'Renewal'];
      case 'referral':
        return ['ID', 'Referred User', 'Package', 'Commission', 'Level', 'Status', 'Date'];
      case 'post':
        return ['Post ID', 'Title', 'Category', 'Amount', 'Status', 'Date', 'Views'];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <span className="text-3xl">📊</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">History</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track all your activities, transactions, and business operations in one place
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-8 overflow-x-auto">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-indigo-600 text-white border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {['all', 'today', 'week', 'month'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDateFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    dateFilter === filter
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span>{tabs.find(tab => tab.key === activeTab)?.icon}</span>
              <span>{tabs.find(tab => tab.key === activeTab)?.label}</span>
              <span className="bg-white bg-opacity-20 text-sm px-3 py-1 rounded-full">
                {getFilteredData().length} records
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  {getTableHeaders().map((header) => (
                    <th key={header} className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {renderTableContent()}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Cards for current tab */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Records</p>
                <p className="text-3xl font-bold text-indigo-600">{getCurrentData().length}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-3xl font-bold text-green-600">
                  {getCurrentData().filter(item => item.date?.includes('2024-01')).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Filtered Results</p>
                <p className="text-3xl font-bold text-purple-600">{getFilteredData().length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;