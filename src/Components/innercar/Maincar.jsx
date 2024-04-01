  import React, { useContext, useEffect, useState } from "react";
  import Heading from "../Heading";
  import './Maincar.css'
  import Carinnerinfo from './Carinnerinfo';
  import Popup from '../Main_Renter/Popup'
  import { User } from 'lucide-react'
  import { CircleUserRound } from 'lucide-react';
  import { useLocation } from 'react-router-dom';
import toast,{ Toaster } from "react-hot-toast";
import axios from "axios";
import { Context } from "../../main";


  function Maincar() {
    
    const location = useLocation(); 
  const [vehicledata,setVehicleData]=useState({});
  const [moreInfo,setMoreInfo]=useState({});

    const obj= location.state;
    const vehicleid=obj.vehicleid;
    const startdate=obj.sd;
    const enddate=obj.ed;
    const [showpopup,setShowpopup]=useState(false);
    const { isAuthorized, setIsAuthorized } = useContext(Context);

      useEffect(()=>{
    console.log("idd",vehicleid); 
    console.log("sd",startdate,enddate);

    handlefetchcar(); 
   
    },[isAuthorized])

    const handlefetchcar = async (e) => {

      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/renter_reg/getcarinfo",
        
          {
            params: {
              vehicleid:vehicleid,
          
            },
            withCredentials: true,
          }
        );
        toast.success(data.message);
      
        console.log("dataa",data.vehicle);
        console.log("hey");
        setVehicleData(data.vehicle);
        setMoreInfo(data.vehicle.moreInfo);
        console.log("img",moreInfo.main_image);
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
      <div className='container_maincar'>
        <Toaster/>
      <Heading headingarray={headingarray}/>

      <Carinnerinfo data={vehicledata} info={moreInfo} vehicleid={vehicleid} sd={startdate} ed={enddate} />
      </div>
    )
  }

  export default Maincar