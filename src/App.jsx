import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './Pages/ProductListing';
import Product from './Pages/Product'; 
import Cart from './Pages/Cart'; 
import Checkout from './Pages/Checkout'; 
import './App.css';


function App() {
  return (
    <BrowserRouter basename="/belle-app">
    <Header />
    <Routes>
      <Route path='/' element={<ProductListing />}/>
      <Route path='/shop' element={<ProductListing/>}/>
      <Route path='/contact' element={<ProductListing/>}/>
      <Route path='/about' element={<ProductListing/>}/>
      <Route path='/ProductListing' element={<ProductListing/>}/>
      <Route path=':productId' element={<Product/>}/>

      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />

    </Routes>
    
  </BrowserRouter>
);
}

export default App;
