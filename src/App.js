import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product2 from './Product2';
import Home from './Home';
import Top from './Top';
  import Product3 from './Product3';
 import Footer from './Footer';
import './Responsive.css'
 import Video from './Video';
 import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Cart from './Cart';
 import Haed from './Haed'
 import Add from './Add';
import P1 from './P1';
import P2 from './P2';
import List from './List';
import Login from './Login'
import Product from './Product';
import { Provider } from 'react-redux';
import { store } from './toll/Store';
import Product1 from './Product1';
import P3 from './P3';
import P4 from './P4';
import P8 from './P8';
import P7 from './P7';
import P6 from './P6';
import P5 from './P5';
import Product4 from './Product4';
import Product5 from './Product5';
import Product6 from './Product6';
import Product7 from './Product7';
import P9 from './P9';
import P10 from './P10';
import P11 from './P11';
import P12 from './P12';
import P13 from './P13';
import P14 from './P14';
import P15 from './P15';
import P16 from './P16';
import Product8 from './Product8';
import Product9 from './Product9';
import Product10 from './Product10';
import Product11 from './Product11';
import Product12 from './Product12';
import Product13 from './Product13';
import Product14 from './Product14';
import Product15 from './Product15';
 const App = () => {
    return (
     <>
   
 <Router>
 <Top />
   <Provider store={store}>
    
 <Haed/>
  
<Routes>
 
<Route path="/" element={<List/>} />
 
<Route path="/search" element={< Add />} />
<Route path="/p1" element={< P1/>} />
<Route path="/p2" element={< P2/>} />
<Route path="/p3" element={< P3/>} />
<Route path="/p4" element={< P4/>} />
<Route path="/p5" element={< P5/>} />
<Route path="/p6" element={< P6/>} />
<Route path="/p7" element={< P7/>} />
<Route path="/p8" element={< P8/>} />
<Route path="/p9" element={< P9/>} />
<Route path="/p10" element={< P10/>} />
<Route path="/p11" element={< P11/>} />
<Route path="/p12" element={< P12/>} />
<Route path="/p13" element={< P13/>} />
<Route path="/p14" element={< P14/>} />
<Route path="/p15" element={< P15/>} />
<Route path="/p16" element={< P16/>} />
 
<Route path="/product/:productId" element={< Product/>} />
  <Route path="/product1/:productId" element={< Product1/>} />
  <Route path="/product2/:productId" element={< Product2/>} />
  <Route path="/product3/:productId" element={< Product3/>} />
  <Route path="/product4/:productId" element={< Product4/>} />
  <Route path="/product5/:productId" element={< Product5/>} />
  <Route path="/product6/:productId" element={< Product6/>} />
  <Route path="/product7/:productId" element={< Product7/>} />
  <Route path="/product8/:productId" element={< Product8/>} />
  <Route path="/product9/:productId" element={< Product9/>} />
  <Route path="/product10/:productId" element={< Product10/>} />
  <Route path="/product11/:productId" element={< Product11/>} />
  <Route path="/product12/:productId" element={< Product12/>} />
  <Route path="/product13/:productId" element={< Product13/>} />
  <Route path="/product14/:productId" element={< Product14/>} />
  <Route path="/product15/:productId" element={< Product15/>} />
 
  <Route path="/cart" element={< Cart/>} />
  <Route path="/login" element={<Login/>} />

 </Routes>
 <Footer />
</Provider>

 </Router>
 
 </>  
  
  )
}

export default App
