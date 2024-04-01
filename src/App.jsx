import {Routes,Route, BrowserRouter } from "react-router-dom";
import { Context } from "./main.jsx";
import React, { useContext, useEffect } from "react";

import axios from "axios";
import {Toaster} from "react-hot-toast";
import Home from "./home/Home"
import About from "./Components/aboutus/About";
import Mainrenter from "./Components/Main_Renter/Mainrenter";
import Popup from "./Components/Main_Renter/Popup";
import Car_choose from "./Components/Selectcar/Car_choose";
import Maincar from "./Components/innercar/Maincar";
import MainOwner from "./Components/Mainowner/MainOwner";
import UpdateProfile from "./Components/Updateprofile/UpdateProfile";
import Login from "./Components/Login/Login";
import Forgotpass from "./Components/Login/Forgotpass";
import Signup from "./Components/Signup/Signup"
import Owner_reg from "./Components/Registration/Owner_reg";
import Renter_reg from "./Components/Registration/Renter_reg";
import Vehicle_reg from "./Components/Registration/Vehicle_reg";
import Heading_reg from "./Components/Heading_reg";
import Uploadcar from "./Components/Mainowner/Uploadcar";
import Role from "./Components/Signup/Role";
import Notfound from "./Components/Notfound/Notfound";
import FormSection1 from "./Components/Mainowner/FormSection1.jsx";
import FormSection2 from "./Components/Mainowner/FormSection2.jsx";

let App = () =>{

   const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
   useEffect(() => {
     const fetchUser = async () => {
       try {
         const response = await axios.get(
            "http://localhost:8000/api/v1/user/getuser",
           {
             withCredentials: true,
           }
         );
         setUser(response.data.user);
         setIsAuthorized(true);
       } catch (error) {
         setIsAuthorized(false);
       }
     };
     fetchUser();
   }, [isAuthorized]);



   return(
      <div>
     
      {/* <Router>
      <Heading/> */}
      <BrowserRouter>
   
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route path="/Mainrenter" element={<Mainrenter/>}></Route>
      <Route path="/Car_choose" element={<Car_choose/>}></Route>
      <Route path="/Maincar" element={<Maincar/>}></Route>
      <Route path="/MainOwner" element={<MainOwner/>}></Route>
      <Route path="/Popup" element={<Popup/>}></Route>
      <Route path="/UpdateProfile" element={<UpdateProfile/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Forgotpass" element={<Forgotpass/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Owner_reg" element={<Owner_reg/>}></Route>
      <Route path="/Renter_reg" element={<Renter_reg/>}></Route>
      <Route path="/Vehicle_reg" element={<Vehicle_reg/>}></Route>
      <Route path="/Heading_reg" element={<Heading_reg/>}></Route>
      <Route path="/Uploadcar" element={<Uploadcar/>}></Route>
      <Route path="/Role" element={<Role/>}></Route>
      <Route path="/FormSection1" element={<FormSection1/>}></Route>
      <Route path="/FormSection2/:id" element={<FormSection2/>}></Route>
      {/* <Route path="*" element={<Notfound/>}/> */}
      
      </Routes>
      </BrowserRouter>
      
      {/* </Router> */}
      
      </div>
  
  
   );
   
}

export default App;
