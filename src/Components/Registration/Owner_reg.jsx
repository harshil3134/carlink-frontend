import React, { useContext,useState } from "react";
import "./Owner_reg.css"
import Heading from '../Heading';
import Input_reg from '../Input_reg';
import Heading_reg from '../Heading_reg';
import { Context } from "../../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
function Owner_reg() {

  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const [fname,setFname]=useState("");
  const [lname,setlname]=useState("");
  const [aadharno,setAadharno]=useState("");
  const [contactno,setContactno]=useState("");
  const [dob,setDob]=useState(new Date());
const navigate=useNavigate();

const handleOwnerreg = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/owner_reg/owner_registration",
      { firstName:fname, lastName:lname,
        dob:dob,
        aadharCardNo:aadharno,
         contactNumber:contactno},
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
    setTimeout(() => {
      navigate(`/mainowner`);
      // navigate("/formsection2");
    }, 2000);

  } catch (error) {
    toast.error(error.response.data.message);
    // console.log(error);
  }
};


  return (
    <div className='container_owner'>
         {/* <Heading headingarray={headingarray}/> */}
         <Heading_reg/>
         <Toaster/>
         <div>
          <div className='registration_info'>
            <h1 className='reg_text'>Registration</h1>
            <form >
              <div className='reg_input'>
              <Input_reg  className="fname_reg" label="First Name" onchange={(e)=>setFname(e.target.value)}/>
            <Input_reg label="Last Name" onchange={(e)=>setlname(e.target.value)}/>
            
              </div>
              <div  className='reg_basic'>
              <Input_reg label="Aadharcard No"   onchange={(e)=>setAadharno(e.target.value)} maxlength="12"  placeholder='123678321567'/>
          
          <Input_reg label="Contact No" type="tel" onchange={(e)=>setContactno(e.target.value)} pattern="[0-9]{10} " maxlength="10" />
          </div>
          <div className="dobinput">
          <Input_reg label="DOB" type="date" onchange={(e)=>setDob(e.target.value)}/>
            
          </div>
       
                
            </form>
            <button type="submit" onClick={handleOwnerreg} className='submit_regis_renter_btn'>Next</button>
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
export default Owner_reg