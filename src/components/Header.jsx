import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineUserPlus } from "react-icons/hi2";
import cartImg from "../assets/icon.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState("Home");
  return (
    <>
      <nav>
        <a href="/" class="main-logo">
          Belle
        </a>

        <ul id="navbar" className="nav-menu">
          <li onClick={() => {setMenu("home")}}><Link className="link" to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("shop")}}><Link  className="link"to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("about")}}><Link className="link" to="/about">About</Link>{menu==="about"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("contact")}}><Link  className="link"to="/contact">Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
        </ul>

        <div className="icons-cart">
          <Link to="/cart"><img src={cartImg} alt="cart" /></Link>
          <div className="cart-count">0</div>
        </div>
      </nav>
    </>
  );
}

export default Header;
