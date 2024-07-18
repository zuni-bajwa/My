import React from 'react'
import Input from './com/Input'
import './Price.css'
 const Price  = ({handleChange} ) => {
  return (
    <div> 
        <div className='colo'>
        <h3>Price</h3>

<ul>
  <li>
   <Input handleChange={handleChange} 
   value="All accessories"
   title="All accessories" />
   <Input
          handleChange={handleChange}
          value="$0 - 300"
           title="$0 - 300"
          name="test2"
        />

        <Input
          handleChange={handleChange}
             value="$301 - 500"
           title="$301 - 500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value= "$501 - 3000"
           title="$501 - 3000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="Over $3000"
          title="Over $3000"
          name="test2"
        />

  </li>
  
</ul>
</div>
    </div>
  )
}

export default Price
