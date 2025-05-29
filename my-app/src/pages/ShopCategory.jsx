import React, { useContext, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';

import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">

<div className="category-banner-container">
  <img src={props.banner} className="category-banner" />
  <div className="banner-overlay">
    <h1>{props.category}</h1>
    <p>Discover the latest trends and offers</p>
  </div>
</div>  
    <div className="shopcategory-indexSort">
  <p><span>Showing 1-12</span> out of 36 products</p>
  <div className="shopcategory-sort">Sort by</div>
</div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category=== item.category){
return <Item
key={i}
id={item.id}
name={item.name}
image={item.image}
new_price={item.new_price}
old_price={item.old_price}
/>

          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmode">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
