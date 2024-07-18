import { useState } from 'react'
import React from 'react'
import Button from '@mui/material/Button';
import './Top.css'
const Top = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Define a function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
    {isVisible && (
      <div className='top'>
        <div></div>
      <div className='d-flex align-items-center justify-content-center last'> Last-minute shopping for Dad? Send his gift instantly with a GIFT TEASER! 🎁✨ </div>
       <Button onClick={toggleVisibility} > 
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
       
       </Button>
    </div>
    )}
     
    
    </div>
    
    

    
  )
}

export default Top
