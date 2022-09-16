import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [credentials,setCredentials] = useState({
        username:undefined,
        password:undefined
    })
    return (
        <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    );
};

export default Login;