import React from 'react';
import '../styles/ProductItem.scss';

const ProductItem = () => {
    return (
<div>
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" className="bike" />
  <div className="product-info">
    <p>$35,00</p>
    <p>Bike</p>
      <img src="icons/bt_add_to_cart.svg" alt="add to cart icon" />
      Add to cart
  </div>            
</div>

    );
};

export default ProductItem;