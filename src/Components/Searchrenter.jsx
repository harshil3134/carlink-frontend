import './Searchrenter.css'
import Heading from './Heading'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Link, Navigate,useNavigate} from "react-router-dom";
import 'react-calendar/dist/Calendar.css'
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
function Searchrenter() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedCity, setSelectedCity] = useState(null);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleCityClick = (city) => {
  //   setSelectedCity(city);
  //   setIsOpen(false); // Close dropdown after selection
  // };
  const cities = [' Mumbai','Delhi','Bangalore', 'Hyderabad',  'Ahmedabad',  'Chennai', 'Kolkata',  'Surat', 'Pune','Jaipur'];
  const navigate = useNavigate();
const [flag,setFlag]=useState(false);

  const [selectedCity, setSelectedCity] = useState(null); // Initially no selected city
  useEffect(()=>{
    if(flag && selectedCity)
    {
      let extradata={
        city:selectedCity,
        sd:sd,
        ed:ed
      }
     
      // console.log(sd,"datee",ed);
       navigate(`/car_choose`,{ state: extradata })
      // navigate(`/receiver-page?var1=${variable1}&var2=${variable2}&var3=${variable3}`);
    }
    
  },[flag])


  const handleCityClick = (city) => {
    setSelectedCity(city);
  };
  const [showstartCalendar, setstartShowCalendar] = useState(false);
  const [selectedstartDate, setSelectedstartDate] = useState(new Date());
  const [sd,setsd]=useState(new Date());
  const [ed,seted]=useState(new Date());

  const handleTextstartClick = () => {
    setstartShowCalendar(!showstartCalendar);
  };

  const handlestartDateChange = (date) => {
    setSelectedstartDate(date);
    setstartShowCalendar(false);
    
    setsd(formatDate(date));
  };
  ///////////////////////////////////////////////////////
  const [showendCalendar, setendShowCalendar] = useState(false);
  const [selectedendDate, setSelectedendDate] = useState(new Date());

  const handleTextClick = () => {
    setendShowCalendar(!showendCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedendDate(date);
    setendShowCalendar(false);
    seted(formatDate(date));
  };
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  return (
    <div className='searchrenter'>
       <div className='searchstate'>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16" className='mapicon'>
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
</svg>
<p className='searchlocationrenter' >
<select onChange={(event) => setSelectedCity(event.target.value)}>
        {/* Option for no selection */}
        <option value="">Select City</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>

</p>
{/* {isOpen && (
        <ul>
          {cities.map((city, index) => (
            <>
            
            <li key={index}>
              <button onClick={() => handleCityClick(city)}>{city}</button>
            </li>
            </>
          ))}
        </ul>
      )} */}


       </div>
       <div className="renterdate">
         <div className='startdate'>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16" className='calendericon'>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
</svg>
<p className='startdateinput'>
<p onClick={handleTextstartClick}>Start Date: {selectedstartDate.toLocaleDateString()}</p>
      {showstartCalendar && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <Calendar


          onChange={handlestartDateChange}
            value={selectedstartDate}
          />
        </div>
      )}
</p>
         </div>
         <div className='enddate'>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16" className='calendericon'>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
</svg>

<p className='startdateinput'>
      <p onClick={handleTextClick}>End Date: {selectedendDate.toLocaleDateString()}</p>
      {showendCalendar && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <Calendar
            onChange={handleDateChange}
            value={selectedendDate}
          />
        </div>
      )}
     
    </p>
         </div>
       </div>
       <div className='searchbtn'>
      
        <button type='button' onClick={()=>setFlag(true)} className='searchtext'>Search</button>
       </div>
    
    </div>
  )
}

export default Searchrenter