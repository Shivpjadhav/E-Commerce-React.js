import React from "react";
import exclusive_img from '../Assets/exclusive_img4.jpg';
import exclusive_img2 from '../Assets/exclusive_img2.jpg';
import './Offers.css';
const Offers=()=>{
    return(
<div className="offers">
    <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
    </div>
    <div className="offers-right">
        <img src={exclusive_img} alt="" />
        <img src={exclusive_img2} alt="" />
    </div>
</div>
    )
}
export default Offers;