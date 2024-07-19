 import React from 'react'
 import Category  from './Category'
import { MdMenu, MdClose } from 'react-icons/md';
import { useState,useEffect,useRef } from 'react';
 import './A.css'
import Color  from './Color'
import Price  from './Price'
import Show from './Show'
import Rating from './Rating';

 const A = ({handleChange,result}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
   return (
    <> 
    <div className='ff'>
    
      <div id="mySidebar " className={`sidebar shadow ${isOpen ? 'open' : 'closed'}`} >
          <div class="sidebar-header">
             <h3>Filters</h3>
            <button class="toggle-btn"  onClick={toggleNav} >
                <i class="fas fa-bars"></i> 
            </button>
        </div>
        <div className='ion'>
        <i class="fas fa-folder"></i> <span> < Category handleChange={ handleChange }/></span> 

        </div>
        <div className='ion'>
        <i class="fas fa-palette"></i> <span> < Color handleChange={ handleChange }/></span> 

        </div>
        <div className='ion'>
        <i class="fas fa-dollar-sign"></i> <span>< Price handleChange={ handleChange }/>  </span> 

        </div>

        <div className='ion'>
        <i className="fas fa-star"></i> <span><Rating handleChange={ handleChange }/>  </span> 

        </div>
      

      </div>
  
      <div id="main"  className={`main-content ${isOpen ? 'shifted' : ''}`}>
 
      <Show result={result}/>

      </div>
    </div>
     
    </>
   )
 }
 
 export default A
 









 














  
 




