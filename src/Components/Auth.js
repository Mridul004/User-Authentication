import React, { useState } from 'react';
// import axios from 'axios';

// import React, { useState } from "react";
<link rel="stylesheet" href="style.css" />
const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();


  };

  return (
    <div>
      <h1 className='heading'>Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Auth;
