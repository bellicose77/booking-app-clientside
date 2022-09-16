import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Login.css'

const Login = () => {
    const [credentials,setCredentials] = useState({
        username:undefined,
        password:undefined
    })
    const {} = useContext(AuthContext)
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