import React from 'react'
import './Toprated.css'

import RedirectButton from './RedirectButton'
function Toprated() {
   
  return (
<>
    <h2 className='toprated'>Top Rated</h2>
    <div className="fullcontainer_brands">
    
    {data.map((d) =>(
        <div className="top_brands">
            <div className='brandinfo'>
                <img src={d.img} alt="hello" className='brand_imgs'></img>
            
                 <p className='cartyperenter'>{d.type}</p>
                <p className='carnamerenter'>{d.name}</p>
                <p className='carpricerenter'>{d.price}</p> 
                <RedirectButton to="/Maincar" ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" className='arrowicon'>
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></RedirectButton>
                
            </div>  
                
            
        </div>
        
        

    ))}
    </div>
    </>
  )
}
const data=[
    {
        img : './images/maruti(2).JPG',
        type:'CNG',
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
export default Toprated