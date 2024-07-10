import React from "react";
import "./Testimonial.css";
import woman from "../../assets/Woman_smiling.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="test-card">
        <div className="testimonial-card">
        <div className="test-image">
          <img src={woman} alt="Janet Owo" />
        </div>
        <div className="test-content">
          <span>
            <RiDoubleQuotesL />
          </span>
          <h3 className="text">
            Beauty is the best at what she does. Quality delivery? Check!
            Exceeding expectation? Check!! Timely delivery? Check!!!
          </h3>
          <p className="name">Janet Owo</p>
          <p className="location">Rivers, NG</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
