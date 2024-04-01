import React from 'react'
import './Enquiry.css'
import RedirectButton from '../Main_Renter/RedirectButton'
function Enquiry() {
  return (
    <div className="fullcontainer_enquiry">
    <h2 className='toprated'>Enquiry Status</h2>
    {data.map((d) =>(
        <div className="enquiry_car">
            <div className='enquiry_info'>
                <img src={d.img} alt="hello" className='brand_imgs'></img>
            
                 <p className='cartyperenter'>{d.Date}</p>
                <p className='carnamerenter'>{d.Customer}</p>
                <p className='carpricerenter'>{d.place}</p> 
               
                
            </div>  
                
            
        </div>
        
        

    ))}
    
    </div>
  )
}
const data=[
    {
        img : './images/maruti(2).JPG',
        Date:'14/3/24 To 18/3/24 ',
        Customer: 'Dhruv Dave',
        place:'Pune City',
        
    },
  
    {
        img: './images/maruti(2).JPG',
        Date:'22/3/24 To 26/3/24',
        Customer:'Harsh Patel',
        place: 'Pune to Nashik'
    },
  

   

]
export default Enquiry