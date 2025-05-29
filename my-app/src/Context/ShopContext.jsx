import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../Components/Assets/all_product";
import cartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0; // use product ID for better accuracy
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        totalamount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalamount;
  }
  const getTotalCartItems =()=>{
    let totalItem =0 ;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+= cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeToCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
