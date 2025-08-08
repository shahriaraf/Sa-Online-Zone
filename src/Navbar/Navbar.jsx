import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

// nav logo
import nav_logo from '../../public/Picsart_24-12-18_17-11-57-456.png'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLink = (
        <>
            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium transition-all duration-300 hover:text-blue-500'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `relative hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''
                        } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium transition-all duration-300 hover:text-blue-500'>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        `relative hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''
                        } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''
                        }`
                    }
                >
                    About us
                </NavLink>
            </li>

            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium transition-all duration-300 hover:text-blue-500'>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `relative hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''
                        } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium transition-all duration-300 hover:text-blue-500'>
                <NavLink
                    to="/privacy-policy"
                    className={({ isActive }) =>
                        `relative hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''
                        } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''
                        }`
                    }
                >
                    Privacy Policy
                </NavLink>
            </li>
            <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium transition-all duration-300 hover:text-blue-500'>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `relative hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''
                        } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''
                        }`
                    }
                >
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    const handleMenuIcon = () => setIsActive(true);

    return (
        <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
            ? ' backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-transparent '
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                <div className="flex items-center justify-between py-3 relative">

                    {/* Logo */}
                    <div className="nav-start flex items-center gap-x-3 group">
                        <div className="relative overflow-hidden rounded-full ring-2 ring-cyan-500/20 transition-all duration-300 group-hover:ring-cyan-500/40">
                            <img
                                src={nav_logo}
                                alt="Logo"
                                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-bold text-cyan-500">
                                Saonline <span className="text-[#A62783]">Zone</span>
                            </h2>
                            <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="nav-center mr-10 hidden lg:flex">
                        <ul className="flex items-center space-x-2">
                            {navLink}
                        </ul>
                    </div>

                    {/* User & Mobile */}
                    <div className="flex items-center gap-x-4">
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={handleMenuIcon}
                                className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                {!isActive && <IoMenu className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Desktop Login Button */}
                        <div className="hidden lg:block">
                            <Link to="/sign-in">
                                <button className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-white/20 before:transform before:-skew-x-12 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700">
                                    <span className="relative z-10">Log In</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Sidebar */}
                    <div
                        tabIndex={0}
                        className={`fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden z-50 ${isActive ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                        onClick={() => setIsActive(false)}
                    >
                        <div
                            className={`fixed top-0 right-0 h-screen bg-white shadow-2xl transition-all duration-200 ease-in-out ${isActive ? "w-2/3" : "w-0 overflow-hidden"
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Sidebar Header */}
                            <div className="flex justify-end items-center p-4 border-b border-gray-100 bg-gradient-to-r from-cyan-50 to-blue-50 flex-shrink-0">
                                <button
                                    onClick={() => setIsActive(false)}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-red-100 transition-colors duration-300 group"
                                >
                                    <MdClose className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                                </button>
                            </div>

                            {/* Sidebar Navigation */}
                            <div className="px-4 py-6 bg-white flex-1 overflow-y-auto hide-scrollbar">
                                <ul className="space-y-2">
                                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                                        <div className="p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
                                            <NavLink
                                                to="/"
                                                onClick={() => setIsActive(false)}
                                                className={({ isActive }) =>
                                                    `text-lg font-medium transition-all duration-300 ${isActive ? 'text-cyan-500' : 'hover:text-cyan-500'
                                                    }`
                                                }
                                            >
                                                Home
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                                        <div className="p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
                                            <NavLink
                                                to="/about-us"
                                                onClick={() => setIsActive(false)}
                                                className={({ isActive }) =>
                                                    `text-lg font-medium transition-all duration-300 ${isActive ? 'text-cyan-500' : 'hover:text-cyan-500'
                                                    }`
                                                }
                                            >
                                                About us
                                            </NavLink>
                                        </div>
                                    </li>

                                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                                        <div className="p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
                                            <NavLink
                                                to="/contact"
                                                onClick={() => setIsActive(false)}
                                                className={({ isActive }) =>
                                                    `text-lg font-medium transition-all duration-300 ${isActive ? 'text-cyan-500' : 'hover:text-cyan-500'
                                                    }`
                                                }
                                            >
                                                Contact
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className='text-lg mx-0 md:mx-6 my-4 md:my-0 font-medium transition-all duration-300 hover:text-blue-500'>
                                        <NavLink
                                            to="/privacy-policy"
                                            className={({ isActive }) =>
                                                `relative hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''
                                                } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''
                                                }`
                                            }
                                        >
                                            Privacy Policy
                                        </NavLink>
                                    </li>
                                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                                        <div className="p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
                                            <NavLink
                                                to="/dashboard"
                                                onClick={() => setIsActive(false)}
                                                className={({ isActive }) =>
                                                    `text-lg font-medium transition-all duration-300 ${isActive ? 'text-cyan-500' : 'hover:text-cyan-500'
                                                    }`
                                                }
                                            >
                                                Dashboard
                                            </NavLink>
                                        </div>
                                    </li>
                                </ul>

                                {/* Divider */}
                                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                                {/* Mobile Login Button */}
                                <div className="pt-4">
                                    <Link to="/sign-in" onClick={() => setIsActive(false)}>
                                        <button className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-white/20 before:transform before:-skew-x-12 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700">
                                            <span className="relative z-10">Log In / Sign Up</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;