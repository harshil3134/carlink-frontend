import React from 'react'
import Heading from '../Heading'
import Input_box from '../signup/Input_box'
import { Link } from 'react-router-dom'

function Login_main_page() {
  return (
    <div className="h-screen flex w-full bg-my_bg bg-[url('/images/Registration_bg.png')]" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
      <Heading/>
      <div className=' h-screen  ' 
      >

      
        <div className='m-4 bg-orange-400 h-1/2 px-14 ml-48 mt-52 rounded-3xl ' >
        <h1 className='text-4xl font-bold text-center py-6'>Login In</h1>
        <form>
    
        <Input_box label="Email id" type="email" />
        <Input_box label="Password" type="password" />

    <div className='font-bold text-lg mt-5'>
    <Link to="/signup">Sign up</Link>
    <Link to="/" className='pl-28' >Forget Password</Link>
      </div>   
      <button className='bg-white rounded-lg px-5 py-2 mx-1 mt-12 translate-x-28'>Log in</button>
        </form>
      
        </div>
        </div>
      
    </div>
)
}

export default Login_main_page