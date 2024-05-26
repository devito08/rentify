// src/components/PropertyForm.js
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
    <form onSubmit={handleSubmit}>
      <input name="place" value={formData.place} onChange={handleChange} placeholder="Place" required />
      <input name="area" value={formData.area} onChange={handleChange} placeholder="Area" required />
      <input name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
      <input name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
      <input name="nearbyFacilities" value={formData.nearbyFacilities} onChange={handleChange} placeholder="Nearby Facilities" required />
      <button type="submit">Post Property</button>
    </form>
  );
};

export default PropertyForm;
