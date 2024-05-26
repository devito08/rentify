import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import PropertyForm from './components/PropertyForm';
import PropertyList from './components/PropertyList';
import Home from './components/Home'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
   
   <Navbar/>
      <Routes>
      
        <Route path="/register" element={<RegistrationForm />} />
        

        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/post-property" element={<PropertyForm />} />
        <Route path="/properties" element={<PropertyList userType="buyer" />} />
        <Route path="/my-properties" element={<PropertyList userType="seller" />} />
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
