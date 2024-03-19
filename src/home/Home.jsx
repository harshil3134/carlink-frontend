import "./Home.css"
import Heading from "../Components/Heading"
// import Heading from "./Components/Heading"
import Slogan from "../Components/Slogan"
import Login_main from "../Components/Login_main"
import Side from "../Components/Side"
import Working from "../Components/Working"
import Promotion from "../Components/Promotion"
function Home() {
  return (
    <div class="full">
    
   <Heading/>
   
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
   </div>
  );
}

export default Home