import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Testimonial from '../components/Testimonial/Testimonial';
import './ProductListing.css';
import Footer from '../components/Footer';


const ProductListing = () => {
  return (
    <div className='productPage'>
      <Hero/>
      <Popular/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default ProductListing;