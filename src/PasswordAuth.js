import React, { useState, useEffect } from 'react';

const PasswordAuth = ({ password, onAuthSuccess, children }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authTimestamp = localStorage.getItem('authTimestamp');
    const currentTime = Date.now();

    if (authTimestamp && currentTime - authTimestamp < 30 * 60 * 1000) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      localStorage.setItem('authTimestamp', Date.now());
      onAuthSuccess();
    } else {
      alert('Incorrect password.');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    width: '200px',
    marginLeft:'20px',
    marginRight:'20px'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.5',
    borderRadius: '4px',
    border: '1px solid #007bff',
    cursor: 'pointer',
  };

  return (
    <div style={formStyle}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Enter password  </label>
        <input
          type="password"
          id="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordAuth;
