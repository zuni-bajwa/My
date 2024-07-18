import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Responsive.css'

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Button from '@mui/material/Button';
import { FaUser, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa'; // Importing FontAwesome icons
import { MdAccountCircle, MdShoppingCart, MdLocationOn } from 'react-icons/md'; // Importing Material Design icons

 import './Haed.css'
 const Haed = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [drops ,setdrops] = useState( false);
    const [location, setLocation] = useState('');

     const navigate = useNavigate();
  

     function  dropee(params) {
        setdrops(!drops);
          
  
      }
    const handleSearch = () => {
      const searchParams = new URLSearchParams({
        query,
        category,
        location
      });
      navigate(`/search?${searchParams.toString()}`);
    };
  
  const cartitem = useSelector( state =>state.cart.cart);



   
 return (
  
  <div  >
  <div class="main-navbar shadow-sm  sticky-top ">
     <div class="top-navbar">
         <div class="container-fluid">
             <div class=" row">
                 <div class="col-md-3  my-auto   d-none  d-sm-none  d-md-block d-lg-block   img1">
                    <div >
                        <div className='nav-item1'>
                        <Link to={'/'}>
                        <a href='#'>traders</a>
                     
                         
                        </Link>
                       
                        </div>
        
                      </div>
                   </div>
                
                 <div class="col-md-5 my-auto">
                 
                   
                          
                         <div class=" input-group">
                            
                                <select  onChange={(e) => setCategory(e.target.value)}>
                                <option value="">All categories</option>
                                 <option value="electronics">Electronics</option>
                                 <option value="mens fashion">Mens fashion</option>
                                 <option value="computers">Computers</option>
                                 <option value="girls fashion">Girls fashion</option>
                                </select>
                            
                             
                               
                              <input type="search" placeholder="Search your product" class=" form-control "   value={query}
        onChange={(e) => setQuery(e.target.value)}  />
                              
                             <button class="btn " type="submit " onClick={handleSearch} >
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                                
                             </button>
                         </div>
                       
                  
                       
                 </div>
                 <div class="col-md-4  my-auto">

                     <ul class=" nav justify-content-end">
                   
                   
                

                        
                         <li className='nav-item d-flex align-items-center'>
                          
                            <select  className='location'   onChange={(e) => setLocation(e.target.value)}  >
                        <option value="">Your Location</option>
        <option value="pakistan">Pakistan</option>
         <option value="china">China</option>
                         </select>   
                         <Link to={'/login'}> 
                         <li class="nav-item">
                          
                             <a class="nav-link" href="#" >
                           < FaUser/>  
                           

                              </a>
                            

                         </li>
                         </Link> 
                       
                         </li>
                         
 
                       <Link to={'/cart'}> 
                         <li class="nav-item">
                          
                             <a class="nav-link" href="#" >
                           <FaShoppingCart />  
                             <span className='badge rounded-circle  '><span className='fo d-flex align-items-center justify-content-center'>
    {cartitem.length}
    </span></span>

                              </a>
                            

                         </li>
                         </Link>
                         
                         

                        
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     <nav class="navbar  navbar-expand-lg">
         <div class="container-fluid nav-item1">
         <Link to={'/'}>
             <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none img1" href="#">
                 traders
             </a>
             </Link>
           
             <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"> </span>
             </button>
             <div class="collapse navbar-collapse " id="navbarSupportedContent"  >
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                     <Link to={'/'}>
                        <a class="nav-link" href="#"> Home </a>
                        </Link>
                     </li>
                     
                     <li class="nav-item">
                     <Link to={'/p1'}>
                         <a class="nav-link" href="#">New Arrivals</a>
                         </Link>
                     </li>
                     <li class="nav-item">
                     <Link to={'/p2'}>
                         <a class="nav-link" href="#">Featured Products</a>
                         </Link>
                     </li>
                     <li class="nav-item">
                     <Link to={'/p4'}>
                         <a class="nav-link" href="#">Electronics</a>
                         </Link>
                     </li>
                     <li class="nav-item">
                     <Link to={'/p8'}>
                         <a class="nav-link" href="#" >Mens Fashions</a>
                         </Link>
                     </li>
                    
                     <li class="nav-item">
                     <Link to={'/p13'}>
                         <a class="nav-link" href="#" >Girls Fashions</a>
                         </Link>
                     </li>
                 </ul>
             </div>
         </div>
     </nav>
 </div>
  </div>
 )
 }
 export default Haed;





















     

      
































































