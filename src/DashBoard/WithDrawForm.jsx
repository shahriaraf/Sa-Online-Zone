import React, { useState } from 'react';
import { FaWallet, FaArrowUp, FaMoneyCheckAlt } from 'react-icons/fa';

const WithDrawForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [availableBalance, setAvailableBalance] = useState(3000);
  const [lastWithdraw, setLastWithdraw] = useState(0);
  const [totalWithdrawn, setTotalWithdrawn] = useState(2500);

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = parseFloat(withdrawAmount);
    if (!withdrawAmount || isNaN(amount) || amount <= 0 || !accountNumber) {
      alert('Please fill all fields correctly.');
      return;
    }

    if (amount > availableBalance) {
      alert('Insufficient balance.');
      return;
    }

    setAvailableBalance(prev => prev - amount);
    setLastWithdraw(amount);
    setTotalWithdrawn(prev => prev + amount);

    alert(`Successfully withdrawn ${amount}৳ via ${paymentMethod}.`);

    setWithdrawAmount('');
    setAccountNumber('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-white text-gray-800 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-10">💸 Withdraw Funds</h2>

      {/* Summary Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-5 rounded-xl flex flex-col items-center shadow-lg">
          <FaWallet className="text-3xl mb-2" />
          <p className="text-sm">Available Balance</p>
          <h3 className="text-xl font-bold">{availableBalance} ৳</h3>
        </div>
        <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white p-5 rounded-xl flex flex-col items-center shadow-lg">
          <FaArrowUp className="text-3xl mb-2" />
          <p className="text-sm">Last Withdraw</p>
          <h3 className="text-xl font-bold">{lastWithdraw} ৳</h3>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-emerald-400 text-white p-5 rounded-xl flex flex-col items-center shadow-lg">
          <FaMoneyCheckAlt className="text-3xl mb-2" />
          <p className="text-sm">Total Withdrawn</p>
          <h3 className="text-xl font-bold">{totalWithdrawn} ৳</h3>
        </div>
      </div>

      {/* Withdraw Form */}
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

        {/* Withdraw Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Withdraw Amount</label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="e.g. 500"
            className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="1"
            max={availableBalance}
          />
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-sm font-medium mb-1">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="e.g. 01XXXXXXXXX"
            className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-700 to-sky-500 hover:opacity-90 text-white font-bold transition duration-300"
        >
          Submit Withdrawal
        </button>
      </form>
    </div>
  );
};

export default WithDrawForm;
