import React, { useState } from 'react';

const AddFund = () => {
  const [formData, setFormData] = useState({
    details: '',
    methodName: '',
    senderAccount: '',
    transactionId: '',
    amount: '',
    screenshot: null,
  });

  const [history, setHistory] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newEntry = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleString(),
      screenshotURL: formData.screenshot ? URL.createObjectURL(formData.screenshot) : null,
    };

    setHistory([newEntry, ...history]);
    setFormData({
      details: '',
      methodName: '',
      senderAccount: '',
      transactionId: '',
      amount: '',
      screenshot: null,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
            <span className="text-2xl">💸</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Add Fund</h1>
          <p className="text-gray-600">Submit your fund request with transaction details</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Fund Request Form</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Details */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Transaction Details
              </label>
              <textarea
                name="details"
                rows={4}
                placeholder="Enter transaction details, purpose, or additional notes..."
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                value={formData.details}
                onChange={handleChange}
                required
              />
            </div>

            {/* Grid Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="methodName"
                    placeholder="e.g., Bank Transfer, PayPal, etc."
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.methodName}
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-gray-400">💳</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Sender Account
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="senderAccount"
                    placeholder="Account number or email"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.senderAccount}
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-gray-400">👤</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Transaction ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="transactionId"
                    placeholder="Enter transaction reference"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.transactionId}
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-gray-400">#️⃣</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    name="amount"
                    placeholder="0.00"
                    className="w-full p-4 pl-8 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-gray-500 font-medium">$</span>
                  </div>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Screenshot (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors duration-200">
                <input
                  type="file"
                  accept="image/*"
                  name="screenshot"
                  onChange={handleChange}
                  className="hidden"
                  id="screenshot-upload"
                />
                <label
                  htmlFor="screenshot-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📁</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">
                      {formData.screenshot ? formData.screenshot.name : 'Upload screenshot'}
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Submit Fund Request</span>
                  <span>✨</span>
                </div>
              )}
            </button>
          </form>
        </div>

        {/* History Section */}
        {history.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <span>📜</span>
                <span>Submission History</span>
                <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">
                  {history.length} entries
                </span>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sender</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Screenshot</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {history.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center space-x-2">
                          <span>💳</span>
                          <span>{item.methodName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.senderAccount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{item.transactionId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        ${parseFloat(item.amount).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.screenshotURL ? (
                          <a
                            href={item.screenshotURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-150"
                          >
                            <span className="mr-1">👁️</span>
                            View
                          </a>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                            N/A
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddFund;