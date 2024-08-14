import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    category: '',
    account: '',
    panNumber: '',
    aadharNumber: ''
  });

  const [showExtraInput, setShowExtraInput] = useState(false);
  const [extraInput, setExtraInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending data to the database
    alert('Data sent to the database.');

    // Show the extra input field after submission
    setShowExtraInput(true);
  };

  const handleExtraInputChange = (e) => {
    setExtraInput(e.target.value);
  };

  const handleExtraInputSubmit = () => {
    // Navigate to another page if the extra input is filled
    if (extraInput) {
      router.push('/another-page');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">User Information Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="account" className="block text-gray-700">Account Details:</label>
            <input
              type="text"
              id="account"
              name="account"
              value={formData.account}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="panNumber" className="block text-gray-700">PAN Number:</label>
            <input
              type="text"
              id="panNumber"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="aadharNumber" className="block text-gray-700">Aadhar Number:</label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              pattern="[0-9]{12}"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>

        {showExtraInput && (
          <div className="mt-6">
            <label htmlFor="extraInput" className="block text-gray-700">Enter Extra Number:</label>
            <input
              type="number"
              id="extraInput"
              value={extraInput}
              onChange={handleExtraInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              onClick={handleExtraInputSubmit}
              className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit Extra Input
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
