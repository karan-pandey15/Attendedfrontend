import { useState } from 'react';

export default function FormStep2({ onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    address: '',
    panNumber: '',
    aadharNumber: '',
    gender: '',
    religion: '',
    city: '',
    state: '',
    pinCode: '',
    maritalStatus: '',
    wifeName: '',
    wifeAadharNumber: '',
    wifePanNumber: '',
    jobStatus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleMaritalStatusChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      maritalStatus: value,
      wifeName: value === 'Yes' ? formData.wifeName : '',
      wifeAadharNumber: value === 'Yes' ? formData.wifeAadharNumber : '',
      wifePanNumber: value === 'Yes' ? formData.wifePanNumber : ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="p-2 border rounded w-full" required />
      <input name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="PAN Number" className="p-2 border rounded w-full" required />
      <input name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder="Aadhar Number" className="p-2 border rounded w-full" required />
      <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded w-full" required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>
      <input name="religion" value={formData.religion} onChange={handleChange} placeholder="Religion" className="p-2 border rounded w-full" required />
      <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="p-2 border rounded w-full" required />
      <select name="state" value={formData.state} onChange={handleChange} className="p-2 border rounded w-full" required>
        <option value="">Select State</option>
        {/* List all Indian states here */}
        <option value="Maharashtra">Maharashtra</option>
        <option value="Delhi">Delhi</option>
        {/* Add all states */}
      </select>
      <input name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="PIN Code" className="p-2 border rounded w-full" required />
      <select name="maritalStatus" value={formData.maritalStatus} onChange={handleMaritalStatusChange} className="p-2 border rounded w-full" required>
        <option value="">Marital Status</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      {formData.maritalStatus === 'Yes' && (
        <>
          <input name="wifeName" value={formData.wifeName} onChange={handleChange} placeholder="Wife's Name" className="p-2 border rounded w-full" />
          <input name="wifeAadharNumber" value={formData.wifeAadharNumber} onChange={handleChange} placeholder="Wife's Aadhar Number" className="p-2 border rounded w-full" />
          <input name="wifePanNumber" value={formData.wifePanNumber} onChange={handleChange} placeholder="Wife's PAN Number" className="p-2 border rounded w-full" />
        </>
      )}
      <select name="jobStatus" value={formData.jobStatus} onChange={handleChange} className="p-2 border rounded w-full" required>
        <option value="">Select Job Status</option>
        <option value="Salaried">Salaried</option>
        <option value="Self-employed">Self-employed</option>
        <option value="Student">Student</option>
      </select>
      <button type="button" onClick={onPrevious} className="bg-gray-500 text-white p-2 rounded">Previous</button>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
    </form>
  );
}
