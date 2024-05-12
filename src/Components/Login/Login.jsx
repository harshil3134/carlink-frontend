import "./Login.css"
import Heading from '../Heading'
import Input_box from '../Input_box'
import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useContext,useState } from "react";
import Heading_reg from '../Heading_reg'
import { Context } from "../../main";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate=useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const [role,setRole]=useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        { email, password},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      // setEmail("");
      // setPassword("");
      setIsAuthorized(true);
      const r=data.role;
      setRole(r);
      console.log(r);
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error);
    }
  };

  if(isAuthorized){
    navigate(`/mainowner`);
    if(role==="OWNER")
    {
      setTimeout(() => {
        navigate(`/mainowner`);
        // return <Navigate to={'/MainOwner'}/>
      
      }, 2000);
    
    }
    else if(role==="RENTER")
    {
      setTimeout(() => {
        navigate(`/mainrenter`);
        // return <Navigate to={'/MainRenter'}/>
       
      }, 2000);
      
    }
  }



  return (

    <div className='container_login'>
       <Toaster/>
       {/* <Heading headingarray={headingarray}/> */}
       <Heading_reg></Heading_reg>

       <div className='container_form'>
        <div className='container_info'>
            <h1>Login </h1>
            <form>
            <div className='input_email_pass_login'>
            <Input_box label="Email id" onChange={(e)=>setEmail(e.target.value)} type="email" />
           <Input_box label="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className='signup_forgot'>
          <p className='signup_login'>Sign up</p>
          <p className='forgotpass_login'> Forgot Password</p>
        </div>
          <button className='submit_login_btn' onClick={handleLogin} type='submit'>Login</button>
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
export default Login