import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import products from "./data7";
import Rating from '@mui/material/Rating';
  import { addto } from "./toll/Slice";

  import './Detail.css'
const Product7 = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(product ? product.img[0] : null);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleImageClick = (img) => {
    setMainImage(img);
  };
  
  return (
<> 
<div class=" d-flex justify-content-center align-items-center h-100 detai ">
<p><span class="h2">Detail Page</span></p>

                    
   </div> 
    <div class="card mb-3 all"  >
     
  <div class=" row g-0">
    <div class=" col-md-6">
      <div className="details ">
        <div className="big-img">
        < img src={mainImage}  className="zoom"/>
           


        </div>
      
      </div>
   
            
      </div>
    <div class=" col-md-6 box">

      <div class="card-body row">
        <h2 class="card-title">{product.name} </h2>
        <p class="card-text">{product.description} </p>
        <div class="product-price1"><small>{product.prevPrice } </small>{product.newPrice } </div>
        <Rating readOnly value={product.value}/>


       
      </div>
      <div className="thumb">
        {product.img.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.name}
            onClick={() => handleImageClick(img)}
            className=" img-fluid rounded-start "
            
            
            />
       ))}
        
        </div>
        <button className="cart"
        onClick={() => dispatch(addto({
          id: product.id,
          img: mainImage,
          name: product.name,
          description: product.description,
          price: product.newPrice, // Ensure this is a number

        }))}
       >
        Add to cart
      </button>
    </div>
     
  </div>
</div>

</>


      )
    }
    export default Product7


 