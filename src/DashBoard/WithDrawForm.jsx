import React, { useState } from 'react';

const  WithDrawForm = () => {
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
    <div className="w-full  lg:w-fit md:m-10 lg:mx-auto mx-auto mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 text-white shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Withdraw Funds</h2>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Available Balance</p>
          <h3 className="text-lg font-bold">{availableBalance} ৳</h3>
        </div>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Last Withdraw</p>
          <h3 className="text-lg font-bold">{lastWithdraw} ৳</h3>
        </div>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Total Withdrawn</p>
          <h3 className="text-lg font-bold">{totalWithdrawn} ৳</h3>
        </div>
      </div>

      {/* Withdraw Form */}
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

        {/* Withdraw Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Withdraw Amount</label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="e.g. 500"
            className="w-full rounded-md px-3 py-2 text-white"
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
            className="w-full rounded-md px-3 py-2 text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-red-700 font-semibold py-2 rounded-md hover:bg-gray-100 transition"
        >
          Submit Withdrawal 
        </button>
      </form>
    </div>
  );
};

export default  WithDrawForm;