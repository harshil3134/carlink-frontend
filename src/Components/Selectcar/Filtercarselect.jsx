import React, { useState } from 'react'
import './Filtercarselect.css'
import RedirectButton from '../Main_Renter/RedirectButton'
import { Navigate, useNavigate } from 'react-router-dom'
function Filtercarselect({data,startdate,enddate}) {
  const navigate=useNavigate();
let vehicleid="";
let obj;
let obj1;
function sub(id)
{
obj1={
  vehicleid:id,
  sd:startdate,
  ed:enddate
}
return obj1;
}
  
  return (
   
<div className="fullcontainer_carselect">
    
    {data.map((d) =>(
  
        <div className="select_car">
        
            
            
          {/* {console.log("fuel",d.moreInfo['fuelType'])} */}
            <div className='car_info'>
                <img  src={d.moreInfo.main_image} alt="hello" className='brand_imgs'></img>
              
                 <p className='cartyperenter'>{d.moreInfo['fuelType']}</p>
                <p className='carnamerenter'>{d.carName}</p>
                <p className='carpricerenter'>{d.moreInfo['price']}</p> 
                <div onClick={()=>navigate(`/maincar`,{ state: sub(d._id)})}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" className='arrowicon'>
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></div>
                
            </div>  
                
            
        </div>
        
        

    ))}
    </div> 
  )
}
// const data=[
//     {
//         img : './images/maruti(2).JPG',
//         type:'CNG',
//         name:'Maruti Suzuki',
//         price: '300$/Day'
//     },
  
//     {
//         img: './images/ev.JPG',
//         type:'EV',
//         name:'Tata Nexon EV',
//         price: '400$/Day'
//     },
  

   

// ]
export default Filtercarselect