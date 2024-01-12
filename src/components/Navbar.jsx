import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
import { MdAccountCircle } from "react-icons/md";
import { MdLogout } from "react-icons/md";



const Navbar = ({page}) => {
  const navigate=useNavigate();
  const [user,setUser]=useState(false);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(true);
    else setUser(false);
  });

  return (
    <Stack direction="row" alignItems='center' p={2} zIndex={999} sx={{position:'sticky', top:0, background:'#000', justifyContent:'space-between'}}>
        <Link style={{display:'flex', alignItems:'center'}}>
            <img src={logo} alt="logo" height={45} />
        </Link>
        {page==="home" && <SearchBar/>}
        <div className="right">
            {page==="signup" && (user ? <button onClick={()=>signOut(firebaseAuth)}><MdLogout style={{padding:"5px", fontSize:"20px", cursor:"pointer", borderRadius:"50%", color:"red", backgroundColor:"black"}}/></button>
            : <button className="login" style={{padding:"10px", fontSize:"15px", marginLeft:"20px", cursor:"pointer", color:"white",border:"none",borderRadius:"10px", backgroundColor:"red"}} onClick={()=>navigate('/login')}>Log In</button>) }

            {page==="home" && (user ? <button onClick={()=>signOut(firebaseAuth)}><MdLogout style={{padding:"5px", fontSize:"20px", cursor:"pointer", borderRadius:"50%", color:"red", backgroundColor:"black"}}/></button>
            : <button className="login" style={{padding:"10px", fontSize:"15px", marginLeft:"20px", cursor:"pointer", color:"white",border:"none",borderRadius:"10px", backgroundColor:"red"}} onClick={()=>navigate('/login')}>Log In</button>) }

            {page==="home" && (user ? <button className="signup"><MdAccountCircle style={{padding:"5px", fontSize:"20px", cursor:"pointer", borderRadius:"50%", color:"red", backgroundColor:"black"}}/></button> :
            <button className="signup" style={{padding:"10px", fontSize:"15px", marginLeft:"20px", cursor:"pointer", color:"white",border:"none",borderRadius:"10px", backgroundColor:"red"}} onClick={()=>navigate('/signup')}>Sign Up</button>)
            }
            {page==="login" && (user ? <button className="signup"><MdAccountCircle style={{padding:"5px", fontSize:"20px", cursor:"pointer", borderRadius:"50%", color:"red", backgroundColor:"black"}}/></button> :
            <button className="signup" style={{padding:"10px", fontSize:"15px", marginLeft:"20px", cursor:"pointer", color:"white",border:"none",borderRadius:"10px", backgroundColor:"red"}} onClick={()=>navigate('/signup')}>Sign Up</button>)
            }
          </div>
    </Stack>
  )
}

export default Navbar