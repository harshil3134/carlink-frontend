import React, { useEffect, useState } from 'react'
import './Enquiry.css'
import RedirectButton from '../Main_Renter/RedirectButton'
function Enquiry({data,startlist,endlist}) {

    const [sd,setsd]=useState(new Date());
    const [ed,seted]=useState(new Date());


const odata=[
    {
        img : './images/maruti(2).JPG',
        startDate:new Date('02-04-2024'),
        endDate:new Date('06-04-2024'),
        Customer: 'Dhruv Dave',
        price:1922,
        
    },
  
    {
        img: './images/maruti(2).JPG',
        startDate:new Date('04-04-2024'),
        endDate:new Date('08-04-2024'),
        Customer:'Harsh Patel',
        place:878,
    },
  

   

]

function ee(startDate,endDate)
{

    setsd(startDate);
    seted(startDate);


}

useEffect(()=>{
console.log("startlist",startlist);
},[startlist])


// console.log("sd",sd,ed);

  return (
    <div className="fullcontainer_enquiry">
        
    <h2 className='toprated'>Enquiry Status</h2>
    {data.map((d,index) =>{
            //  setsd(startDate);
            //  seted(startDate);

        return(
        <div className="enquiry_car">
     
            <div className='enquiry_info'>
                <img  src={d.mainimg} alt="hello" className='brand_imgs'></img>
{console.log("ee",d)}
                 {/* <p className='cartyperenter'>{sd.toLocaleDateString()} to {ed.toLocaleDateString()}</p> */}
                 <p className='cartyperenter'>{startlist[index]} to {endlist[index]}</p>

                <p className='carnamerenter'></p>
                <p className='carpricerenter'>{d.price}</p> 
               
                
            </div>  
                
            
        </div>
      
        

  ) })}
    
    </div>
  )
}

export default Enquiry