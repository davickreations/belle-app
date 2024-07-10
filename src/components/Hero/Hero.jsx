import React from "react";
import "./Hero.css";
import best_seller from "../../assets/BestSeller.png";
import all_Products from "../../assets/allProducts.png";
import jeans from "../../assets/jeans.png";

const Hero = () => {
  return (
    <div>
      <div className="bgImage"></div>
      <div className="content">
        <h1>Handcrafted Jewelry That Tells Your Unique Story</h1>
        <p>
          Explore our exclusive collection of artisanal jewelry, meticulously
          crafted to add a touch of sophistication to every moment. From elegant
          necklaces to stunning custom pieces, find the perfect adornment to
          celebrate your individuality.
        </p>
        <button className="btn">Shop now</button>
      </div>

      <div className="product-section">
        <div className="product-item">
          <img src={best_seller} alt="Best Seller" />
          <div className="info">
            <div className="text">All products</div>
            <a href="#" class="explore">
              Explore
            </a>
          </div>
        </div>

        <div className="product-item">
          <img src={all_Products} alt="Best Seller" />
          <div className="info">
            <div className="text">Best Sellers</div>
            <a href="#" class="explore">
              Explore
            </a>
          </div>
        </div>

        <div className="product-item">
          <img src={jeans} alt="Best Seller" />
          <div className="info">
            <div className="text">New Arrivals</div>
            <a href="#" class="explore">
              Explore
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
