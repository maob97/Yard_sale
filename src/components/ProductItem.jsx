import React from 'react';
import '../styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const ProductItem = () => {
    return (
<div>
  <img src= {bike} alt="bike" className="bike" />
  <div className="product-info">
    <p>$35,00</p>
    <p>Bike</p>
      <img src= {addToCart} alt="add to cart icon" />
        Add to cart
  </div>            
</div>

    );
};

export default ProductItem;