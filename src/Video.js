 import React from 'react'
 import './Video.css'
 import video1 from './img/video1.mp4'
  import { Link } from 'react-router-dom';
  const Video = () => {
   return (
     <div>
        <div className='main'>
        <div className="overlay"></div>
        <video src={video1} autoPlay loop muted />
         
        <div className="content">
            <h1>Explore amamzing products!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>
          Voluptatem vero ratione vitae dicta explicabo!
            </p>
            <Link to={'/'}>
            <button className='buy'>Buy Now</button>
            </Link>
            
        </div> 
    </div>
    </div>
    )
 }
 
 export default Video
 