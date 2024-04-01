import React from 'react'
import './Offers.css'
function Offers() {
  return (
 <>
<h2 className='Offers'>Offers</h2>   
<div className="container_offers">

{data.map((d) =>(
    <div className="offer">
      
        <p className='terms'>{d.term}</p>
        <div className='couponcode'>
        <p className='coupon'>
   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16" className='couponicon'>
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
  </svg></p>
        
        <p className='amount'>{d.amount}</p>
        
    </div>
    <p className='des'>{d.dis}</p>
    </div>
))}
</div>
</>
  )
}
const data=[
    {
        term:'*T&C apply',
        img : './images/coupon.svg',
        amount:'Flat 10% off',
        dis:'Use code CanLink10 and get 10% off',
    },
  
    {
        term:'*T&C apply',
        img : './vite.svg',
        amount:'Flat 10% off',
        dis:'For all new users in Bangalore and Pune ',
    },
   {
    term:'*T&C apply',
    img : './vite.svg',
    amount:'Flat 20% off',
    dis:'For all  users pick EV ',
   },

   {
    term:'*T&C apply',
    img : './vite.svg',
    amount:'Flat 5% off',
    dis:'For the first Ride',

   },

   

]
export default Offers