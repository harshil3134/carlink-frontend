import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import './Role.css'
import Heading_reg from '../Heading_reg'
import { Link, Navigate,useNavigate } from "react-router-dom";



function Role() {

  const [role,setRole]=useState("");
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
   
    try {
      console.log("handle invoked");
      const { data } = await axios.put(
        "http://localhost:8000/api/v1/user/selectrole",
        {role},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
        
      
      toast.success(data.message);
      setTimeout(() => {
        role==="OWNER"?navigate("/owner_reg"):navigate("/renter_reg") 
      }, 2000);

    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
     toast.error(data);
    }
  };

  if(!isAuthorized){
    return <Navigate to={'/'}/>
  }

  //call put when role is changed
 useEffect(() => {
 if (role !== "") {
      handleRegister();
    }
    // if(role==="OWNER"){
    //   // return <Navigate to={'/mainowner'}/>
    //    navigate("/MainOwner"); 
    //  }
 
  }, [role]); 

  async function ohandler(value){
 let newrole="";
    if(value==="owner")
    {
    
      newrole="OWNER"
      toast.success(`role set to ${newrole}`);
    }
    else if(value==="renter"){
      newrole="RENTER"
      toast.success(`role set to ${newrole}`);
    }
    else{
    console.log("evv");
    }
    setRole(newrole);

      }

const next=()=>{
  const navigate = useNavigate();
  if(role && role==="OWNER"){
    // return <Navigate to={'/mainowner'}/>
    navigate("/MainOwner")
   }
}


  return (


    <div className='container_role_main'>
      <Toaster/>
        <Heading_reg/>
        <div className='role_main'>
       
        
            <div className='owner_role'>

            </div>
            
            <div className='renter_role'>

            </div>
            
            
        </div>
<p onClick={()=>ohandler("owner")} className='owner_role_btn'>Owner</p>
<p onClick={()=>ohandler("renter")} className='renter_role_btn'>Renter</p>

    </div>
  )
}

export default Role