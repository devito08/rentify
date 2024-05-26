import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate('/'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
