// src/components/PropertyList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = ({ userType }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/properties');
        setProperties(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      {properties.map(property => (
        <div key={property._id}>
          <h2>{property.place}</h2>
          <p>{property.area} sq ft</p>
          <p>{property.bedrooms} Bedrooms</p>
          <p>{property.bathrooms} Bathrooms</p>
          <p>Nearby: {property.nearbyFacilities}</p>
          {userType === 'buyer' && <button onClick={() => alert('Interested!')}>I'm Interested</button>}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
