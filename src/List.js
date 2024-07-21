import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
  import p1 from './img/p1.jpg'
  import Video from './Video'
 import p2 from './img/p2.jpg'
 import p3 from './img/p3.jpg'
 import p4 from './img/p4.jpg'
 import l1 from './img/l1.jpg'
 import l2 from './img/l2.jpg'
 import l3 from './img/l3.jpg'
 import l4 from './img/l4.jpg'
 import w1 from './img/w1.jpg'
 import w2 from './img/w2.jpg'
 import w3 from './img/w3.jpg'
 import w4 from './img/w4.jpg'
  import shoes6 from './img/shoes6.jpg'
 import whites3 from './img/whites3.jpg'
 import blacks5 from './img/blacks5.jpg'
 import blacks6 from './img/blacks6.jpg'


 import './List.css'
const List = () => {
  const [ width ,setwidth] = useState(window.innerWidth );
  useEffect(() => {
    const handleResize = () => {
        setwidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
}, []); 
  return (

<>
<Video />
<div className='listing'>
 

       <h2 className='access column'>Our top accessories for you </h2>
       <div class="row row-cols-1 row-cols-md-4  g-3 row-cols-sm-2 list">
        
            <div class="col">
              <div class="card ">
                <Link to='/p1'>
                <img src= { p1} class="card-img-top" alt="..."  />
                </Link>
               
                <button class="price">USD 2.00</button>
       
              </div>
            </div>
            <div class="col">
              <div class="card ">
              <Link to='/p2'>
                <img src= {p2} class="card-img-top" alt="..."  />
                </Link>
                 <button class="price">USD 2.00</button>
       
              </div>
              </div>

            
              <div class="col">
              <div class="card ">
              <Link to='/p3'>
                <img src= {p3} class="card-img-top" alt="..."  />
                </Link>
                <button class="price">USD 2.00</button>
       
              </div>
            </div>
            <div class="col">
              <div class="card ">
              <Link to='/p4'>
                <img src= {p4} class="card-img-top" alt="..."  />
                </Link>
                <button class="price">USD 2.00</button>
       
              </div>
              </div>
              <div class="col">
              <div class="card ">
              <Link to='/p5'>

                <img src= { w1} class="card-img-top" alt="..."  />
                </Link>

                <button class="price">USD 2.00</button>
       
              </div>
            </div>
            <div class="col">
              <div class="card ">
              <Link to='/p6'>

                <img src= {w2} class="card-img-top" alt="..."  />
                </Link>

                <button class="price">USD 2.00</button>
       
              </div>
            </div>
            <div class="col">
              <div class="card ">
              <Link to='/p7'>

                <img src= {w3} class="card-img-top" alt="..."  />
                </Link>

                <button class="price">USD 2.00</button>
       
               </div>
            </div>
            <div class="col">
              <div class="card ">
              <Link to='/p8'>

                <img src= {w4} class="card-img-top" alt="..." />
                </Link>

                <button class="price">USD 2.00</button>
               </div>
            </div>
            <div class="col">
              <div class="card ">
                <Link to='/p9'>
                <img src= {l4} class="card-img-top" alt="..."  />
                </Link>
               
                <button class="price">USD 2.00</button>
       
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <Link to='/p10'>
                <img src= { l3} class="card-img-top" alt="..."  />
                </Link>
               
                <button class="price">USD 2.00</button>
       
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <Link to='/p11'>
                <img src= { l2} class="card-img-top" alt="..."  />
                </Link>
               
                <button class="price">USD 2.00</button>
       
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <Link to='/p12'>
                <img src= { l1} class="card-img-top" alt="..."  />
                </Link>
               
                <button class="price">USD 2.00</button>
       
              </div>
            </div>
          </div>
          {
                     window.innerWidth<767 &&
                   <div>
                     <div class="row row-cols-1 row-cols-md-4  g-3 row-cols-sm-2 list">
        
        <div class="col">
          <div class="card ">
            <Link to='/p13'>
            <img src= {blacks5} class="card-img-top" alt="..."  />
            </Link>
           
            <button class="price">USD 2.00</button>
   
          </div>
        </div>
        <div class="col">
          <div class="card ">
          <Link to='/p14'>
            <img src= {whites3} class="card-img-top" alt="..."  />
            </Link>
             <button class="price">USD 2.00</button>
   
          </div>
          </div>

        
          <div class="col">
          <div class="card ">
          <Link to='/p15'>
            <img src= {shoes6} class="card-img-top" alt="..."  />
            </Link>
            <button class="price">USD 2.00</button>
   
          </div>
        </div>
        <div class="col">
          <div class="card ">
          <Link to='/p16'>
            <img src= {blacks6} class="card-img-top" alt="..."  />
            </Link>
            <button class="price">USD 2.00</button>
   
          </div>
          </div>
          </div>
                    </div>
                  }
        <div className='ps'>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='row slider'>
        <div className='col-3'>
        <Link to='/p13'>
        <img src={blacks5} class="d-block w-100 " alt="..."/>
      </Link>
        </div>
        <div className='col-3'>
        <Link to='/p14'>
        <img src={whites3} class="d-block w-100" alt="..."/>
        </Link>
        </div>
        <div className='col-3'>
        <Link to='/p15'>
        <img src={shoes6} class="d-block w-100" alt="..."/>
        </Link>
        </div>
        <div className='col-3'>
        <Link to='/p16'>
        <img src={blacks6} class="d-block w-100" alt="..."/>
        </Link>
        </div>
      </div>
       
    </div>
    <div class="carousel-item ">
      <div className='row'>
        <div className='col-3'>
        <Link to='/p13'>
        <img src={blacks5} class="d-block w-100" alt="..."/>
        </Link>
        </div>
        <div className='col-3'>
        <Link to='/p14'>
        <img src={shoes6} class="d-block w-100" alt="..."/>
        </Link>
        </div>
        <div className='col-3'>
        <Link to='/p15'>
        <img src={ whites3} class="d-block w-100" alt="..."/>
        </Link>
        </div>
        <div className='col-3'>
        <Link to='/p16'>
        <img src={shoes6} class="d-block w-100 " alt="..."/>
        </Link>
        </div>
      </div>
       
    </div>
   
  </div>
  <button class="carousel-control-prev btn1" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
  <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>

     <span class="visually-hidden ">Previous</span>
  </button>
  <button class="carousel-control-next btn1" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
  <span class="carousel-control-next-icon icon" aria-hidden="true"></span>

     <span class=" visually-hidden ">Next</span>
  </button>
</div>
        </div>
     </div>
  
</>
 
    


   
   
  )
}

export default List
