import React from 'react'
import "./Vehicle_reg.css"
import Heading from '../Heading'
import Input_reg from '../Input_reg'
import Heading_reg from '../Heading_reg'
function Vehicle_reg() {
  return (
    <div className='container_owner'>
    {/* <Heading headingarray={headingarray}/> */}
    <Heading_reg/>
    <div>
          <div className='registration_info'>
            <h1 className='reg_text'>Registration</h1>
            <form >
              <div className='reg_input'>
              <Input_reg  className="fname_reg" label="First Name"/>
            <Input_reg label="Last Name"/>
            
              </div>
              <div  className='reg_basic'>
              <Input_reg label="Aadharcard No"   maxlength="12"  placeholder='123678321567'/>
          
          <Input_reg label="Contact No" type="tel" pattern="[0-9]{10} " maxlength="10" />
          </div>
        
       
                <button className='submit_regis_owner_btn'>Register</button>
            </form>
          </div>
         </div>
</div>
  )
}
const headingarray=[
    {
       name:'CarLink'
    },
    {
      Profile:" "
  
    },
    {
      contact:"Contact Us"
    },
    {
      read:"Read More"
    },
    {
      about:"About us"
    },
    {
      Book:"How to Book"
    }
  
  ];
export default Vehicle_reg