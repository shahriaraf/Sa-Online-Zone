import logo from '../../public/Picsart_24-12-18_17-11-57-456.png';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="relative w-full bg-black text-white pt-20">
            {/* Floating Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%] z-30">
                <div className="card">
                    <div className="relative w-[300px] sm:w-[350px] aspect-video flex items-center justify-center group transition-all duration-700 bg-black border border-blue-500 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center py-5 w-full h-full absolute transition-all duration-300 group-hover:-translate-y-16 bg-gradient-to-br from-blue-950 via-black to-blue-950 rounded-xl">
                            <p className="text-xl sm:text-2xl font-semibold text-blue-400 font-serif">Thank You</p>
                            <p className="px-10 text-xs sm:text-sm text-blue-200">
                                It’s so nice that you had the time to view this idea
                            </p>
                            <p className="font-serif text-xs sm:text-sm text-blue-300">
                                Wishing you a fantastic day ahead!
                            </p>
                            <p className="font-sans text-[10px] text-blue-300 pt-4">SA Online Zone</p>
                        </div>
                        <button
                            className="bg-gradient-to-r from-blue-600 to-blue-600 text-white w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold shadow-md border-2 border-blue-800 group-hover:opacity-0 group-hover:scale-0 group-hover:rotate-180 transition-all duration-1000 [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)]"
                        >
                            SA Zone
                        </button>
                        <div className="tp absolute w-full h-full bg-blue-900 group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] [clip-path:polygon(50%_50%,_100%_0,_0_0)] transition-all duration-1000"></div>
                        <div className="lft absolute w-full h-full bg-blue-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)] transition-all duration-700"></div>
                        <div className="rgt absolute w-full h-full bg-blue-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] transition-all duration-700"></div>
                        <div className="btm absolute w-full h-full bg-blue-800 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)] transition-all duration-700"></div>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <footer className="pb-10 relative z-10">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center">
                        <img className="w-12 h-12" src={logo} alt="Logo" />
                        <div className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text mt-2">
                            SA Online Zone
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
                        <p className="text-sm text-gray-400">Email: support@saonlinezone.com</p>
                        <p className="text-sm text-gray-400">Phone: +880-1234-567890</p>
                        <p className="text-sm text-gray-400">Address: Dhaka, Bangladesh</p>
                    </div>

                    {/* Privacy */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-white">Privacy Policy</h3>
                        <p className="text-sm text-gray-400">
                            We care about your privacy. Read our terms and conditions to
                            understand how your data is protected.
                        </p>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2 rounded-full shadow-md hover:scale-110 transition transform duration-300"
                            >
                                <FaFacebookF size={16} color="#1877F2" /> {/* Facebook Blue */}
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full shadow-md hover:scale-110 transition transform duration-300"
                            >
                                <FaTwitter size={16} color="#1DA1F2" /> {/* Twitter Blue */}
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full shadow-md hover:scale-110 transition transform duration-300"
                            >
                                <FaInstagram size={16} color="#E1306C" /> {/* Instagram Pinkish */}
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full shadow-md hover:scale-110 transition transform duration-300"
                            >
                                <FaLinkedinIn size={16} color="#0A66C2" /> {/* LinkedIn Blue */}
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Text */}
                <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-800 pt-4">
                    &copy; {new Date().getFullYear()} SA Online Zone. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
