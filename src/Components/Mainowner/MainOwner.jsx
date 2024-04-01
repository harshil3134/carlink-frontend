import React from 'react'
import './MainOwner.css'
import Heading from "../Heading";
import SearchOwner from './SearchOwner';
import Enquiry from './Enquiry';
import Offers from "../Main_Renter/Offers";
import Question from "../Main_Renter/Question";
import Review from "../Main_Renter/Review";
import Cities from '../Main_Renter/Cities';
import Popup from '../Main_Renter/Popup';
import { useState } from 'react';
import { CircleUserRound } from 'lucide-react';
import UpdateProfile from '../Updateprofile/UpdateProfile';
function MainOwner() {
  const [showpopup,setShowpopup]=useState(false);
  const headingarray=[
    {
       name:'CarLink'
    },
    {
      
     profile: <>
     <p onClick={()=>setShowpopup(true)}><CircleUserRound size={40}/></p>
     {showpopup &&  <Popup onClose={()=>setShowpopup(false)}/> }
     </> 
     
    
    },
  
    
    {
      contact:"Contact Us"
    },
    {
      read:"Read More"
    },
    {
      about:"Contact Us"
    },
    {
      Book:"How to Book"
    }
  
  ];
  return (
    <div className='container_mainowner'>
        <Heading headingarray={headingarray}/>
        <SearchOwner/>
        <Enquiry/>
        <Offers/>
        <Question/>
        <Review/>
        <Cities/>
    </div>
  )
}

export default MainOwner
