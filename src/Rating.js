import React from 'react'
 import Input from './com/Input'
    const  Rating = ({ handleChange }) => {
  return (
    <div> 
        <div className='bar colo'>
     
     <div className='  border-0   container-fluid '>
<h3>Ratings</h3>
        
              
 <ul>
  <li>
   <Input handleChange={handleChange} 
           value="All accessories"
          title="All accessories"
           name="test"/>
   <Input  handleChange={handleChange}
          value="Nexis"
          title="5 stars"
          name="test"/>
   <Input  handleChange={handleChange}
          value="Omini"
          title="4 stars & above"
          name="test"/>
   <Input handleChange={handleChange}
          value="Ventage"
          title='3 stars & above'
          name="test"/>
   <Input handleChange={handleChange}
          value="Apex"
          title="2 stars & above"
          name="test"/>

  </li>
  
</ul>
</div>
    </div>
    </div>
  )
}

export default Rating



 