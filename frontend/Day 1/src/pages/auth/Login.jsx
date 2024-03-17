import React, { useState } from 'react';
import '../../assets/css/Login.css';
import { FaUserGraduate } from "react-icons/fa6";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);


    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-form">
    <div className="user-icon">
    <AssignmentIndIcon style={{ fontSize: '48px' }} />
  </div>
      <h1>Login To Existing Account</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Id:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
