import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="logo-name">
              <h3>Beauty Ireoluwa</h3>
            </div>

            {/* <div className="newletter">
              <p>Sign up and get 15% off on your first order!</p>
              <div className="footer-subscribe">
                <input type="email" placeholder="Your Email Address" />
                <button>Subscribe</button>
              </div>
            </div> */}

          </div>

          <div className="footer-links">
            <div className="footer-link-content belle">
              <div className="logo-name">
                <h3>Beauty Ireoluwa</h3>
              </div>
              
            </div>

            <div className="footer-link-content">
              <h3>Dealer on all kinds of jewelries</h3>
              <p>Phone: +234 9102469802</p>
              <p>Email: belle’sglamour@gmail.com</p>
              <p>Address: 123 Jewelry Lane, Lagos, Nigeria</p>
            </div>

            <div className="footer-link-content">
              <h3>Customer Service</h3>
              <li>
                <a href="">Product Warranty</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
              <li>
                <a href="">Contact Support</a>
              </li>
            </div>

            <div className="footer-link-content">
              <h3>Terms of Service</h3>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Return Policy</a>
              </li>
              <li>
                <a href="">Shipping and Delivery</a>
              </li>
            </div>

            <div className="footer-link-content">
              <h3>About Us</h3>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
