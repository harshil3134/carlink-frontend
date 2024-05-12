import './Popup.css'
import { X } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { LogOut } from 'lucide-react';
import React, { useRef,useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


import UpdateProfile from '../Updateprofile/UpdateProfile';
function Popup({onClose}) {
const Popref=useRef(null);
const closeModal = (e) =>{
  if(Popref.current === e.target){
    onClose();
  }
}
const { isAuthorized, setIsAuthorized, user } = useContext(Context);
const navigateTo = useNavigate();
const handleLogout = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/user/logout",
      {
        withCredentials: true,
      }
    );
    toast.success(response.data.message);
    setIsAuthorized(false);
    navigateTo("/");
  } catch (error) {
    toast.error(error.response.data.message), setIsAuthorized(true);
  }
};



  return (
    <div ref={Popref} onClick={closeModal} className='containerpopup' >
      <Toaster/>
      <p className='closebtn' onClick={onClose}><X color='black'/></p>
      <p className='profilepopup'><CircleUserRound color='black' size={70}/></p>
      <h1 className='usertextpopup'>Hi {user.userName}</h1>
      <div className='container_btn'>
        <div>
           
          <Link to="/UpdateProfile"> <p className='updatepopup'><UserRoundPlus className='updateicon' size={20} color='black'/><p className='spantxt'>Edit Profile</p></p></Link>
        </div>
        <div>
          <button onClick={handleLogout} className='signoutbtn'>
           <p className='signoutpopup'><LogOut size={20} className='signouticon' color='black'/><p className='spantxtsignout'>Sign out</p></p>
           </button>
        </div>
      </div>
    </div>
     
  );
}

export default Popup;
