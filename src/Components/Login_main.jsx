import "./Login_main.css"
import { Link, Navigate } from "react-router-dom";
import React from "react";

import axios from "axios";

let Login_main = ()=>{
    
       

      
 
    return(
        <div class="loginsignup">
        <div class="signup">
            <Link to="/Signup" class="Signuplink">Signup</Link>
        </div>
        <div class="login">
            <Link to="/Login" class="loginlink">Login</Link>
        </div>
        </div>
    );
}
export default Login_main;