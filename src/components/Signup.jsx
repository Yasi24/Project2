import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create an Account</h2>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" placeholder="John Doe" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="example@gmail.com" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="********" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="********" />
        <Link to="/LoginPage"><button type="submit">Sign Up</button></Link>
        <div className="login-link">
          Already have an account? <Link to="/LoginPage">Login here</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;