import React, { useContext, useState,useEffect} from "react";
import './SearchOwner.css'

import Calendar from 'react-calendar';
import { Link, Navigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css'
import { Context } from "../../main";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function SearchOwner() {
   
    const [selectedstartDate, setSelectedstartDate] = useState(new Date());
    const [selectedendDate, setSelectedendDate] = useState(new Date());
    const [carName,setCarName]=useState("");
    const [plateNo,setPlateNo]=useState("");
    const [carList,setCarList]=useState([]);
    const [platenoList,setPlatenoList]=useState([]);
    
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleDate = async (e) => {
    e.preventDefault();
    try {
      console.log("cc",carName,"pn",plateNo)
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/owner_reg/owner_home",
        {carname:carName,plateno:plateNo,startdate:selectedstartDate,enddate:selectedendDate},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };



const fetchcars = async (e) => {

    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/owner_reg/listcars",
      
        {
          
          withCredentials: true,
        }
      );
      toast.success(data.message);
     
      console.log("dataa",data);
  
      console.log("hey",data.carlist);
      console.log("hey2",data.platenolist);
      setCarList(data.carlist);
      setPlatenoList(data.platenolist);

    }   
    
    catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(()=>{
fetchcars();

    },[isAuthorized])

  if(!isAuthorized){
    return <Navigate to={'/login'}/>
  }

  
    const inputstyle1={
      height: "25px",
      border: "1px solid #ccc",
      borderradius: "10px",

     
    };
    const div1={
      display:"flex",
    }

    const handleChange = (event) => {
      const [value1, value2] = event.target.value.split('(');
      setCarName(value1);
      setPlateNo(value2);
    };


  return (

  
    <div className='searchowner'>
      <Toaster/>
        <div className='searchstate'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16" className='mapicon'>
  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276"/>
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z"/>
</svg>
<Link to="/formsection1"className='searchlocationrenter'>Upload A Vehicle</Link>

    </div>
    <div className="selectcar">
      <p>Select an Option:</p>
      {/* Render dropdown list */}
      <select onChange={(e)=>handleChange(e) }required>
        {/* Map over the options array to render options */}
        <option>Select Car</option>
        {carList.map((option,index) => (
          
          <option key={option} value={`${option}(${platenoList[index]}`}>
            {`${option} (${platenoList[index]})`}
          </option>
        ))}
      </select>
    </div>

    
     <div className="renterdateowner">
        <div className='startdateowner'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16" className='calendericon'>
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <p className='startdateinput'>
            <p className="startdatemainowner">Start Date: </p>


            </p>
            <div style={div1} >
            <input type="date" id="start_Date" name='start_Date' value={selectedstartDate} // Typo fixed: value should be formData.age
     style={inputstyle1}
     onChange={(e)=>setSelectedstartDate(e.target.value)}
     className='input_field_startdate_mainowner'
     required
     />
      </div>
          </div>
        <div className='enddateowner'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16" className='calendericon'>
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
        </svg>

        <p >
    <p className='startdatemainowner'>End Date: </p>
  

</p>
<div style={div1} >
            <input type="date" id="end_Date" name='end_Date' value={selectedendDate} // Typo fixed: value should be formData.age
     style={inputstyle1}
     onChange={(e)=>setSelectedendDate(e.target.value)}
     className='input_field_startdate_mainowner'
     required
     />
      </div>
</div> 
</div>
    <div className='searchbtnowner'>
<button type="submit" onClick={handleDate} className="searchtextowner">Upload</button>
     {/* <Link to="/FormSection1" className='searchtext'>Upload</Link> */}
    </div>
 </div>
  )
}
export default SearchOwner