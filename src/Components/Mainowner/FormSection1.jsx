
import './FormSection.css'
import { Car } from 'lucide-react';
import { Link, Navigate,useNavigate} from "react-router-dom";

import { Context } from "../../main";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
const inputstyle1={
  height: "25px",
  border: "1px solid #ccc",
  borderradius: "10px",
};
function FormSection1() {
  const [formData, setFormData] = useState({
    plate_no: '',
    puc_no: '',
    rc_no: '',
    validation_date:'',
   carName:''
  });


const [flag,setFlag]=useState(0);
  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const navigate = useNavigate();



  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/owner_reg/vehicle_registration",
        {     carName:formData.carName,
          vehiclePlateNumber:formData.plate_no,
        pucNumber:formData.puc_no,
        rcBookNumber:formData.rc_no,
        validationDate:formData.validation_date},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
     
      toast.success(data.message);
      console.log(data.vehicleid);
     
      console.log(data);
      setTimeout(() => {
        navigate(`/FormSection2/${data.vehicleid}`);
        // navigate("/formsection2");
      }, 2000);
     //setFlag(1);
    
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // if(!isAuthorized){
  //   return <Navigate to={'/login'}/>
  // }



  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    
  };
  return (
    <div className='container_main_form1'>
     
      <div className='container_form1'>
      <Toaster/>
      <div className='vehicleinfotext'>
        <h1 className='carinfotext'> Car Information</h1>
        <p><Car className='updateicons' size={50}/></p>
      </div>
      <form>
      <div className='input_label_plate'> 
      <label htmlFor="plate_no" className='vehicleplateno'>Vehicle Plate No</label>
      <label htmlFor="puc_no">PUC No:</label>
      </div>
      <div className='input_field_plate'>
      <input
        type="text"
        id="plate_no"
        name="plate_no"
        value={formData.plate_no}
        onChange={handleChange}
        style={inputstyle1}
        placeholder='GJ236888'
        className='input_vehicle_plate'
        required
      />
      <br />
      
      <input
        type="text"
        id="puc_no"
        name="puc_no"
        placeholder='AB12345678901255'
        value={formData.puc_no} // Typo fixed: value should be formData.age
        onChange={handleChange}
        required
      />
      </div>
      <br />
      <div>
        
      </div>
      <div className='input_label_rc'>
      <label htmlFor="rc_no" className='input_label_rcno' >RC No:</label>
      <label htmlFor="validation_date">Validation of vehicle:</label>
      
      </div>
      <div className='input_field_rc'>
      <input
       type="text"
       id="rc_no"
       name='rc_no'
       value={formData.rc_no} // Typo fixed: value should be formData.age
       onChange={handleChange}
       style={inputstyle1}
       className='input_field_rcno'
        placeholder='GJ23 99898989384'
       pattern="[A-Z]{2}\d{13}"
       required
     ></input>
      
     <input
       type="date"
       id="validation_date"
       name='validation_date'
       value={formData.validation_date} // Typo fixed: value should be formData.age
       onChange={handleChange}
       style={inputstyle1}
       className='input_field_validation'
       required
     >

     </input>
      </div>
      <br/>
    <div className="input_label_date">

    <label htmlFor='car_name' className='input_label_startdate'>Car Name: </label>
    </div>
     <div className="input_field_date">
    
     <input
       type="text"
       id="car_name"
       name='carName'
       placeholder='Hyundai Creta'
       value={formData.carName} // Typo fixed: value should be formData.age
      onChange={handleChange}
       style={inputstyle1}
       required
     ></input>
     </div>
    </form>
     <br/>
       <button   className='nextbtn' onClick={handleForm} type='submit'>
       {/* <Link to="/formsection2">Next</Link> */}
       </button>
     <br/>

    </div>
    </div>
    
  );
}

export default FormSection1;
