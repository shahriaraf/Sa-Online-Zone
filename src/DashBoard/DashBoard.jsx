import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { 
    FiDollarSign, 
    FiUsers, 
    FiTarget, 
    FiTrendingUp, 
    FiPackage, 
    FiSettings, 
    FiBell, 
    FiSearch, 
    FiMenu, 
    FiFileText, 
    FiMail, 
    FiZap,
    FiShoppingBag,
    FiHeadphones,
    FiUser,
    FiClock
} from 'react-icons/fi';
import { IoBarChartSharp } from "react-icons/io5";
import logo from '../../public/Picsart_24-12-18_17-11-57-456.png'

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState('30D');
    const [notifications, setNotifications] = useState(3);

    // Sample data
    const revenueData = [
        { name: 'Jan', value: 12000, users: 2400 },
        { name: 'Feb', value: 19000, users: 2800 },
        { name: 'Mar', value: 15000, users: 2200 },
        { name: 'Apr', value: 25000, users: 3200 },
        { name: 'May', value: 22000, users: 2900 },
        { name: 'Jun', value: 30000, users: 3500 },
        { name: 'Jul', value: 28000, users: 3300 }
    ];

    const stats = [
        {
            title: 'Total Revenue',
            value: '$54,239',
            change: '+12.5%',
            trend: 'up',
            icon: FiDollarSign,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-cyan-100',
            textColor: 'text-cyan-600'
        },
        {
            title: 'New Customers',
            value: '2,847',
            change: '+8.2%',
            trend: 'up',
            icon: FiUsers,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-600'
        },
        {
            title: 'Active Users',
            value: '18,429',
            change: '-2.3%',
            trend: 'down',
            icon: FiTarget,
            color: 'from-cyan-400 to-blue-600',
            bgColor: 'bg-gray-100',
            textColor: 'text-gray-600'
        },
        {
            title: 'Conversion Rate',
            value: '3.24%',
            change: '+0.8%',
            trend: 'up',
            icon: IoBarChartSharp,
            color: 'from-blue-600 to-cyan-400',
            bgColor: 'bg-cyan-50',
            textColor: 'text-cyan-700'
        }
    ];

    const activities = [
        {
            id: 1,
            title: 'New order placed',
            description: 'Order #12847 - $234.50',
            time: '2 minutes ago',
            color: 'bg-cyan-500',
            type: 'order',
            icon: FiShoppingBag
        },
        {
            id: 2,
            title: 'Support ticket resolved',
            description: 'Ticket #5891 closed',
            time: '15 minutes ago',
            color: 'bg-blue-500',
            type: 'support',
            icon: FiHeadphones
        },
        {
            id: 3,
            title: 'Product inventory updated',
            description: 'Stock levels adjusted',
            time: '1 hour ago',
            color: 'bg-cyan-400',
            type: 'inventory',
            icon: FiPackage
        },
        {
            id: 4,
            title: 'Monthly report generated',
            description: 'Analytics report ready',
            time: '3 hours ago',
            color: 'bg-blue-400',
            type: 'report',
            icon: FiFileText
        },
        {
            id: 5,
            title: 'New user registration',
            description: 'User: sarah.connor@email.com',
            time: '5 hours ago',
            color: 'bg-cyan-600',
            type: 'user',
            icon: FiUser
        }
    ];

    const navItems = [
        { name: 'Overview', icon: IoBarChartSharp, active: true, badge: null },
        { name: 'Analytics', icon: FiTrendingUp, active: false, badge: null },
        { name: 'Customers', icon: FiUsers, active: false, badge: '12' },
        { name: 'Revenue', icon: FiDollarSign, active: false, badge: null },
        { name: 'Products', icon: FiPackage, active: false, badge: '5' },
        { name: 'Settings', icon: FiSettings, active: false, badge: null }
    ];

    const StatCard = ({ stat }) => {
        const IconComponent = stat.icon;
        return (
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-2xl text-white" />
                    </div>
                    <div className="text-right">
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${stat.trend === 'up'
                                ? 'text-green-700 bg-green-100'
                                : 'text-red-700 bg-red-100'
                            }`}>
                            {stat.change}
                        </span>
                    </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
                <div className="flex items-center gap-2">
                    <div className={`w-full h-2 ${stat.bgColor} rounded-full overflow-hidden`}>
                        <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left`}
                            style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-gray-400 text-xs">
                        {stat.trend === 'up' ? '↗️' : '↘️'}
                    </span>
                </div>
            </div>
        );
    };

    const ActivityItem = ({ activity }) => {
        const IconComponent = activity.icon;
        return (
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 group cursor-pointer transform hover:translate-x-1">
                <div className={`p-2 ${activity.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="text-white text-sm" />
                </div>
                <div className="flex-1">
                    <p className="text-gray-800 text-sm font-medium group-hover:text-cyan-600 transition-colors duration-300">
                        {activity.title}
                    </p>
                    <p className="text-gray-500 text-xs">{activity.description}</p>
                    <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {activity.time}
                    </p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 text-cyan-500 hover:text-cyan-600 text-xs transition-all duration-300 bg-cyan-50 hover:bg-cyan-100 px-2 py-1 rounded">
                    View
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <aside className={`sticky top-0 z-50 w-72 h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl border-r border-gray-700`}>
                    {/* Logo */}
                    <div className="p-8 border-b border-gray-700">
                        <div className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                               <img src={logo} alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">
                                    Dashboard
                                </h1>
                                <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full mt-1"></div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4">
                        <ul className="space-y-2">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <li key={item.name}>
                                        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${item.active
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:translate-x-1'
                                            }`}>
                                            <IconComponent className={`text-lg group-hover:scale-110 transition-transform ${item.active ? 'filter drop-shadow-sm' : ''}`} />
                                            <span className="font-medium flex-1 text-left">{item.name}</span>
                                            {item.badge && (
                                                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center shadow-sm">
                                                    {item.badge}
                                                </span>
                                            )}
                                            {item.active && (
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-sm"></div>
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* User Profile */}
                        <div className="mt-8 p-4 bg-gray-800 rounded-xl border border-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    <FiUser className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Alex Johnson</p>
                                    <p className="text-cyan-400 text-xs font-medium">Administrator</p>
                                </div>
                            </div>
                            <button className="w-full mt-3 px-3 py-2 text-xs text-cyan-400 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 font-medium border border-gray-600 hover:border-cyan-500">
                                View Profile
                            </button>
                        </div>
                    </nav>
                </aside>

                <div className="flex-1 overflow-y-auto">
                    <main className="p-8 min-h-screen">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg"
                        >
                            <FiMenu className="text-xl" />
                        </button>

                        {/* Header */}
                        <header className="bg-white/95 backdrop-blur-md rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">
                                        <span className="bg-gradient-to-r from-gray-800 to-cyan-600 bg-clip-text text-transparent">
                                            Welcome back, Alex!
                                        </span>
                                        <span className="text-2xl ml-2">👋</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        Here's what's happening with your business today.
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* Notifications */}
                                    <button
                                        onClick={() => setNotifications(0)}
                                        className="relative p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-gray-200 hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 group hover:scale-105"
                                    >
                                        <FiBell className="text-xl text-gray-600" />
                                        {notifications > 0 && (
                                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-400 rounded-full flex items-center justify-center text-xs text-white font-bold animate-pulse shadow-lg">
                                                {notifications}
                                            </div>
                                        )}
                                    </button>

                                    {/* Search */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="pl-10 pr-4 py-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 w-64 hover:shadow-md"
                                        />
                                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Stats Grid */}
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {stats.map((stat) => (
                                <StatCard key={stat.title} stat={stat} />
                            ))}
                        </section>

                        {/* Charts and Activity */}
                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            {/* Revenue Chart */}
                            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">Revenue Analytics</h3>
                                        <p className="text-gray-600 text-sm">Monthly revenue breakdown</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {['7D', '30D', '3M'].map((period) => (
                                            <button
                                                key={period}
                                                onClick={() => setSelectedPeriod(period)}
                                                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-300 ${selectedPeriod === period
                                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                                                        : 'bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 hover:from-cyan-100 hover:to-blue-100'
                                                    }`}
                                            >
                                                {period}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={revenueData}>
                                            <defs>
                                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                            <XAxis
                                                dataKey="name"
                                                stroke="#6b7280"
                                                fontSize={12}
                                                fontWeight={500}
                                            />
                                            <YAxis
                                                stroke="#6b7280"
                                                fontSize={12}
                                                fontWeight={500}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: 'white',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '12px',
                                                    color: '#374151',
                                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                                                }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="url(#gradient)"
                                                strokeWidth={3}
                                                fillOpacity={1}
                                                fill="url(#colorRevenue)"
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#06b6d4" />
                                                    <stop offset="100%" stopColor="#3b82f6" />
                                                </linearGradient>
                                            </defs>
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">Recent Activity</h3>
                                        <p className="text-gray-600 text-sm">Latest updates</p>
                                    </div>
                                    <button className="text-cyan-500 hover:text-cyan-600 text-sm transition-colors duration-300 font-medium">
                                        View All
                                    </button>
                                </div>
                                <div className="space-y-2 max-h-80 overflow-y-auto">
                                    {activities.map((activity) => (
                                        <ActivityItem key={activity.id} activity={activity} />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Quick Actions */}
                        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: FiFileText, title: 'Create Report' },
                                { icon: FiMail, title: 'Send Campaign' },
                                { icon: FiTarget, title: 'Set Goals' },
                                { icon: FiZap, title: 'Quick Actions' }
                            ].map((action) => {
                                const IconComponent = action.icon;
                                return (
                                    <button
                                        key={action.title}
                                        className="bg-white rounded-xl p-4 border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                                    >
                                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform filter group-hover:drop-shadow-sm">
                                            <IconComponent className="text-gray-600 group-hover:text-cyan-600 transition-colors duration-300" />
                                        </div>
                                        <p className="text-gray-700 font-medium text-sm group-hover:text-cyan-600 transition-colors duration-300">{action.title}</p>
                                    </button>
                                );
                            })}
                        </section>
                    </main>
                </div>
            </div>

            {/* Backdrop for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default Dashboard;