import { Context } from "../../main";
import './MainOwner.css'
import Heading from "../Heading";
import SearchOwner from './SearchOwner';
import Enquiry from './Enquiry';
import Offers from "../Main_Renter/Offers";
import Question from "../Main_Renter/Question";
import Review from "../Main_Renter/Review";
import Cities from '../Main_Renter/Cities';
import Popup from '../Main_Renter/Popup';
import React, { useEffect,useContext,useState } from "react";
import { CircleUserRound } from 'lucide-react';
import UpdateProfile from '../Updateprofile/UpdateProfile';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function MainOwner() {

  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const [showpopup,setShowpopup]=useState(false);
  const [carbooking,setCarBooking]=useState([]);
  const [loading, setLoading] = useState(true);
  const [arr,setArr]=useState(null);
  const [startd,setstartd]=useState([]);
  const [endd,setendd]=useState([]);
  let a;
  let sd=new Date();
  let ed=new Date();
  const startdd=[];
  const enddd=[];
  let dataArray;



  function formatDate(dateString) {
    // Parse the date string into a Date object
    const date = new Date(dateString);
    
    // Format the date as "DD/MM/YYYY"
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  
    return formattedDate;
  }

  // const handlebookinginfo = async (e) => {

  //   try {
  //     const { data } = await axios.get(
  //       "http://localhost:8000/api/v1/owner_reg/fetchbookings",
      
  //       {
          
  //         withCredentials: true,
  //       }
  //     );
  //     toast.success(data.message);
     
  //     console.log("dataa",data);
  
  //     console.log("hey",data.objarr);
  //     a=data.objarr;
  //     setArr(data.objarr);
  //   //  dataArray = data.bookobj.map(obj => ({
  //   //     startDate: new Date(obj.startDate),
  //   //     endDate: new Date(obj.endDate),
  //   //     price: obj.price
  //   // }));

  //   // setArr(dataArray);
    

  //    setTimeout(() => {
 
  //     // return <Navigate to={'/MainOwner'}/>
  //     // console.log("to",vehicledata);
  //     console.log("inside timeout",arr);
  //   }, 2000);
    

  //   } 
   
    
    
    
  //   catch (error) {
  //     toast.error(error.response.data.message);
  //   }


  // };

  function t(objarr){
setArr(objarr);
let date1;
let date2;
objarr.map((d)=>{
sd=d.startDate;

date1=formatDate(sd);
ed=d.endDate;
date2=formatDate(ed);
console.log("sd",sd)
// sd=sd.toLocaleDateString();
console.log("startdate11",date1,"endate",date2)
// ed=ed.toLocaleDateString();
startdd.push(date1);
enddd.push(date2);
})
setstartd(startdd);
setendd(enddd);
console.log("sssd",startd)
console.log("obj",objarr);
  }

  useEffect(()=>{

    
      const { data } =axios.get(
        "http://localhost:8000/api/v1/owner_reg/fetchbookings",
      
        {
          
          withCredentials: true,
        }
      ).then(async response=>{
        console.log("res",response.data.objarr);
        t(response.data.objarr);
        // setArr(response.data.objarr);
        setLoading(false);
        console.log("res2",response.data.objarr);
  
      }).catch(error=>{
        toast.error(error.response.data.message);
      })
      // toast.success(data.message);
     
      // console.log("dataa",data);
  
      // console.log("hey",data.objarr);
      // a=data.objarr;
      // setArr(data.objarr);
    //  dataArray = data.bookobj.map(obj => ({
    //     startDate: new Date(obj.startDate),
    //     endDate: new Date(obj.endDate),
    //     price: obj.price
    // }));

    // setArr(dataArray);
    

     setTimeout(() => {
 
      // return <Navigate to={'/MainOwner'}/>
      // console.log("to",vehicledata);
      console.log("inside timeout",arr);
    }, 2000);
    

     
   
  
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

  return (
    <div className='container_mainowner'>
        <Heading headingarray={headingarray}/>
        <Toaster/>
        <SearchOwner/>
        {arr?<Enquiry data={arr} startlist={startd} endlist={endd}/>:"Loading ..."} 
        <Offers/>
        <Question/>
        <Review/>
        <Cities/>
    </div>
  )
}

export default MainOwner
