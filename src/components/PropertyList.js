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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map(property => (
        <div key={property._id} className="bg-white shadow-md rounded-md p-4 my-10 mx-10 text-center">
          <h2 className="text-lg font-semibold mb-2">{property.place}</h2>
          <p className="text-gray-600 mb-1">{property.area} sq ft</p>
          <p className="text-gray-600 mb-1">{property.bedrooms} Bedrooms</p>
          <p className="text-gray-600 mb-1">{property.bathrooms} Bathrooms</p>
          <p className="text-gray-600 mb-2">Nearby: {property.nearbyFacilities}</p>
          {userType === 'buyer' && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50" onClick={() => alert('Interested!')}>
              I'm Interested
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
