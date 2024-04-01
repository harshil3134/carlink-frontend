import "./Home.css"
import Heading from "../Components/Heading"
// import Heading from "./Components/Heading"
import Slogan from "../Components/Slogan"
import Login_main from "../Components/Login_main"
import Side from "../Components/Side"
import Working from "../Components/Working"
import Promotion from "../Components/Promotion"
import Choose from "../Components/Choose"
import Brands from "../Components/Brands"
import Searchrenter from "../Components/Searchrenter"
import Cities from "../Components/Main_Renter/Cities"
import Popupabout from "../Components/aboutus/Popupabout"
import { useState } from "react"
import Popupbook from "../Components/Howtobook/Popupbook"
function Home() {
  const [showpopupabout,setShowpopupabout]=useState(false);
  const [showpopupbook,setShowpopupbook]=useState(false);
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
      about:<>
      <p onClick={()=>setShowpopupabout(true)}>About Us</p>
       { showpopupabout &&  <Popupabout onClose={()=>setShowpopupabout(false)}/> }
      </>
    },
    {
      Book:<>
      <p onClick={()=>setShowpopupbook(true)}>How to Book</p>
       { showpopupbook &&  <Popupbook onClose={()=>setShowpopupbook(false)}/> }
      </>
    }
  
  ];
  return (
    <div class="full">
    
   <Heading headingarray={headingarray}/>
   
   <div class="main">
   <div class="mainslogan">
   <Slogan/>
   </div>
   <div class="mainside">
   <Side/>
   </div>
   </div>
   <Login_main/>
   <main_image/>
   <Working/>
   <Promotion/>
   <Choose/>
   <Brands/>
   <Cities/>
   {/* <Choose/>
   <Promotion/> */}
  
   {/* <Searchrenter></Searchrenter> */}
   </div>
  );
}



export default Home