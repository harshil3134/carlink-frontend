import React from 'react'
import './UpdateProfile.css'
import { useState } from 'react';
import Updateform from './Updateform';
import { CircleUserRound } from 'lucide-react';
const emailiinputstyle={
  height: "30px",
  border: "1px solid #ccc",
  borderradius: "4px",
};
function UpdateProfile() {
  const [formData, setFormData] = useState({
    First_name: '',
    Last_name: '',
    Email: '',
    Password: '',
    Contact_number: '',


  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data (e.g., send to server)
    console.log('Submitted data:', formData);
  };
  return (
   
   <Updateform
   formData={formData}
  handleChange={handleChange}
  onSubmit={handleSubmit}
   />
  )
}

export default UpdateProfile