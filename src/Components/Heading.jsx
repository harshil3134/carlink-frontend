import { BrowserRouter,Route,Link } from "react-router-dom";
import "./Heading.css"
import Popup from "./Main_Renter/Popup";
import { User } from 'lucide-react'
import { useState } from "react";
let Heading = ({headingarray})=> {
const [showpopup,setShowpopup]=useState(false);
return (
    
<div className="navigation">
    <ul className="menuitem">
        {headingarray.map((d)=>(
        <>
        
       <li className="carlink">{d.name}</li>
     
       <div className="links">
        
        <li ><p className="profile">{d.profile} </p></li>
    
        <li>{d.contact}</li>
       <li>{d.read}</li>
       <li className="headingaboutus">{d.about}</li>
       <li> {d.Book}</li>
       
       {/* <li>{d.profile}</li> */}
       
        
         
        

       </div>
       </>
))}
    </ul>
</div>
)
}
export default Heading
  // <li class="carlink">{}</li>
        // <div class="links">
        // <li><a href="#">How To Book</a></li>
        // <li><Link to="/about">About Us</Link></li>
        // <li><a href="#">Read More</a></li>
        // <li><a href="#">Contact Us</a></li>
        // </div>