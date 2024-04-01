import React from 'react'
import "./Heading_reg.css"
function Heading_reg() {
  return (
    <div className='container_main_reg'>
    <div className="navigation_reg">
    <ul className="menuitem_reg">
        
        
       <li className="carlink_reg">CarLink</li>
     
       <div className="links_reg">
        
        {/* <li ><p className="profile">{d.profile} </p></li> */}
    
        <li className='howtobook_reg'>How to Book</li> 
    
       </div>
    </ul>

</div>
<div className='aboutus_reg'>
<ul>
    <div >
      <li>About us</li>
       <li>Read More</li>
       <li> Contact us</li>
    </div>
</ul>
</div>
</div>
  )
}

export default Heading_reg