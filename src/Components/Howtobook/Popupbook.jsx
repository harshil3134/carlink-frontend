import React from 'react'
import './Popupbook.css'
import { X } from 'lucide-react';
function Popupbook({onClose}) {
  return (
    <div className='container_popupbook'>
         <p onClick={onClose} className='closeabout'><X color='black' size={40}/></p>
         
        <div className="column">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div className='book_step1'> <p>1</p></div>
            <div className='book_step2'> <p>2</p></div>
            <div className='book_step1'> <p>3</p></div>
            <div className='book_step1'> <p>4</p></div>
            <div className='book_step1'> <p>5</p></div>

        </div>
        <div className="step1"><p>Signup  to Create an Account</p></div>
        <div className="step2"><p>Choose Your Role as Renter</p></div>
        <div className="step3"><p>Select your Location and Car as per your Need</p></div>
        <div className="step4"><p>Make Payment</p></div>
        <div className="step5"><p>Start Your Journey</p></div>
    
    </div>
  )
}

export default Popupbook