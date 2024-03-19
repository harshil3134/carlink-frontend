import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./home/Home"
import About from "./Components/aboutus/About";
import Heading from "./Components/Heading";
import Signup_main from "./Components/signup/Signup_main";
import Login_main from "./Components/login/Login_main_page";
import Renter_reg from "./Components/renter_reg/Renter_reg";
import Owner_reg from "./Components/owner_reg/Owner_reg";
import Vehicle_reg from "./Components/owner_reg/Vehicle_reg";


let App = () =>{
   return(
      <div>
     
      {/* <Router>
      <Heading/> */}
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/signup" element={<Signup_main/>}/>
      <Route path="/login" element={<Login_main/>} />
      <Route path="/owner_reg" element={<Owner_reg/>}></Route>
      <Route path="/renter_reg" element={<Renter_reg/>}></Route>
      <Route path="/vehicle_reg" element={<Vehicle_reg/>}></Route>
      </Routes>
      
      {/* </Router> */}
      
      </div>
  
  
   );
   
}

export default App;
