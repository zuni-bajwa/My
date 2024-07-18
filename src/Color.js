import React from 'react'
import Input from './com/Input'
import './Color.css'
 const Color = ({ handleChange }) => {
  return (
    <div> 
        <div className='colo'>
        <h3>Color</h3>

 <ul>
  <li>
  <Input handleChange={handleChange}
          value="All accessories"
          title="All accessories"
          name="test1"
          color=" "/>
   <Input   handleChange={handleChange}
          value="Black"
          title="Black"
          name="test1"
          color="Black"/>
   <Input   handleChange={handleChange}
          value="Silver"
          title="Silver"
          name="test1"
          color="Silver"/>
   <Input   handleChange={handleChange}
          value="Blue"
          title="Blue"
          name="test1"
          color="Blue"/>
   <Input   handleChange={handleChange}
          value="White"
          title="White"
          name="test1"
          color="White"/>
   

  </li>
  
</ul>
</div>
    </div>
  )
}

export default Color
