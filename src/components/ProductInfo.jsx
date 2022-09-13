import React from 'react';
import "../styles/ProductInfo.scss";
import addToCart from '@icons/bt_add_to_cart.svg';

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


const ProductInfo = () => {
    return (
<div>
  <img src= {bike} alt="bike" className="bike" />
  <div className="ProductInfo">
    <p>$35,00</p>
    <p>Bike</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Praesentium voluptates exercitationem magnam quisquam similique</p>
    <button className="primary-button add-to-card-button">
      <img src= {addToCart} alt="add to cart icon" />
      Add to cart
    </button>
  </div>
</div>
    );
};

export default ProductInfo;