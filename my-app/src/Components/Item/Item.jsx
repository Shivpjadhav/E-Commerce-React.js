import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>

      <img onClick={() => window.scrollTo(0, 0)} src={image} className="item-img" alt={name} />
      </Link>
      <h3 className="item-name">{name}</h3>
      <p className="item-prices">
        <span className="new-price">${new_price}</span>
        <span className="old-price">${old_price}</span>
      </p>
    </div>
  );
};

export default Item;
