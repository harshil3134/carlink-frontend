import React from 'react'
import Heading from '../Heading'

import Input_box from '../signup/Input_box'

function Vehicle_reg() {
    return (
        <div className="h-screen flex  w-full bg-my_bg bg-[url('/images/Registration_bg.png')]" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
          <Heading/>
          <div className=' h-screen  ' 
          >
  
          
            <div className='  m-4 bg-orange-400  text-my_bg px-16 pb-16 ml-48 mt-52 rounded-3xl ' >
            <h1 className='text-5xl font-bold text-center text-slate-50 pt-8 pb-12'>Vehicle Registration</h1>
            <form>
              <div className='flex gap-16 '>
              <Input_box  className="" label="Vehicle Plate No"/>
            <Input_box label="PUC No"/>
              </div>
           <div className='flex gap-16'>
           
           <Input_box label="RC No"  pattern="[A-Z]{2}\d{13}" maxlength="15"  placeholder='GJ23 99898989384'/>
          
        <Input_box label="Validation of date" type="tel" pattern="[0-9]{10} " maxlength="10" />
           </div>
      
         
          <button className='bg-gray-50 font-bold text-black rounded-lg px-5 py-2 mx-40 mt-2 translate-x-28'>Next</button>
            </form>
          
            </div>
            </div>
          
        </div>
    )
}

export default Vehicle_reg