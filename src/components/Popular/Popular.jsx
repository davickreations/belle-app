import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Ensure this path is correct
import './Popular.css';
import data from '../../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, [isMobile]);

  return (
    <div className='pupolar-products'>
      {isMobile ? (
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {data.map((item, i) => (
              <div className="swiper-slide" key={i}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                />
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      ) : (
        <div className="pupolar-item">
          {data.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Popular;
