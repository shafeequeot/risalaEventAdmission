'use client'
import { useState } from "react";

function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        whatsapp: '',
        company: '',
        designation: '',
        emirates: ''
      });
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        fetch('/api/createqr', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
         })
        // Add your form submission logic here
      };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-md shadow-md w-96">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Form</h2>
              <div className="mb-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
              </div>
              <div className="mb-4">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
              </div>
              <div className="mb-4">
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
              </div>
              <div className="mb-4">
                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
              </div>
              <div className="mb-4">
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
              </div>
              <div className="mb-4">
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
              </div>
              <div className="mb-6">
                <input type="text" name="emirates" value={formData.emirates} onChange={handleChange} placeholder="Emirates" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline">Submit</button>
            </form>
  )
}

export default Form