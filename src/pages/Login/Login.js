import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Login.css'

const Login = () => {
    const [credentials,setCredentials] = useState({
        username:undefined,
        password:undefined
    })
    const {loading,error,dispatch} = useContext(AuthContext);
    const handleChange = (e) =>{
        setCredentials((pre)=>({...pre,[e.target.name]:e.target.value}))

    };
    const handleClick = (e) =>{
           e.preventDefault();
           dispatch({type:"LOGIN_START"});
           try{

           }catch(err){
            
           }
    };
    return (
        <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
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