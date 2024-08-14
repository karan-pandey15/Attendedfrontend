import { useState } from 'react';

export default function FormStep3({ onSubmit, onPrevious }) {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    branch: '',
    ifscCode: '',
    paymentReceiver: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Name in Bank" className="p-2 border rounded w-full" required />
      <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="p-2 border rounded w-full" required />
      <input name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch" className="p-2 border rounded w-full" required />
      <input name="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder="IFSC Code" className="p-2 border rounded w-full" required />
      <select name="paymentReceiver" value={formData.paymentReceiver} onChange={handleChange} className="p-2 border rounded w-full" required>
        <option value="">Select Payment Receiver</option>
        <option value="mySelf">Myself</option>
        <option value="relation">Relation</option>
      </select>
      <button type="button" onClick={onPrevious} className="bg-gray-500 text-white p-2 rounded">Previous</button>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
    </form>
  );
}
