import React, { useContext,useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Renter_reg.css"
import Heading from '../Heading';
// import Input_box from '../Input_box'
import Input_reg from '../Input_reg';
import Heading_reg from '../Heading_reg';
import { Context } from "../../main";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";


function Renter_reg() {

  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const [fname,setFname]=useState("");
  const [lname,setlname]=useState("");
  const [dlno,setDlno]=useState("");
  const [contactno,setContactno]=useState("");
  const [dob,setDob]=useState(new Date());
const navigate=useNavigate();
  function t()
  {
    console.log("tt",fname,dlno); 
  }

  const handleRenterreg = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/renter_reg/renter_registration/",
        { firstName:fname, lastName:lname,
          dob:dob,
          drivingLicenceNo:dlno,
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
        navigate(`/mainrenter`);
        // navigate("/formsection2");
      }, 2000);

    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error);
    }
  };

  return (
    <div className='container_renter'>
         {/* <Heading  headingarray={headingarray}/> */}
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
              <Input_reg label="Driving License No" onchange={(e)=>setDlno(e.target.value)} pattern="[A-Z]{2}\d{13}" maxlength="15"  placeholder='GJ23 99898989384'/>
          
          <Input_reg label="Contact No" type="tel" onchange={(e)=>setContactno(e.target.value)}  />
          </div>
          <div className="dobinput">
          <Input_reg label="DOB" type="date" onchange={(e)=>setDob(e.target.value)} />
            
          </div>
       
                
            </form>
            <button type="submit" onClick={handleRenterreg} className='submit_regis_renter_btn'>Register</button>
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
export default Renter_reg