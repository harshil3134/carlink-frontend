import React from 'react'
import { X } from 'lucide-react';
import './Popupabout.css'
function Popupabout({onClose}) {
  return (
    <>
    
    <div className='popupabout'>
    
      
      
      <div className='aboutusimg'>
      <p onClick={onClose} className='closeabout'><X color='black' size={40}/></p>

      <p className='carlinktextaboutus'>CarLink</p>
      <p className='ourmission'>Our mission is to make car renting as easy and hassle-free as possible.</p>
      <div className='txtabout'> Welcome to CarLink, where we're revolutionizing the way people access transportation. Founded on the principles of convenience, affordability, and community, we're dedicated to providing a seamless car rental experience that puts the power back in your hands.</div>
     
      </div>
      
      </div>
    
    
    </>
  )
}

export default Popupabout