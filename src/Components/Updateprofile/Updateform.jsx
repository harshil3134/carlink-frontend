import React from 'react'
import './UpdateProfile.css'
import { CircleUserRound } from 'lucide-react';
const emailiinputstyle={
  height: "30px",
  border: "1px solid #ccc",
  borderradius: "4px",
};
function Updateform({formData, handleChange, onSubmit}) {
  return (
    <div className='container_updateprofile'>
    <div className='update_page'>
    <div className='upperheader'>
    <p className='edittxt'>Edit Profile</p>
    <p><CircleUserRound className='updateicons' size={50}/></p>

    </div>
    <form>
        <div className='formname'>
            <label id='First_name'>First Name</label><br></br>
            <label id='Last_name' className='lnamelabel'>Last Name</label><br></br>
            
        </div>
        <div className="nameinput">

        <input
         type="text" id='First_name' className='fnameinput' style={{height:"30px"}}
         value={formData.First_name}
         onChange={handleChange}
         name='First_name'
         >
            
            </input><br></br>
        <input type="text" id='Last_name' className='lnameinput' style={{height:"30px"}}
          value={formData.Last_name}
          onChange={handleChange}
          name='Last_name'
        ></input>
        </div>
        <br></br>
        
        <label id="Email" className='emaillabel'>Email</label><br></br>
        <input type="email" id="Email" className='emailinput'style={emailiinputstyle}
          value={formData.Email}
          onChange={handleChange}
          name='Email'
        
        ></input>
        <br></br>
        <br></br>
        <label id='Password'>Password</label><br></br>
        <input type="password" id="Password" style={emailiinputstyle}
          value={formData.Password}
          onChange={handleChange}
          name='Password'
        ></input>
        <br />
        <br/>
        <label id='Contact_number'>Contact Number</label><br></br>
        <input type="tel" id="Contact_number" style={emailiinputstyle}
          value={formData.Contact_number}
          onChange={handleChange}
          name='Contact_number'
        ></input>
        <br/>
        <div>
        <input type="submit" value="Cancel" className='cancelbtn'/>
        <input type="submit" value="Edit" onClick={onSubmit} className='cancelbtn'/>
        </div>
    </form>
    </div>
</div>
  )
}

export default Updateform