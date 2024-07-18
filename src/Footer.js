import React from 'react'
import './Footer.css'
import { MdMenu, MdClose } from 'react-icons/md';
import { useState,useEffect,useRef } from 'react';

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
 
    <div className='footer'>
      <div className='db'>
        <div className='container-fluid'>
<div className='row'>
    <div className='col'>
    <div className='box d-flex align-items-center w-100'>
  <span>
  <i class="fas fa-folder"></i> 
  </span>
  <div className='info'>
 <h4>best price and offer 
     </h4>
 <p> Explore more accessories </p>
  </div>
</div>
   

</div>
<div className='col'>
    <div className='box d-flex align-items-center w-100'>
  <span>
  <i class="fas fa-palette"></i>
  </span>
  <div className='info'>
 <h4>best price and offer 
     </h4>
 <p>Explore diffent colors accessories</p>
  </div>
</div>
   

</div>
<div className='col'>
    <div className='box d-flex align-items-center w-100'>
  <span>
  <i class="fas fa-dollar-sign"></i>
  </span>
  <div className='info'>
 <h4>Best category and offer 
     </h4>
 <p>  order 50$ or more </p>
  </div>
</div>
   

</div>
 
   

 
 </div>
        </div>
       
      </div>


      <footer>

    <div className='container-fluid'>
    <div className='row'>
     
<div className='col-md-12 part2'>
                                <div className='row'>
                                    <div className='col '>
                                        <h3 className='img1'>Traders</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0 ">
                                            <li>  <i class="fab fa-facebook"></i>            Facebook </li>
                                            <li><Link to="#"> <i class="fab fa-instagram"></i> Instagram 
                                            </Link></li>
                                            <li><Link to="#"> <i class="fab fa-youtube"></i>  Youtube
                                            </Link></li>
                                            <li><Link to="#"> <i class="fab fa-twitter"></i>  Twitter
                                            </Link></li>
                                            <li>
                                                <Link to="#">
                                                 <i class="fab fa-linkedin"></i>  Linkedin
                                                    </Link> 
                                        
                                            </li>
                                         </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Contact</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">1234-1236-123</Link></li>
                                            <li><Link to="#"> 1234-526-456</Link></li>
                                            <li><Link to="#"> house no 8,gulberg,lahore</Link></li>
                                            <li><Link to="#"> house no 8,,gulberg,lahore </Link></li>
                                            <li><Link to="#"> mmmmm@gmail.com</Link></li>
                                          </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>About</h3>
                                        <ul class="footer-list  mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                         </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Benefits</h3>
                                        <ul class="footer-list  mb-sm-5 mb-md-0">
                                            <li><Link to="#">Low price</Link></li>
                                            <li><Link to="#">High quality</Link></li>
                                            <li><Link to="#"> Beautiful accessories</Link></li>
                                            <li><Link to="#">Free shipping</Link></li>
                                            <li><Link to="#">Full time support</Link></li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
 
    </div>
    </div>
</footer>

    </div>
    </>
  
 
  )
}

export default Footer
