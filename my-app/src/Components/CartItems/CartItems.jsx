import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/remove2.png';

const CartItems = () => {
  const { all_product, cartItems, removeToCart ,getTotalCartAmount} = useContext(ShopContext);

  const hasItems = all_product.some((e) => cartItems[e.id] > 0);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {hasItems ? (
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    onClick={() => removeToCart(e.id)}
                    alt="remove"
                    className="cartitems-remove-icon"
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })
      ) : (
        <p style={{ padding: "20px", textAlign: "center" }}>Your cart is empty.</p>
      )}
      <div className="cartitem-down">
        <div className="cartitem-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                    </div>       
                    <hr />  
                 <div className="cartitem-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                 </div>
                 <hr />
                 <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                 </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code ,enter It here</p>
            <div className="cartitem-promobox">
                <input type="text" name="" placeholder="promo code" id="" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
