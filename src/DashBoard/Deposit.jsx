import React, { useState } from 'react';

const Deposit = () => {
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
    <div className="w-full lg:w-fit mx-auto mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 text-white shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Deposit Funds</h2>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Current Balance</p>
          <h3 className="text-lg font-bold">{currentBalance} ৳</h3>
        </div>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Last Deposit</p>
          <h3 className="text-lg font-bold">{lastDeposit} ৳</h3>
        </div>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Total Deposited</p>
          <h3 className="text-lg font-bold">{totalDeposited} ৳</h3>
        </div>
      </div>

      {/* Deposit Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 backdrop-blur rounded-lg p-6">
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
        

                <select
            name="method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full rounded-md px-3 py-2  hover:text-slate-900 border border-white/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
            required
          >
            <option className=" text-slate-950" value="">Select a method</option>
            <option className=" text-slate-950" value="bkash">bKash</option>
            <option className=" text-slate-950" value="nagad">Nagad</option>
            <option className=" text-slate-950" value="rocket">Rocket</option>
            <option className=" text-slate-950" value="bank">Bank Transfer</option>
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
            className="w-full border border-amber-50 rounded-md px-3 py-2 text-white"
            min="1"
          />
        </div>

        {/* Transaction ID */}
        <div>
          <label className="block text-sm font-medium  mb-1">Transaction ID</label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="e.g. TX123456789"
            className="w-full rounded-md px-3 py-2 text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-blue-700 font-semibold py-2 rounded-md hover:bg-gray-100 transition"
        >
          Submit Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;