import React from "react";
import "./Item.css";
import { GoHeart } from "react-icons/go";



const Item = (props) => {
  return (
    <div className="item">
      <div className="image-box">
        <img src={props.image} alt="" />
        <div className="overlay">
        {props.discount && <div className="discount-label">{props.discount}</div>}
        <div className="heart"><GoHeart /></div>
        </div>
      </div>
      <div className="item-body">
        <h3 className="item-name">{props.name}</h3>
        <p className="item-price">₦{props.price.toLocaleString()} </p>
        <button>Add to cart</button>
      </div>
    

    </div>
  );
};

export default Item;
