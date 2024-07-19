 import React from 'react'
 import './Cart.css'
 import { Link } from 'react-router-dom'
 import { useDispatch } from 'react-redux'
 import { useSelector } from 'react-redux'
 import { removeto } from './toll/Slice'
 const Cart = () => {
   const total = useSelector((state) => state.cart.total);
  const orderTotal = useSelector((state) => state.cart.orderTotal);
    const cartitem = useSelector(state=>state.cart.cart);
    const dispatch = useDispatch();
    return (
       
     <> 
 
     <div>
 
      {
        cartitem.map(item=>{
          return(
          
            <section class="cart1" >
            <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
               <div class="col">
                   <p><span class="h2">Shopping Cart</span></p>
                    <div class="card mb-4">
                     <div class="card-body p-4">
           
                       <div class="row align-items-center">
                        
                         <div class="col-md-2">
                       <img src={item.img}   class="img-fluid" alt="Generic placeholder image"/>
                            
                         </div>
                         <div class="col-md-2 d-flex justify-content-center">
                           <div>
                             <p class="small text-muted mb-4 pb-2"> {item.name} </p>
                             <p class="lead fw-normal mb-0">Quantity: {item.quantity} </p>
                           </div>
                         </div>
                         <div class="col-md-2 d-flex justify-content-center">
                           <div>
                             <p class="small text-muted mb-4 pb-2">   Quantity: </p>
                             <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2"  ></i>
                            {item.quantity} </p>
                           </div>
                         </div>
                         <div class="col-md-2 d-flex justify-content-center">
                           <div>
                             <p class="small text-muted mb-4 pb-2">Price </p>
                             <p class="lead fw-normal mb-0">${item.price}</p>
                           </div>
                         </div>
                         <div class="col-md-2 d-flex justify-content-center">
                           <div>
                             <p class="small text-muted mb-4 pb-2"> Total</p>
                             <p class="lead fw-normal mb-0">  ${total.toFixed(2)} </p>
                           </div>
                         </div>
                         <div class="col-md-2 d-flex justify-content-center">
                           <div>
           
                           <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-light btn-lg me-2"  onClick={()=>dispatch(removeto({
               id: item.id,
              
             } ))} >
                
             
                              remove
                             </button>
                           
                           </div>
                        </div>
                        </div>
                        </div>
                         </div>
 
                   <div class="card mb-5">
                     <div class="card-body p-4">
           
                       <div class="float-end">
                         <p class="mb-0 me-5 d-flex align-items-center">
                           <span class="small text-muted me-2">Order total:</span> <span
                             class="lead fw-normal">${orderTotal.toFixed(2)} </span>
                         </p>
                       </div>
           
                     </div>
                   </div>
    
                 </div>
               </div>
             </div>
           </section>
          )
             
        }
          )
        }
<div className="d-flex justify-content-center continue">
   <Link to={'/'}>
   <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn  btn-lg me-2">Continue shopping</button>
   </Link>
   </div>
     </div>
    </>
    )
  }
              
 export default Cart
 