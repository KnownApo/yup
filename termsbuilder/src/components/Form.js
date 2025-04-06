import { useState } from 'react';

export default function Form({ onGenerate }) {
  const [formData, setFormData] = useState({
    businessName: '',
    dataCollected: '',
    usesCookies: 'no',
    country: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4 bg-white rounded shadow">
      <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required className="input" />
      <input type="text" name="dataCollected" placeholder="Data Collected (comma separated)" onChange={handleChange} required className="input" />
      <select name="usesCookies" onChange={handleChange} className="input">
        <option value="yes">Uses Cookies</option>
        <option value="no">Does Not Use Cookies</option>
      </select>
      <input type="text" name="country" placeholder="Country" onChange={handleChange} required className="input" />
      <button type="submit" className="btn">Generate Legal Docs</button>
    </form>
  );
}
