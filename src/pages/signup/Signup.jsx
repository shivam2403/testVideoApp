import React, { useState } from 'react'
import './signup.css'
import { firebaseAuth } from '../../utils/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import { logo } from '../../utils/constants';

const Signup = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSignUp=async(e)=>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(firebaseAuth,email,password);
        } catch (err) {
            console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser)navigate('/');
    })

  return (
    <>
    <Navbar page={"signup"}/>
    <div className='log_in flex jcc'>
        <div className="login_wrap flex flexCol gap-14 aic">
            <img className='leet_logo' src={logo} alt="" />
            <form className='form flex flexCol gap-5 aic'>
                <input className='login_input' type="email" placeholder='E-mail' value={email} name="email" id="" onChange={(e)=>setEmail(e.target.value)} />
                <input className='login_input' type="password" placeholder='Password' value={password} name="password" id="" onChange={(e)=>setPassword(e.target.value)} />
                <button className='login_btn' onClick={handleSignUp}>Sign Up</button>
            </form>
            <button className='login_signup' onClick={()=>navigate('/login')}>Log In</button>
            <div className='login_text'>
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.

            </div>
        </div>
    </div>
    </>
  )
}

export default Signup