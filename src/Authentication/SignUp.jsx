import React, { useState } from 'react';
import {
    FiMail,
    FiLock,
    FiUser,
    FiEye,
    FiEyeOff,
    FiX,
    FiChevronRight,
    FiShield,
    FiUsers,
    FiTrendingUp,
    FiPhone
} from 'react-icons/fi';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

// Input field component
const InputField = ({
    icon: Icon,
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    showPasswordToggle,
    onTogglePassword,
    showPassword
}) => (
    <div className="relative">
        <div className="relative">
            <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
                type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full pl-12 pr-12 py-4 bg-blue-50 border-2 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white transition-all duration-300 ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-200 hover:border-blue-300 focus:border-blue-500'
                    }`}
            />
            {showPasswordToggle && (
                <button
                    type="button"
                    onClick={onTogglePassword}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            )}
        </div>
        {error && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                <FiX className="text-xs" />
                {error}
            </p>
        )}
    </div>
);

// Social button
const SocialButton = ({ icon: Icon, provider, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="flex-1 flex items-center justify-center gap-3 py-3 px-4 bg-white border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
    >
        <Icon className="text-lg group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium">{provider}</span>
    </button>
);

// Feature card
const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <Icon className="text-xl" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-blue-100 text-sm">{description}</p>
    </div>
);

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        whatsapp: '',
        country: '',
        password: '',
        confirmPassword: '',
        policyAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const passwordStrength = getPasswordStrength(formData.password);
    const strengthColors = ['bg-red-500', 'bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500'];
    const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];

    const validateForm = () => {
        const newErrors = {};

        if (isSignUp) {
            if (!formData.name.trim()) newErrors.name = 'Name is required';
            if (!formData.username.trim()) newErrors.username = 'Username is required';
            if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
            if (!formData.country.trim()) newErrors.country = 'Country is required';
            if (!formData.policyAccepted) newErrors.policyAccepted = 'You must accept our policies';

        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (isSignUp && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            console.log('Form submitted:', formData);
        }, 2000);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const switchMode = () => {
        setIsSignUp(!isSignUp);
        setFormData({
            name: '',
            username: '',
            email: '',
            whatsapp: '',
            country: '',
            password: '',
            confirmPassword: '',
            policyAccepted: false
        });
        setErrors({});
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cyan-500 to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 flex flex-col justify-center p-12 text-white">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold mb-4">Welcome to our Platform</h1>
                        <p className="text-xl text-blue-100">
                            Join thousands of users who trust our platform for their business needs.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <FeatureCard icon={FiShield} title="Secure & Private" description="Your data is protected with enterprise-grade security and encryption." />
                        <FeatureCard icon={FiUsers} title="Team Collaboration" description="Work together seamlessly with powerful collaboration tools." />
                        <FeatureCard icon={FiTrendingUp} title="Advanced Analytics" description="Get insights and analytics to grow your business effectively." />
                    </div>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {isSignUp ? 'Create Account' : 'Welcome Back'}
                        </h2>
                        <p className="text-gray-600">
                            {isSignUp ? 'Sign up to get started with your account' : 'Sign in to access your account'}
                        </p>
                    </div>

                    <div className="mb-6">
                        <div className="flex gap-3 mb-4">
                            <SocialButton icon={FaGoogle} provider="Google" onClick={() => console.log('Google login')} />
                            <SocialButton icon={FaFacebookF} provider="Facebook" onClick={() => console.log('Facebook login')} />
                        </div>
                    </div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-gray-50 px-4 text-gray-500">or continue with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {isSignUp && (
                            <>
                                <div className="grid grid-cols-2 gap-3 pb-4">
                                    <InputField icon={FiUser} type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} error={errors.name} />
                                    <InputField icon={FiUser} type="text" name="username" placeholder="User Name" value={formData.username} onChange={handleChange} error={errors.username} />
                                </div>

                                <InputField icon={FiPhone} type="tel" name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} error={errors.whatsapp} />
                                <InputField icon={FiUsers} type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} error={errors.country} />
                            </>
                        )}

                        <InputField icon={FiMail} type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} error={errors.email} />

                        <InputField icon={FiLock} type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} error={errors.password} showPasswordToggle onTogglePassword={() => setShowPassword(!showPassword)} showPassword={showPassword} />

                        {isSignUp && formData.password && (
                            <div className="space-y-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-gray-200'}`} />
                                    ))}
                                </div>
                                <p className="text-xs text-gray-600">Password strength: {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : 'Enter password'}</p>
                            </div>
                        )}

                        {isSignUp && (
                            <InputField icon={FiLock} type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} showPasswordToggle onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)} showPassword={showConfirmPassword} />
                        )}

                        {!isSignUp && (
                            <div className="text-right">
                                <button type="button" className="text-blue-500 hover:text-blue-600 text-sm transition-colors">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        {!isSignUp && (
                            <>
                            

                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        id="policy"
                                        name="policyAccepted"
                                        checked={formData.policyAccepted}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                    <label htmlFor="policy" className="text-sm text-gray-600">
                                        I agree to the{' '}
                                        <button type="button" className="text-blue-500 hover:text-blue-600 underline">
                                            Terms of Service
                                        </button>{' '}
                                        and{' '}
                                        <button type="button" className="text-blue-500 hover:text-blue-600 underline">
                                            Privacy Policy
                                        </button>
                                    </label>
                                </div>

                                {errors.policyAccepted && (
                                    <p className="text-sm text-red-500 flex items-center gap-1">
                                        <FiX className="text-xs" />
                                        {errors.policyAccepted}
                                    </p>
                                )}
                            </>
                        )}


                        <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    {isSignUp ? 'Create Account' : 'Sign In'}
                                    <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                            <button type="button" onClick={switchMode} className="text-blue-500 font-semibold hover:text-blue-600 transition-all">
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
