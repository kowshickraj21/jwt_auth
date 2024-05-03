import React,{ useState } from 'react'
import axios from 'axios';

const ForgotPassword = () => {
    const [email,setEmail] = useState('');
    const [OTP,setOTP] = useState('');
    const [user,setUser] = useState('');
    
    const handleSubmit = () => {
        axios.post('http://localhost:5500/reset',{
            email:email
        }).then(res => setUser(res.data))
        .catch(err => window.alert(err.response.data));
    }

    const checkOTP = () => {
        console.log(OTP);
    }

  return (
    <div className='text-center mt-20'>
    {user?<div>
        <h2 className='mt-5'>Enter the OTP:</h2>
        <input type="email" name='email' id='email' className='border-2 my-5' value={OTP} onChange={e => setOTP(e.target.value)}/>
        <button className='border-2 h-10 w-24 block m-auto my-10' onClick={checkOTP}>Submit</button>
        <input type="text" />
    </div>:<div>
        <h2 className='mt-5'>Enter your Email ID:</h2>
        <input type="email" name='email' id='email' className='border-2 my-5' value={email} onChange={e => setEmail(e.target.value)}/>
        <button className='border-2 h-10 w-24 block m-auto my-10' onClick={handleSubmit}>Submit</button>
    </div>}
    </div>
  )
}

export default ForgotPassword
