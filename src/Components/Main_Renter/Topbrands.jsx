import React from 'react'
import './Topbrands.css'

function Topbrands() {
  return (
    <>
    <h2 className='topbrands'>Top Brands</h2>
    <div className="container_brand">
   
   {data.map((d) =>(
       <div className="brands_name">
           <img src={d.img} alt="" className="brands_img"></img>
           
       </div>
   ))}
   </div>
   </>
  );
}
const data=[
    {
        img : './images/Tata.JPG',
        car_name: 'Tata',
    },
  
    {
        img: './images/skoda.JPG',
        car_name: 'Skoda',
    },
  
  
    
    {
        img: './images/maruti.JPG',
        car_name: 'Maruti Suzuki',
    },
   
    {
        img: './images/ford.JPG',
        car_name: 'Ford',
    },
    // {
    //     img: './images/honda.JPG',
    //     car_name: 'Honda',
    // },
   

]
export default Topbrands