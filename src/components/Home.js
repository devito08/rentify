import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/properties');
  };

  return (
    <div className="bg-slate-50">
      <div className="flex my-10">
        <div className="my-10 text-zinc-950">
          <h1 className="font-bold text-6xl mx-32 py-10">
            Find Your<br />Perfect Home<br />with Rentify!
          </h1>
          <div className="font-semibold text-xl mx-32 my-2">
            <p>
              Discover and rent properties from a community <br />of trusted landlords. Get advice and tips from over <br />3,000 real estate experts in top locations worldwide.
            </p>
          </div>
          <div className="mx-32">
            <button
              className="my-6 font-bold bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              onClick={handleButtonClick}
            >
              Explore Now
            </button>
          </div>
        </div>
        <div className="right mx-2">
          <img src="./images/front.jpg" alt="front" className="mx-12 my-24" />
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-white text-lg font-black mx-14">
          Rentify
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <p>123 Rentify Lane</p>
          <p>Mumbai, India</p>
          <p>Phone: +91 12345 67890</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook.png" alt="Facebook" className="h-8" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/twitter.png" alt="Twitter" className="h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/instagram.png" alt="Instagram" className="h-8" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/linkedin.png" alt="LinkedIn" className="h-8" />
          </a>
        </div>
      </div>
    </footer>
    </div>
    
    
  );
};

export default Home;
