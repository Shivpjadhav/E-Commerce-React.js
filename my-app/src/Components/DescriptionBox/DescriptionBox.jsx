import React from "react";
import './DescriptionBox.css';
const DescriptionBox =()=>{
    return(
<div className="descriptionbox">
<div className="description-navigator">
    <div className="descriptionbox-nav-box">  
        Description
    </div>
    <div className="descriptionbox-nav-box fade">Review (122)</div>
</div>
<div className="descriptionbox-desription">
<p>
  This product is crafted with high-quality materials, ensuring comfort and durability
  throughout your day. Designed to offer both style and functionality, it’s an ideal
  choice for casual outings or everyday wear.
</p>
<p>
  Featuring a modern fit and soft finish, it seamlessly blends fashion and utility.
  Whether you're heading out for a weekend brunch or a relaxed evening, this piece
  is a wardrobe essential that elevates your look effortlessly.
</p>


</div>
</div>
    )
}
export default DescriptionBox;