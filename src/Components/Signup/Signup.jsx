import React, { useContext, useState } from "react";
import { Context } from "../../main";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import "./Signup.css"
import Heading from '../Heading'
import Input_box from '../Input_box';
import Heading_reg from '../Heading_reg';
import { Link, Navigate } from "react-router-dom";
function Signup() {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted,setSubmitted]=useState(false);


  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        { userName, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setUserName("");
      setEmail("");
      setPassword("");
      setIsAuthorized(true);
      setSubmitted(true);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
     
    }
  };

  if(isAuthorized && submitted){
    return <Navigate to={'/Role'}/>
  }



  return (
    <div className='container_signup'>
        {/* <Heading headingarray={headingarray}/> */}
        <Heading_reg/>
        <Toaster/>
        <div className='container_form'>
        <div className='container_info'>
            <h1>Signup </h1>
            <form>
            <div className='input_email_pass_signup'>
            <Input_box label="Name" onChange={(e)=>setUserName(e.target.value)}/>
            <Input_box label="Email id" type="email" onChange={(e)=>setEmail(e.target.value)} />
        <Input_box label="password" type="password" onChange={(e)=>setPassword(e.target.value)}  />
      
        </div>
        
         <button className='submit_login_btn' onClick={handleRegister} type='submit'>
          {/* <Link to="/Role" className='linktorole'> </Link> */}
          Signup
          </button>
            </form>

        </div>
       </div>
    </div>
  )
}
const headingarray=[
    {
       name:'CarLink'
    },
    {
      Profile:" "
  
    },
    {
      contact:"Contact Us"
    },
    {
      read:"Read More"
    },
    {
      about:"About us"
    },
    {
      Book:"How to Book"
    }
  
  ];
export default Signup