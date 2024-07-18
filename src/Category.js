import React from 'react'
 import Input from './com/Input'
  const Category = ({ handleChange }) => {
  return (
    <div> 
        <div className='bar colo'>
     
     <div className='  border-0   container-fluid '>
<h3>Brands</h3>
        
              
 <ul>
  <li>
   <Input  handleChange={handleChange} 
           value="All accessories"
          title="All accessories"
           name="test"/>
   <Input    handleChange={handleChange}
          value="Nexis"
          title="Nexis"
          name="test"/>
   <Input    handleChange={handleChange}
          value="Omini"
          title="Omini"
          name="test"/>
   <Input    handleChange={handleChange}
          value="Ventage"
          title="Ventage"
          name="test"/>
   <Input    handleChange={handleChange}
          value="Apex"
          title="Apex"
          name="test"/>

  </li>
  
</ul>
</div>
    </div>
    </div>
  )
}

export default Category




 