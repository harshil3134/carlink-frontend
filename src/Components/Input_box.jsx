import React from 'react'
import "./Input_box.css"
function Input_box(
    {
    value,
    onChange,
    label,
    type,
    pattern,
    placeholder,
    maxlength
      }
) 
{
  return (
    <div>
          <div> 
        
        <div className=''>
    <div className='input_box_label'>
    <label htmlFor={label} style={{marginTop:"5px"}}>{label}:</label>
    </div>
    <div >
    <input type={type}  value={value} id={label} onChange={onChange} pattern={pattern} placeholder={placeholder}  maxLength={maxlength} style={{height:"25px" }} className='input_box_field' required />

    </div>  
   
</div>
    </div>

    </div>
  )
}


export default Input_box