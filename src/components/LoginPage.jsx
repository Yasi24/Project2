import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Log In</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="example@gmail.com" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="********" />
        <Link to="/HomePage"><button type="submit">Log In</button> </Link>
        <Link to="/Signup"><button type="submit"  >Sign up</button> </Link>   
      </form>
    </div>
  );
}

export default LoginPage;