import React from "react";
import './Popular.css';
import Item from "../Item/Item";
import data_product from '../Assets/data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular for Women</h1>
      <hr />
      <Swiper
        slidesPerView={5}
        spaceBetween={4}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="popular-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {data_product.map((item, i) => (
          <SwiperSlide key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular;
