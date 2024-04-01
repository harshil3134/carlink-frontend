import React from 'react'
import './Input_reg.css'
function Input_reg( {
    value,
    style,
    label,
    type,
    onchange,
    pattern,
    placeholder,
    maxlength
      }) {
  return (
    <div>
    <div> 
  
  <div className=''>
<div className='input_reg_label'>
<label htmlFor={label} style={{marginTop:"5px"}}>{label}:</label>
</div>
<div >
<input type={type}  value={value} id={label} onChange={onchange} pattern={pattern} placeholder={placeholder}  maxLength={maxlength} style={{height:"25px" }} className='input_reg_field'required />
</div>  

</div>
</div>

</div>
  )
}

export default Input_reg