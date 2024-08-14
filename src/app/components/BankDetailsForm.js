import React, { useState } from 'react';
import TopNavbar from './topnavbar/page';

const BankDetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    branch: '',
    accountType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <TopNavbar />
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Bank Name"
                className="border p-2 w-full"
                value={formData.bankName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                id="accountNumber"
                placeholder="Account Number"
                className="border p-2 w-full"
                value={formData.accountNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">IFSC Code</label>
              <input
                type="text"
                name="ifscCode"
                id="ifscCode"
                placeholder="IFSC Code"
                className="border p-2 w-full"
                value={formData.ifscCode}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
              <input
                type="text"
                name="branch"
                id="branch"
                placeholder="Branch"
                className="border p-2 w-full"
                value={formData.branch}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Account Type</label>
              <select
                name="accountType"
                id="accountType"
                className="border p-2 w-full"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="">Select Account Type</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
                <option value="Fixed Deposit">Fixed Deposit</option>
              </select>
            </div>
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default BankDetailsForm;
