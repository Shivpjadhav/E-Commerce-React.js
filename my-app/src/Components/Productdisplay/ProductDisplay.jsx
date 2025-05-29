import React from "react";
import star_icon from '../Assets/star.avif';
import star_dull_icon from '../Assets/star.avif';
import './ProductDisplay.css';
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const product = props.product;
  const {addToCart}=useContext(ShopContext);

  return (
    <div className="ProductDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-price">
          <span className="new-price">${product.new_price}</span>{" "}
          <span className="old-price" style={{ textDecoration: "line-through", color: "#999" }}>
            ${product.old_price}
          </span>
        </div>
        <div className="productdisplay-right-description">
  <h2>Product Details</h2>
  <p>
    Elevate your everyday wardrobe with this stylish and comfortable {product.name}.
    Designed with premium-quality fabric, it ensures all-day comfort and a flattering fit.
  </p>
 
</div>

        <div className="productdisplay-right-size">
            <h1>select size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
            <span>Category:</span>
            Women ,T- shirt ,Crop Top
        </p>
        <p className="productdisplay-right-category">
            <span>Tags:</span>
Modern ,latest         </p>

      </div>
    </div>
  );
};

export default ProductDisplay;
