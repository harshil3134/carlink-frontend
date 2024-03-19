import React from 'react'

function Input_box(
    {
      style,
        label,
        type,
pattern,
placeholder,
maxlength
    }
) {
  return (
    <div>
        
<div className='text-2xl text-black py-1'>
    <div>
    <label htmlFor={label} className='font-bold'>{label}:</label>
    </div>
    <div className='pt-2 pb-3'>
    <input type={type} id={label}  pattern={pattern} placeholder={placeholder}  maxLength={maxlength} className={`border-l-emerald-400 rounded-md ${style}`} required />
    </div>  
   
</div>
    </div>
  )
}

export default Input_box