import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send password reset request to API
    console.log('Password reset request sent for: ', email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Remember your password? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default ForgotPassword;