import React from 'react'
import Heading from '../Heading'

import Input_box from './Input_box'
import { Button } from 'bootstrap'

function Signup_main() {
  return (
      <div className="h-screen flex w-full bg-my_bg bg-[url('/images/bg_3.png')]" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
        <Heading/>
        <div className='   ' 
        >

        
          <div className='pb-4 m-4 bg-orange-400  px-20 pr-24 ml-48 mt-52 rounded-3xl ' >
          <h1 className='text-4xl font-bold text-center py-6'>SIGN UP</h1>
          <form>
          <Input_box label="Name"/>
          <Input_box label="Email id" type="email" />
          <Input_box label="Password" type="password" />
        <button className='bg-white rounded-lg px-4 py-2  mx-3 mt-4 mb-6  translate-x-20'>Sign Up</button>
          </form>
        
          </div>
          </div>
        
      </div>
  )
}

export default Signup_main