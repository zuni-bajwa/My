import { BsFillBagFill } from "react-icons/bs";
import './Card.css'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";
const Card = ({ id,img, name, star, reviews, prevPrice, newPrice,description,value }) => {
  

  return (
    <>
     <div class="card mb-2  product-sum "  >
  <div class="row g-0">
    <div class="col-md-3">
    
     <img src={img} alt={ name} className="card-img img-fluid rounded-start" />
   
      </div>
    <div class="col-md-9 information">
      <div class="card-body d-block brand">
      <Link>
      <h3 className="card-title nav-item2">
          <a href="#">{ name} </a>
       
        </h3>
        </Link>
        <p className="card-text">{description}</p>
        <Rating readOnly value={value}/>
        <div class="product-price1"><small>{prevPrice } </small>{newPrice } </div>
        <span className='badge'>new</span>
     <Button variant="contained" color="secondary" className='btnn ml-auto'>
 add
</Button>
       </div>
       </div>
       </div>
       </div>
       </>
  );
};
export default Card;