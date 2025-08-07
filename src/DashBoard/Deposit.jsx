import React, { useState } from 'react';
import { FaWallet, FaArrowDown, FaMoneyBillWave } from 'react-icons/fa';

const DepositSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [currentBalance, setCurrentBalance] = useState(2000);
  const [lastDeposit, setLastDeposit] = useState(0);
  const [totalDeposited, setTotalDeposited] = useState(5000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(amount);

    if (!amount || isNaN(depositAmount) || depositAmount <= 0 || !transactionId) {
      alert('Please enter all fields correctly.');
      return;
    }

    setCurrentBalance(prev => prev + depositAmount);
    setLastDeposit(depositAmount);
    setTotalDeposited(prev => prev + depositAmount);

    alert(`Successfully deposited ${depositAmount}৳ via ${paymentMethod}!`);

    setAmount('');
    setTransactionId('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-white text-gray-800 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-10">💳 Deposit Funds</h2>

      {/* Summary Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-5 rounded-xl flex flex-col items-center shadow-lg">
          <FaWallet className="text-3xl mb-2" />
          <p className="text-sm">Current Balance</p>
          <h3 className="text-xl font-bold">{currentBalance} ৳</h3>
        </div>
        <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white p-5 rounded-xl flex flex-col items-center shadow-lg">
          <FaArrowDown className="text-3xl mb-2" />
          <p className="text-sm">Last Deposit</p>
          <h3 className="text-xl font-bold">{lastDeposit} ৳</h3>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-emerald-400 text-white p-5 rounded-xl flex flex-col items-center shadow-lg">
          <FaMoneyBillWave className="text-3xl mb-2" />
          <p className="text-sm">Total Deposited</p>
          <h3 className="text-xl font-bold">{totalDeposited} ৳</h3>
        </div>
      </div>

      {/* Deposit Form */}
      <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-xl border border-gray-200 bg-gray-50">
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>Select a method</option>
            <option value="bkash">bKash</option>
            <option value="nagad">Nagad</option>
            <option value="rocket">Rocket</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Deposit Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 1000"
            className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="1"
          />
        </div>

        {/* Transaction ID */}
        <div>
          <label className="block text-sm font-medium mb-1">Transaction ID</label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="e.g. TX123456789"
            className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-700 to-sky-500 hover:opacity-90 text-white font-bold transition duration-300"
        >
          Submit Deposit
        </button>
      </form>
    </div>
  );
};

export default DepositSection;
