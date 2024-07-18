
 import React from 'react'
 import './Input.css'
 const Input = ({handleChange,value,name,title}) => {
  return (
    <div>
     <label className="sidebar-label-container">
<input onChange={handleChange} type="radio" value={value} name={name} />

<span className="checkmark"></span>

{title}
</label> 
    </div>
  )
}

export default Input
 