import React, { useState } from 'react';
import axios from 'axios';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearbyFacilities: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/properties', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <input 
        name="place" 
        value={formData.place} 
        onChange={handleChange} 
        placeholder="Place" 
        required 
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4 px-4 py-2"
      />
      <input 
        name="area" 
        value={formData.area} 
        onChange={handleChange} 
        placeholder="Area" 
        required 
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4 px-4 py-2"
      />
      <input 
        name="bedrooms" 
        value={formData.bedrooms} 
        onChange={handleChange} 
        placeholder="Bedrooms" 
        required 
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4 px-4 py-2"
      />
      <input 
        name="bathrooms" 
        value={formData.bathrooms} 
        onChange={handleChange} 
        placeholder="Bathrooms" 
        required 
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4 px-4 py-2"
      />
      <input 
        name="nearbyFacilities" 
        value={formData.nearbyFacilities} 
        onChange={handleChange} 
        placeholder="Nearby Facilities" 
        required 
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4 px-4 py-2"
      />
      <button 
        type="submit" 
        className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Post Property
        
      </button>
      
    </form>
  );
};

export default PropertyForm;
