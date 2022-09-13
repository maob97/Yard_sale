import React from 'react';
import "../styles/ShoppingCartItem.scss";

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const ShoppingCartItem = () => {
    return (
<div className="ShoppingCartItem">
  <figure>
    <img src= {bike} alt className="product" />
  </figure>
  <p>Bike</p>
  <p>$50.00</p>
</div>

    );
};

export default ShoppingCartItem;