import React, { useState } from 'react'
import './login.css'
import { firebaseAuth } from '../../utils/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import { logo } from '../../utils/constants';


const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(firebaseAuth,email,password);
        } catch (err) {
            console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser)navigate('/');
    })

  return (
    <>
    <Navbar page={"login"}/>
    <div className='log_in flex jcc'>
        <div className="login_wrap flex flexCol gap-14 aic">
            <img className='leet_logo' src={logo} alt="" />
            <form className='flex flexCol gap-5 aic'>
                <input className='login_input' type="email" placeholder='E-mail' value={email} name="email" id="" onChange={(e)=>setEmail(e.target.value)} />
                <input className='login_input' type="password" placeholder='Password' value={password} name="password" id="" onChange={(e)=>setPassword(e.target.value)} />
                <button className='login_btn' onClick={handleLogin}>Sign In</button>
            </form>
            <button className='login_signup' onClick={()=>navigate('/signup')}>Sign Up</button>
            <div className='login_text'>
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.

            </div>
        </div>
    </div>
    </>
  )
}

export default Login