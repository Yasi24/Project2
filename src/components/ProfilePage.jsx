import React, { useState } from "react";
import './ProfilePage.css'
const ProfilePage = () => {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  const handleDeleteAccount = () => {
    // Your code to delete the user's account goes here
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <label>Full Name: </label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default ProfilePage;
