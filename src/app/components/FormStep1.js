import { useState } from 'react';

export default function FormStep1({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    category: '',
    availability: '',
    qualification: '',
    marksheet: null,
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="p-2 border rounded flex-1" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded flex-1" required />
      </div>
      <div className="flex space-x-4">
        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone" className="p-2 border rounded flex-1" required />
        <select name="language" value={formData.language} onChange={handleChange} className="p-2 border rounded flex-1" required>
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <select name="category" value={formData.category} onChange={handleChange} className="p-2 border rounded w-full" required>
        <option value="">Select Category</option>
        <option value="Guardian">Guardian for kids</option>
        <option value="Attendant">Attendant for parents</option>
      </select>
      {formData.category === 'Attendant' && (
        <div>
          <input name="availability" value={formData.availability} onChange={handleChange} className="p-2 border rounded w-full" required placeholder="Availability" />
        </div>
      )}
      <input name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Qualification" className="p-2 border rounded w-full" required />
      <div className="flex space-x-4">
        <input name="marksheet" type="file" onChange={handleChange} className="p-2 border rounded flex-1" />
        <input name="image" type="file" onChange={handleChange} className="p-2 border rounded flex-1" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
    </form>
  );
}
