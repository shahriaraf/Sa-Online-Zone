import React, { useState, useEffect } from 'react';
import {
    FiDollarSign,
    FiSettings,
    FiBell,
    FiMenu,
    FiFileText,
    FiBriefcase,
    FiClipboard,
    FiCreditCard,
    FiMail,
    FiChevronDown,
    FiPlus,
    FiUser,
} from 'react-icons/fi';
import logo from '../../public/Picsart_24-12-18_17-11-57-456.png';
import AddList from './AddList';
import Deposit from './Deposit';
import JobTask from './JobTask';
import MyJobList from './MyJobList';
import WithDrawForm from './WithDrawForm';
import FindJobs from './FindJobs';
import PostJob from './PostJob';
import AddFund from './AddFund';
import BuySubscription from './BuySubscription';
import ReferEarn from './ReferEarn';
import MyOrders from './MyOrders';
import ReceiveOrder from './ReceiveOrder';
import PostManagement from './PostManagement';
import Inbox from './Inbox';
import History from './History';
import Settings from './Settings';
import Overview from './Overview';
import Profile from './Profile';
import DashboardHome from './DashBoardHome';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState('Dashboard');
    const [isMobile, setIsMobile] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

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
    { name: 'Add Fund', icon: FiPlus, badge: null },
    { name: 'Buy Subscription', icon: FiCreditCard, badge: null },
    { name: 'Withdraw', icon: FiCreditCard, badge: null },
    { name: 'Deposit', icon: FiDollarSign, badge: null },
    { name: 'Refer & Earn', icon: FiUser, badge: null },
    { name: 'My Order', icon: FiClipboard, badge: null },
    { name: 'Receive Order', icon: FiMail, badge: null },
    { name: 'Post', icon: FiFileText, badge: null },
    { name: 'Inbox', icon: FiMail, badge: null },
    { name: 'History', icon: FiFileText, badge: null },
    { name: 'Settings', icon: FiSettings, badge: null },
    { name: 'Profile', icon: FiUser , badge: null },
    { name: 'Overview', icon: FiBriefcase, badge: null },
  
];


    return (
        <div className="min-h-screen bg-white">
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <aside className={`fixed lg:sticky top-0 z-50 w-64 h-screen overflow-y-auto hide-scrollbar bg-blue-500 text-white shadow-xl border-r border-gray-300 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                    {/* Profile Section */}
                    <div className="p-6 border-b border-gray-300 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-full overflow-hidden mb-3 ring-4 ring-white/20">
                            <img 
                                src="https://i.pravatar.cc/80?img=13" 
                                alt="User Avatar" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <h2 className="text-lg font-bold">John Don</h2>
                        <p className="text-sm text-gray-300">johndon@company.com</p>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-6 px-4 flex flex-col gap-2">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = activePage === item.name;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        setActivePage(item.name);
                                        if (isMobile) setSidebarOpen(false);
                                    }}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 
                    ${isActive ? 'bg-white text-blue-500 font-semibold shadow-md' : 'hover:bg-blue-600 text-white'}`}
                                >
                                    <IconComponent className="text-xl" />
                                    <span className="text-sm flex-1">{item.name}</span>
                                    {item.badge && (
                                        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto hide-scrollbar">
                    {/* Enhanced Top Navbar */}
                    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-lg sticky top-0 z-30">
                        {/* Left: Logo and App Name */}
                        <div className="flex items-center gap-3">
                            <div className='bg-white w-10 h-10 rounded-full p-1 hidden md:inline shadow-md'>
                                <img src={logo} alt="Saonline Zone Logo" className="w-full h-full rounded-full object-contain" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold">Saonline Zone</h1>
                                <p className="text-blue-100 text-xs">Dashboard</p>
                            </div>
                        </div>

                        {/* Right: Enhanced User Info and Actions */}
                        <div className="flex items-center gap-4">
                            {/* Notification Icon */}
                            <div className="relative">
                                <button className="hover:bg-white/10 p-2 rounded-full transition-all duration-200 hover:scale-105">
                                    <FiBell className="text-xl" />
                                </button>
                                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                            </div>

                            {/* User Profile Section */}
                            <div className="relative">
                                <button 
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200"
                                >
                                    <img
                                        src="https://i.pravatar.cc/40?img=13"
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full border-2 border-white/30 shadow-md"
                                    />
                                    <div className="hidden md:block text-left">
                                        <div className="text-sm font-semibold">John Don</div>
                                        <div className="text-xs text-blue-100">Administrator</div>
                                    </div>
                                    <FiChevronDown className={`text-sm transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} />
                                </button>

                                {/* User Dropdown Menu */}
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://i.pravatar.cc/50?img=13"
                                                    alt="Profile"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <div className="font-semibold text-gray-900">John Don</div>
                                                    <div className="text-sm text-gray-500 flex items-center gap-1">
                                                        <FiMail className="text-xs" />
                                                        johndon@company.com
                                                    </div>
                                                    <div className="text-xs text-green-600 font-medium">● Online</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="py-2">
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                                                <FiUser className="text-gray-400" />
                                                View Profile
                                            </button>
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                                                <FiSettings className="text-gray-400" />
                                                Account Settings
                                            </button>
                                            <hr className="my-2" />
                                            <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3">
                                                <span className="text-red-400">→</span>
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <main className="p-3 md:p-6 lg:p-8 min-h-screen">
                        {/* Mobile Menu Button */}
                        <button
                            data-sidebar-toggle
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden fixed top-3 left-3 md:top-4 md:left-4 z-40 p-2.5 md:p-3 bg-white text-blue-500 shadow-lg hover:shadow-xl font-bold mt-2 transform hover:scale-105 transition-all duration-300 rounded-lg touch-manipulation"
                        >
                            <FiMenu className="text-lg md:text-xl" />
                        </button>

                        {/* Conditional Rendering */}

                        {activePage === 'Dashboard' && <DashboardHome></DashboardHome>}
                        {activePage === 'Add Fund' && <AddFund></AddFund>}
                        {activePage === 'Buy Subscription' && <BuySubscription></BuySubscription>}
                        {activePage === 'Withdraw' && <WithDrawForm />}
                        {activePage === 'Deposit' && <Deposit />}
                        {activePage === 'Refer & Earn' && <ReferEarn></ReferEarn>}
                        {activePage === 'My Order' && <MyOrders></MyOrders>}
                        {activePage === 'Receive Order' && <ReceiveOrder></ReceiveOrder>}
                        {activePage === 'Post' && <PostManagement></PostManagement>}
                        {activePage === 'Inbox' && <Inbox></Inbox>}
                        {activePage === 'History' && <History></History>}
                        {activePage === 'Settings' && <Settings></Settings>}
                        {activePage === 'Profile' && <Profile></Profile>}
                        {activePage === 'Overview' && <Overview></Overview>}
                       
                     
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

            {/* Backdrop for user menu */}
            {showUserMenu && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowUserMenu(false)}
                />
            )}
        </div>
    );
};

export default Dashboard;