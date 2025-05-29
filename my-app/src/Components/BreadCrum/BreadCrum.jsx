import React from "react";
import './BreadCrum.css';
import arrow_icon from '../Assets/pic.jpg';
 const BreadCrum=(props)=>{
const {product}=props;
return(
    <div className="breadcrum">
  HOME <span className="separator">›</span>
  SHOP <span className="separator">›</span>{product.category}
   <span className="separator">›</span>
   {product.name}</div>

)
 }
 export default BreadCrum;