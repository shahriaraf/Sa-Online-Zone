import React, { useState, useEffect } from 'react';
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
    FiClock,
    FiX
} from 'react-icons/fi';
import { IoBarChartSharp } from "react-icons/io5";
import logo from '../../public/Picsart_24-12-18_17-11-57-456.png'
import AddList from './AddList';
import Deposit from './Deposit';
import JobTask from './JobTask';
import MyJobList from './MyJobList';
import WithDrawForm from './WithDrawForm';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState('Add List');
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile device
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && isMobile && !event.target.closest('aside') && !event.target.closest('[data-sidebar-toggle]')) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [sidebarOpen, isMobile]);





 

   const navItems = [
    { name: 'Add List', icon: IoBarChartSharp, badge: null },
    { name: 'Deposit', icon: FiTrendingUp, badge: null },
    { name: 'Job Task', icon: FiUsers, badge: '12' },
    { name: 'My Jobs', icon: FiDollarSign, badge: null },
    { name: 'Withdraw', icon: FiPackage, badge: '5' },
    { name: 'Settings', icon: FiSettings, badge: null }
];


    const StatCard = ({ stat }) => {
        const IconComponent = stat.icon;
        return (
            <div className="bg-white rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-xl group touch-manipulation">
                <div className="flex justify-between items-start mb-3 lg:mb-4">
                    <div className={`p-2 md:p-2.5 lg:p-3 bg-gradient-to-r ${stat.color} rounded-lg lg:rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-lg md:text-xl lg:text-2xl text-white" />
                    </div>
                    <div className="text-right">
                        <span className={`text-xs md:text-sm font-semibold px-2 md:px-2.5 lg:px-3 py-1 rounded-full ${stat.trend === 'up'
                            ? 'text-green-700 bg-green-100'
                            : 'text-red-700 bg-red-100'
                            }`}>
                            {stat.change}
                        </span>
                    </div>
                </div>
                <h3 className="text-gray-600 text-xs md:text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 truncate">{stat.value}</p>
                <div className="flex items-center gap-2">
                    <div className={`w-full h-1.5 lg:h-2 ${stat.bgColor} rounded-full overflow-hidden`}>
                        <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left`}
                            style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-gray-400 text-xs flex-shrink-0">
                        {stat.trend === 'up' ? '↗️' : '↘️'}
                    </span>
                </div>
            </div>
        );
    };

    const ActivityItem = ({ activity }) => {
        const IconComponent = activity.icon;
        return (
            <div className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg lg:rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 group cursor-pointer transform hover:translate-x-1 touch-manipulation">
                <div className={`p-1.5 md:p-2 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="text-white text-xs md:text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-gray-800 text-xs md:text-sm font-medium group-hover:text-cyan-600 transition-colors duration-300 truncate">
                        {activity.title}
                    </p>
                    <p className="text-gray-500 text-xs truncate">{activity.description}</p>
                    <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                        <FiClock className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{activity.time}</span>
                    </p>
                </div>
                <button className="opacity-0 md:group-hover:opacity-100 text-cyan-500 hover:text-cyan-600 text-xs transition-all duration-300 bg-cyan-50 hover:bg-cyan-100 px-2 py-1 rounded flex-shrink-0 hidden md:block touch-manipulation">
                    View
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <aside className={`fixed lg:sticky top-0 z-50 w-64 md:w-72 h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl border-r border-gray-700 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}>
                    {/* Logo */}
                    <div className="p-4 md:p-6 lg:p-8 border-b border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 md:gap-3 group">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
                                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                                        Dashboard
                                    </h1>
                                    <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full mt-1"></div>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors touch-manipulation"
                            >
                                <FiX className="text-lg md:text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="p-3 md:p-4 overflow-y-auto h-[calc(100vh-140px)] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-200px)]">
                        <ul className="space-y-1 md:space-y-2">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => {
                                                setActivePage(item.name);
                                                if (isMobile) setSidebarOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg lg:rounded-xl transition-all duration-300 group touch-manipulation ${activePage === item.name
                                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:translate-x-1'
                                                }`}
                                        >
                                            <IconComponent className={`text-base md:text-lg group-hover:scale-110 transition-transform ${activePage === item.name ? 'filter drop-shadow-sm' : ''}`} />
                                            <span className="font-medium flex-1 text-left text-sm md:text-base">{item.name}</span>
                                            {item.badge && (
                                                <span className="bg-red-500 text-white text-xs rounded-full px-1.5 md:px-2 py-0.5 md:py-1 min-w-[18px] md:min-w-[20px] text-center shadow-sm">
                                                    {item.badge}
                                                </span>
                                            )}
                                            {activePage === item.name && (
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse shadow-sm"></div>
                                            )}
                                        </button>

                                    </li>
                                );
                            })}
                        </ul>

                        {/* User Profile */}
                        <div className="mt-4 md:mt-6 lg:mt-8 p-3 md:p-4 bg-gray-800 rounded-lg lg:rounded-xl border border-gray-700">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                                    <FiUser className="text-sm md:text-lg" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-white font-semibold text-xs md:text-sm truncate">Alex Johnson</p>
                                    <p className="text-cyan-400 text-xs font-medium">Administrator</p>
                                </div>
                            </div>
                            <button className="w-full mt-2 md:mt-3 px-2 md:px-3 py-1.5 md:py-2 text-xs text-cyan-400 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 font-medium border border-gray-600 hover:border-cyan-500 touch-manipulation">
                                View Profile
                            </button>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto">
                    <main className="p-3 md:p-6 lg:p-8 min-h-screen">
                        {/* Mobile Menu Button */}
                        <button
                            data-sidebar-toggle
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden fixed top-3 left-3 md:top-4 md:left-4 z-40 p-2.5 md:p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg touch-manipulation"
                        >
                            <FiMenu className="text-lg md:text-xl" />
                        </button>

                        {/* Conditional Rendering */}
                        {activePage === 'Add List' && <AddList></AddList>}
                        {activePage === 'Deposit' && <Deposit></Deposit>}
                        {activePage === 'Job Task' && <JobTask></JobTask>}
                        {activePage === 'My Jobs' && <MyJobList></MyJobList>}
                        {activePage === 'Withdraw' && <WithDrawForm></WithDrawForm>}
                        {activePage === 'Settings' && (
                            <div className="text-xl font-semibold text-gray-700">Settings Page</div>
                        )}
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