import React, { useContext, useState } from "react";

import { Context } from "../../main";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import './FormSection2.css'
 import Dropdown from './Dropdown';
 import { Car, Citrus } from 'lucide-react';
 import { useParams,Link, Navigate,useNavigate } from "react-router-dom";

 const inputstyle={
  height: "20px",
  border: "1px solid #ccc",
  borderradius: "4px",
  
};
let FormSection2=()=> {
  // { formData, handleChange, onSubmit,onPrevious }
  const [dropData, setDropData] = useState()
  const [main_image,setMain_Image]=useState([])
  const [eximg,setExImg]=useState("")
  const [eximg2,setExImg2]=useState("")
  const [inimg1,setInImg]=useState("")
  const [inimg2,setInImg2]=useState("")
  const [price,setPrice]=useState("")
  const [segmentvalue,setSegmentValue]=useState("")
  const [cityvalue,setCityValue]=useState("")
  const [fueltypevalue,setFuelTypeValue]=useState("")
  const [transmissiontypevalue,setTransmissionType]=useState("")

  //getting id from form section 1 using navigate
  const { id } = useParams();

  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(Context);
  let imagearr=[];
    // Function to handle file input changes
    const handleFileChange = (event,index) => {
      // imagearr.push(event.target.files[index])
      // setMain_Image(imagearr);

      const newImage = event.target.files[0];
      const newImages = [...main_image]; // Create a copy of the main_image array
      newImages[index] = newImage; // Update the image at the specified index
      setMain_Image(newImages);
    };

  const handleform = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("segment", segmentvalue);
    formData.append("availableCity", cityvalue);
    formData.append("fuelType", fueltypevalue);
    formData.append("transmissionType", transmissiontypevalue);
    formData.append("price", price);
    for(let i=0;i<5;i++)
    {
      console.log(main_image[i]);
      formData.append("main_image",main_image[i]);
    }
   


    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/owner_reg/vehicle_detail/${id}`,
      formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setTimeout(() => {
        navigate(`/mainowner`);
        // navigate("/formsection2");
      }, 4000);
     
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  // if(!isAuthorized){
  //   return <Navigate to={'/login'}/>
  // }


  const segment=[
    { value: 'Hatchback', label: 'Hatchback' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'SUV', label: 'SUV' },
  ]

  const city=[
    { value: ' Mumbai', label: ' Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Surat', label: 'Surat' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Jaipur', label: 'Jaipur' },
   
  ]
  
  const fuel_type = [
    { value: 'EV', label: 'EV' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'CNG', label: 'CNG' },
    { value: 'Petrol', label: 'Petrol' },
    { value: 'Diesel', label: 'Diesel' },
  ];

  const transmission_type=[

    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },

  ];
  function t()
  {
    console.log("arr ",main_image);

  }
  return (
    <div className='container_main_form2'>
      <Toaster/>
      <div className='container_form2'>
      <div className='vehicleinfotext'>
        <h1 className='carinfotext'> Car Information</h1>
        <p><Car className='updateicons' size={50}/></p>
      </div>
      <label htmlFor='main_car_img' className='mainimage'>Main Image </label>
      
      <input
       type="file"
       id="main_car_img"
       name='main_car_img'
       accept=".webp, .jpeg, .png, .jpg"
      //  value={formData.main_car_img} // Typo fixed: value should be formData.age
       onChange={(e)=>handleFileChange(e,0)}
       required
     ></input>
     <br/><br/>
     <label htmlFor='ex_car_img1' className='ex_img_label'>Exterior Images</label>
     <br></br>
     <div className='ex_img'>
      <input
       type="file"
       id="ex_car_img1"
       name='ex_car_img1'
       accept=".webp, .jpeg, .png, .jpg"
      //  value={formData.ex_car_img1} // Typo fixed: value should be formData.age
      onChange={(e)=>handleFileChange(e,1)}
       required
     ></input>
     <br/>
     <input
       type="file"
       id="ex_car_img2"
       name='ex_car_img2'
       accept=".webp, .jpeg, .png, .jpg"
      //  value={formData.ex_car_img2} // Typo fixed: value should be formData.age
      onChange={(e)=>handleFileChange(e,2)}
       required
     ></input>
     </div>
     <br/>
     <label htmlFor='in_car_img1' className='in_img_label'>Interior Images</label>
     <br/>
     <div className='in_img'>
      <input
       type="file"
       id="in_car_img1"
       name='in_car_img1'
       accept=".webp, .jpeg, .png, .jpg"
      //  value={formData.in_car_img1} // Typo fixed: value should be formData.age
      onChange={(e)=>handleFileChange(e,3)}
       required
     ></input>
     <br/>
     <input
       type="file"
       id="in_car_img2"
       name='in_car_img2'
       accept=".webp, .jpeg, .png, .jpg"
      //  value={formData.in_car_img2} // Typo fixed: value should be formData.age
      onChange={(e)=>handleFileChange(e,4)}
       required
     ></input>
     </div>
     <br/>
     <label htmlFor='price' className='carnamelabel'>Price: </label>
      <input
       type="text"
       id="price"
       name='price'  
      //  value={formData.car_name} // Typo fixed: value should be formData.age
      onChange={(e)=>setPrice(e.target.value)}
       style={inputstyle}
       placeholder=" 1500 -/per day"
       required
     ></input>



     <br/><br/>
     <Dropdown
         dropData={dropData}
         handleChange={(e)=>setCityValue(e.target.value)}
         label="City"
         
         options={city}
         required
    />
    <br/>
          <Dropdown
         dropData={dropData}
         handleChange={(e)=>setSegmentValue(e.target.value)}
         label="Segment"
         options={segment}
         required
    />
    <br/>
            <Dropdown
         dropData={dropData}
         handleChange={(e)=>setFuelTypeValue(e.target.value)}
         label="Fuel Type"
         options={fuel_type}
         required
    />
    <br/>
        <Dropdown
         dropData={dropData}
         handleChange={(e)=>setTransmissionType(e.target.value)}
         label="TransMission Type"
         options={transmission_type}
         required
    />
    <br/>
 
      <button type="submit" 
      onClick={handleform}
       className='submitbtn'>Submit</button>
    </div>
    </div>
  );
}

export default FormSection2;
