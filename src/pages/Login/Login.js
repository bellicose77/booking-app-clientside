import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Login.css'

const Login = () => {
    const [credentials,setCredentials] = useState({
        username:'',
        password:''
    });
    const navigate = useNavigate()
    const {user,loading,error,dispatch} = useContext(AuthContext);
    const handleChange = (e) =>{
        setCredentials((pre)=>({...pre,[e.target.name]:e.target.value}))

    };
    const handleClick = async (e) =>{
           e.preventDefault();
           dispatch({type:"LOGIN_START"});
           try{
            const res = await axios.post("http://localhost:8000/api/auth/login",credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
           }catch(err){
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
           }
    };
    console.log(user)
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