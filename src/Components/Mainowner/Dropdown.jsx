import React from 'react'
import './Dropdown.css'
function Dropdown({ label, options, selectedValue, handleChange }) {
  return (
    
        <div className="dropdown">
          <label htmlFor={label}>{label}: </label>
          <select id={label} name={label} value={selectedValue} onChange={handleChange}>
          <option value="">Select</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
  
}

export default Dropdown
  