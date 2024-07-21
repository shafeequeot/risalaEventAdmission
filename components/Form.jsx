'use client'
import { useRouter } from "next/navigation";
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
  const [loadng, setLoading] = useState(false)


  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const router = useRouter()

  const emiratesList = [
    { name: "Select Your Emirate", image: "path/to/abu-dhabi-image.jpg" },
    { name: "Abu Dhabi", image: "path/to/abu-dhabi-image.jpg" },
    { name: "Dubai", image: "path/to/dubai-image.jpg" },
    { name: "Sharjah", image: "path/to/sharjah-image.jpg" },
    { name: "Ajman", image: "path/to/ajman-image.jpg" },
    { name: "Umm Al Quwain", image: "path/to/umm-al-quwain-image.jpg" },
    { name: "Ras Al Khaimah", image: "path/to/ras-al-khaimah-image.jpg" },
    { name: "Fujairah", image: "path/to/fujairah-image.jpg" },
  ];


  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true)
    const result = await fetch('/api/createqr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const user = await result.json()

    router.push(`/viewticket?id=${user?.id}&name=${formData?.name}`)
    setLoading(false)

    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-2 md:p-8 rounded-md shadow-md w-full md:w-96">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h2>
      <div className="mb-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full px-3 py-2 rounded-md bg-white   focus:outline-none  focus:bg-blue-100" />
      </div>
      <div className="mb-4">
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-3 py-2 rounded-md bg-white   focus:outline-none  focus:bg-blue-100" />
      </div>
      <div className="mb-4">
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" className="w-full px-3 py-2 rounded-md bg-white   focus:outline-none  focus:bg-blue-100" />
      </div>
      <div className="mb-4">
        <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp" className="w-full px-3 py-2 rounded-md bg-white   focus:outline-none  focus:bg-blue-100" />
      </div>
      <div className="mb-4">
        <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="age" className="w-full px-3 py-2 rounded-md bg-white   focus:outline-none  focus:bg-blue-100" />
      </div>
      <div className="mb-4 flex gap-4 text-sm">
        Visa Status
        <label>Visit Visa

          <input type="radio" name="visa" value={formData.visa} checked={formData.visa == 'visit'} onChange={()=>handleChange({target: {value: 'visit', name: 'visa'}})} className=" bg-white   focus:outline-none  focus:bg-blue-100" />
        </label>
        <label>
          Employment Visa
          <input type="radio" name="visa" value={formData.visa} checked={formData.visa == 'employment'} onChange={()=>handleChange({target: {value: 'employment', name: 'visa'}})} className=" bg-white   focus:outline-none  focus:bg-blue-100" />
        </label>
      </div>
      <div className="mb-4 flex gap-4 text-sm">
        Current Job Status
        <label>Working

          <input type="radio" name="job" value={formData.job} checked={formData.job == 'working'} onChange={()=>handleChange({target: {value: 'working', name: 'job'}})} className=" bg-white   focus:outline-none  focus:bg-blue-100" />
        </label>
        <label>
          Emp. Visa
          <input type="radio" name="job" value={formData.job} checked={formData.job == 'unemployed'} onChange={()=>handleChange({target: {value: 'unemployed', name: 'job'}})} className=" bg-white   focus:outline-none  focus:bg-blue-100" />
        </label>job
      </div>
    
      <div className="mb-4">
        <input type="text" name="qualification " value={formData.qualification} onChange={handleChange} placeholder="Qualification " className="w-full px-3 py-2 rounded-md bg-white   focus:outline-none  focus:bg-blue-100" />
      </div>
      <div className="mb-6">
        <select type="text" name="emirates" value={formData.emirates} onChange={handleChange} placeholder="Emirates"
          className="w-full px-3 py-2 rounded-md bg-white   focus:outline-none  focus:bg-blue-100" >
          {
            emiratesList.map(em =>
              <option value={em.name}>{em.name}</option>
            )
          }
        </select>
      </div>
      <button disabled={loadng} type="submit" className="w-full disabled:bg-gray-300 bg-blue-500 hover:bg-blue-600 text-white  font-bold py-2 rounded-md focus:outline-none focus:shadow-outline">
        {loadng ? "loading.." : "Submit"}
      </button>

      If you need to review your CV, send to Email- <a href="mailto:dubaisouthwisdom@gmail.com">dubaisouthwisdom@gmail.com</a>
    </form>

  )
}

export default Form