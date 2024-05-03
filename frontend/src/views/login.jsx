import React from 'react';
import { useState,useEffect } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
    const [formData,setFormData] = useState();
    const [isVisible,setIsVisible] = useState(false);
    const [warning, setWarning] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const toggle = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible);
    }

    const handleSubmit = async () => {
      axios.post('http://localhost:5500/login',formData)
      .then(res => {
        localStorage.setItem('jwt',res.data.jwt);
          navigate('/');
      }).catch(err => setWarning(err.response.data));
    }
    
  return (
    <div className=''>
      <div className='flex m-auto w-1/2 flex-col gap-5 mt-32 border items-center'>
      <div className='w-2/3'>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" className='border-2 w-2/3 m-auto h-10 ' onChange={(e) => handleChange(e)}/>
      </div>
      <div className='w-2/3 m-auto'>
      <label htmlFor="password">Password:</label>
      <input type={isVisible?"text":"password"} name="password" id="password" className='border-2 w-2/3 m-auto h-10 ' onChange={(e) => handleChange(e)}/>
      <button onClick={(e) => toggle(e)}>{isVisible?<FaEyeSlash />:<FaEye />}</button>
      </div>
      <a href='/forgot-password'>Forgot Password?</a>
      <p>Not registered? <a href='/signup'>Sign Up here</a>.</p>
      <button className='border w-1/2 m-auto h-10' onClick={handleSubmit}>Login</button>
    </div>
    <p>{warning}</p>
    </div>
  )
}

export default Login
