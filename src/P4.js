import React, { useState,useRef,useEffect } from 'react'
import { Link } from 'react-router-dom'
import products from './data3';
import './P1.css'

import A from './A'
 import Card from './com/Card';
 import Nav from './Nav';
import Select from './Select';
const  P4 = () => {

 const [selectedCategory, setSelectedCategory] = useState(null);
     
 
 // ----------- Input Filter -----------
 const [query, setQuery] = useState("");
  
 const handleInputChange = (event) => {
   setQuery(event.target.value);
 };

 const filteredItems = products.filter(
   (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
 );

 // ----------- Radio Filtering -----------
 const handleChange = (event) => {
   setSelectedCategory(event.target.value);
 };

 // ------------ Button Filtering -----------
 const handleClick = (event) => {
   setSelectedCategory(event.target.value);
 };

 function filteredData(products, selected, query) {
   let filteredProducts = products;

   // Filtering Input Items
   if (query) {
     filteredProducts = filteredItems;
   }

   // Applying selected filter
   if (selected) {
     filteredProducts = filteredProducts.filter(
       ({ category, color, Featured, newPrice, name,Price,Arrival,Brand,All,Rs }) =>
         Featured === selected ||
        Price === selected ||
        Arrival === selected ||
         Brand === selected ||
          All === selected  ||
          color === selected ||
          Rs === selected

     );
   }
    return filteredProducts.map(
    ({ id,img, name, star, reviews, prevPrice, newPrice,description,value,Price }) => (
      <div className='nav-item2'>

      <Link to={`/product3/${id}`}>
      <a href='#'>

        <Card
        key={id}
        id={id}
           img={img[0]}
           name={name}
       star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          description={description}
          value={value}
          Price={Price}

             />
        </a>
       </Link>
          </div>
        
          
        
       
      )
    );
 }


 const result = filteredData(products, selectedCategory, query);
 
   return (
    <div>
      <div>
 
     <  Nav query={query} handleInputChange={handleInputChange} handleClick={handleClick}  />
     <  A  result={ result} handleChange={handleChange}  />

          

                     
  
        
     </div>
    
    </div>
  )
}

export default  P4



 