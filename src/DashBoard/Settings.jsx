import React, { useState, useEffect } from 'react';
import {
  Settings as SettingsIcon,
  Palette,
  Sun,
  Moon,
  Globe,
  DollarSign,
  Save,
  LogOut,
  Lightbulb
} from 'lucide-react';

const Settings = () => {
  // State management for settings
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Available options
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
    { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' }
  ];

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedCurrency = localStorage.getItem('currency') || 'USD';
    
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    setCurrency(savedCurrency);
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Handle currency change
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  // Save settings
  const handleSaveSettings = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSaving(false);
    
    // Show success message (you can implement toast notification here)
    alert('Settings saved successfully!');
  };

  // Handle logout
  const handleLogout = () => {
    // Clear user data and redirect to login
    localStorage.clear();
    sessionStorage.clear();
    
    // Simulate logout process
    setTimeout(() => {
      alert('You have been logged out successfully!');
      setShowLogoutModal(false);
      // In a real app, you would redirect to login page
      // window.location.href = '/login';
    }, 500);
  };

  // Get current language and currency objects
  const currentLanguage = languages.find(lang => lang.code === language);
  const currentCurrency = currencies.find(curr => curr.code === currency);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-indigo-600 to-blue-700'
              : 'bg-gradient-to-r from-indigo-500 to-blue-600'
          }`}>
            <SettingsIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className={`text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Settings
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Customize your experience and manage your account preferences
          </p>
        </div>

        {/* Settings Card */}
        <div className={`rounded-3xl shadow-xl border overflow-hidden ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-100'
        }`}>
          
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Account Settings</h2>
            <p className="text-indigo-100 mt-1">Manage your preferences and account settings</p>
          </div>

          <div className="p-8 space-y-8">
            
            {/* Theme Settings */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="w-6 h-6 text-blue-600" />
                <h3 className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Appearance
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    theme === 'light'
                      ? 'border-indigo-500 bg-indigo-50'
                      : theme === 'dark'
                      ? 'border-gray-600 bg-gray-700 hover:bg-gray-600'
                      : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                      <Sun className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div className="text-left">
                      <p className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Light Mode
                      </p>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Clean and bright interface
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-indigo-500 bg-indigo-900'
                      : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center">
                      <Moon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-left">
                      <p className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Dark Mode
                      </p>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Easy on the eyes
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Language Settings */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Language
                </h3>
              </div>
              
              <div className={`p-4 rounded-xl border ${
                theme === 'dark'
                  ? 'border-gray-600 bg-gray-700'
                  : 'border-gray-300 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Current Language
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{currentLanguage?.flag}</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {currentLanguage?.name}
                    </span>
                  </div>
                </div>
                
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-800 text-white'
                      : 'border-gray-300 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Currency Settings */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <h3 className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Currency
                </h3>
              </div>
              
              <div className={`p-4 rounded-xl border ${
                theme === 'dark'
                  ? 'border-gray-600 bg-gray-700'
                  : 'border-gray-300 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Current Currency
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{currentCurrency?.flag}</span>
                    <span className={`font-bold ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {currentCurrency?.symbol}
                    </span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {currentCurrency?.name}
                    </span>
                  </div>
                </div>
                
                <select
                  value={currency}
                  onChange={(e) => handleCurrencyChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-800 text-white'
                      : 'border-gray-300 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                  {currencies.map((curr) => (
                    <option key={curr.code} value={curr.code}>
                      {curr.flag} {curr.symbol} - {curr.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Save Settings</span>
                  </div>
                )}
              </button>

              <button
                onClick={() => setShowLogoutModal(true)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
              >
                <div className="flex items-center justify-center space-x-2">
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Settings Info */}
        <div className={`mt-8 p-6 rounded-2xl ${
          theme === 'dark'
            ? 'bg-gray-800 border border-gray-700'
            : 'bg-blue-50 border border-blue-200'
        }`}>
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h4 className={`font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Settings Information
              </h4>
              <ul className={`space-y-1 text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Theme settings are applied immediately and saved to your browser</li>
                <li>• Language changes will be reflected across the entire application</li>
                <li>• Currency settings affect how monetary values are displayed</li>
                <li>• All settings are automatically synchronized across your devices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`rounded-3xl shadow-2xl max-w-md w-full ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-6 rounded-t-3xl">
              <h3 className="text-2xl font-bold text-white">Confirm Logout</h3>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <LogOut className="w-8 h-8 text-red-600" />
                </div>
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Are you sure you want to log out? You will need to sign in again to access your account.
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className={`flex-1 px-6 py-3 border rounded-xl font-medium transition-colors ${
                    theme === 'dark'
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;