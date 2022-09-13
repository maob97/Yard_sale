import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
    return (
<div classname="OrderItem">
  <figure>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt classname="product" />
  </figure>
  <p>Bike</p>
  <p>$50.00</p>
  <img src="icons/icon_close.png" alt="icon close" />
</div>
    );
};

export default OrderItem;