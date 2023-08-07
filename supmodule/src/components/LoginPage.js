// src/components/LoginPage.js
import React, { useState } from 'react';
import logo from '../logo.svg'; // Replace with the actual logo file
import './LoginPage.css'; // Add your custom styles here

const LoginPage = () => {
  const [supplierID, setSupplierID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can implement your authentication logic here
    console.log('Supplier ID:', supplierID);
    console.log('Password:', password);
  };

  return (
    <div className="body">
    <div className="login-container">
      
      <div className="login-form">
        <div className="logo-login">
          <img src={logo} alt="FutureLog AG" />
        </div>
        <h2>Supplier Module</h2>
        <div className="form-group">
          <label htmlFor="supplierID">Supplier ID:</label>
          <input
            type="text"
            id="supplierID"
            value={supplierID}
            onChange={(e) => setSupplierID(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
