import { BrowserRouter,Route,Link } from "react-router-dom";
import "./Heading.css"
let Heading = ()=> {
return <div class="navigation">
    <ul class="menuitem">
        <li class="carlink">CarLink</li>
        <div class="links">
        <li><a href="#">How To Book</a></li>
        <li><Link to="/about">About Us</Link></li>
        <li><a href="#">Read More</a></li>
        <li><a href="#">Contact Us</a></li>
        </div>
    </ul>
</div>

}
export default Heading;