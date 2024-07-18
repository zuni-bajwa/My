
import React from 'react';
import { useLocation } from 'react-router-dom';
import './A.css'
 import P1 from './P1';
import P2 from './P2';
import P3 from './P3';
import P4 from './P4';
import P5 from './P5';
import P6 from './P6';
import P7 from './P7';
import P8 from './P8';
import P9 from './P9';
import P10 from './P10';
import P11 from './P11';
import P12 from './P12';
import P13 from './P13';
import P14 from './P14';
import P15 from './P15';
import P16 from './P16';
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  
const  Add = () => {
    const query = useQuery().get('query')
    const category = useQuery().get('category');
    const location = useQuery().get('location');

     const renderPage = () => {
      
    if (category  ) {
      if (category.toLowerCase() === '' ) {
        return ' ';
      }
      if (category.toLowerCase() === 'Electronics' && location.toLowerCase() === 'pakistan' ) {
        return <P1 />;
      }
      if (category.toLowerCase() === 'Electronics' && location.toLowerCase() === 'pakistan' ) {
        return <P2 />;
      }
      if (category.toLowerCase() === 'Electronics' && location.toLowerCase() === 'china' ) {
        return <P3 />;
      }
      if (category.toLowerCase() === 'Electronics' && location.toLowerCase() === 'pakistan' ) {
        return <P4 />;
      }
      if (category.toLowerCase() === 'Mens Fashion'  && location.toLowerCase() === 'pakistan') {
        return <P5/>;
      }
      if (category.toLowerCase() === 'Mens Fashion'  && location.toLowerCase() === 'china') {
        return <P6/>;
      }
      if (category.toLowerCase() === 'Mens Fashion'  && location.toLowerCase() === 'pakistan') {
        return <P7/>;
      }
      if (category.toLowerCase() === 'Mens Fashion'  && location.toLowerCase() === 'pakistan') {
        return <P8/>;
      }


      if (category.toLowerCase() === 'Computers'  && location.toLowerCase() === 'china') {
        return <P9/>;
      }
      if (category.toLowerCase() === 'Computers'  && location.toLowerCase() === 'pakistan') {
        return <P10/>;
      }
      if (category.toLowerCase() === 'Computers'  && location.toLowerCase() === 'pakistan') {
        return <P11/>;
      }
      if (category.toLowerCase() === 'Computers'  && location.toLowerCase() === 'china') {
        return <P12/>;
      }










      if (category.toLowerCase() === 'Girls fashion'  && location.toLowerCase() === 'pakistan') {
        return <P13/>;
      }
      if (category.toLowerCase() === 'Girls fashion'  && location.toLowerCase() === 'pakistan') {
        return <P14/>;
      }
      if (category.toLowerCase() === 'girls fashion'  && location.toLowerCase() === 'china') {
        return <P15/>;
      }
      if (category.toLowerCase() === 'girls fashion'  && location.toLowerCase() === 'pakistan') {
        return <P16/>;
      }
      // Add more conditions as needed
    }
    if (query) {
      switch (query.toLowerCase()) {
        case 'phones':
          return < P1 />;
          case 'phones':
            return < P2 />;
            case 'phones':
              return < P3 />;
              case 'phones':
                return < P4 />;




        case 'laptop':
          return <  P5 />;
          case 'laptop':
            return <  P6 />;
            case 'laptop':
              return <  P7 />;
              case 'laptop':
                return <  P8 />;
          case 'watches':
            return < P9 />;
            case 'watches':
              return < P10 />;
              case 'watches':
                return < P11 />;
                case 'watches':
                  return < P12 />;

          case 'shoes':
            return <  P13 />;
            case 'shoes':
              return <  P14 />;
              case 'shoes':
                return <P15 />;
                case 'shoes':
                  return <  P16 />;
         default:
          return (
            <div>
              <h1>Search Results</h1>
              <br />
              <p>No matching page found for: {query}</p>
            </div>
          );
      }
    }
 
     return (
      <div className='no '>
        <div>
        <h1>Search Results</h1> 
        
        <br />
      
        <p>No matching page found for the provided filters.</p>
          </div> 
      </div>
    );
  };

  return (
    <div>
       {renderPage()}
    </div>
  );
};

export default  Add




 


















 