import Heading from '../Heading'
import './Car_choose.css'
import Filter from './Filter'
import Filtercarselect from './Filtercarselect'
import Popup from '../Main_Renter/Popup'
import { User } from 'lucide-react'
import { CircleUserRound } from 'lucide-react';
import {useParams, Link, Navigate,useNavigate} from "react-router-dom";
import { Context } from "../../main";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

import { useLocation } from 'react-router-dom'
function Car_choose() {
  const [showpopup,setShowpopup]=useState(false);
  const [vehicledata,setVehicleData]=useState([]);
  const [ncity,setnCity]=useState("");
  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const extradata= location.state;
  //fetching city from previous page

  const handlefetchcar = async (e) => {

    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/renter_reg/getallvehicles",
      
        {
          params: {
            city: extradata.city,
            startdate:extradata.sd,
            enddate:extradata.ed
        
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
     
      console.log("dataa",data.avialablevehicle);
      console.log("hey");
      setVehicleData(data.avialablevehicle);
      // setTimeout(() => {
      //   navigate(`/FormSection2/${data.vehicleid}`);
       
      // }, 2000);
     //setFlag(1);
     setTimeout(() => {
 
      // return <Navigate to={'/MainOwner'}/>
      console.log("to",vehicledata);
    }, 2000);
    
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(()=>{

  
      // return <Navigate to={'/MainOwner'}/>
      
     handlefetchcar();
     console.log("timeout",vehicledata);
  
 

  },[isAuthorized])

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

  const backtorenter=()=>{
    navigate(`/mainrenter`);
  }
  return (
    <div className='container_carchoose'>
      <Heading headingarray={headingarray}/>
      <Toaster/>

      <div className='fliterrenter'>
      <Filter/>
      <div id='back'>
      <button type='' onClick={backtorenter}>
        <img src='./images/backimg.svg' alt='back'/>
      </button>
      </div>

      {
      vehicledata.length > 0 ? (
          <Filtercarselect data={vehicledata} startdate={extradata.sd} enddate={extradata.ed} />
        ) : (
          <p>Loading...</p> // or any loading indicator
        )}
      {/* <Filtercarselect data={vehicledata}/> */}
      {/* <button type='submit' onClick={handlefetchcar}>fetch</button> */}
      </div>
          
    </div>
  )
}
const data=[
  {
      img : './images/maruti(2).JPG',
      type:'PETROL',
      name:'Maruti Suzuki',
      price: '300$/Day'
  },

  {
      img: './images/ev.JPG',
      type:'EV',
      name:'Tata Nexon EV',
      price: '400$/Day'
  },


 

]
export default Car_choose