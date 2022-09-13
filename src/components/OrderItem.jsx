import React from 'react';
import '../styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


const OrderItem = () => {
    return (
<div classname="OrderItem">
  <figure>
    <img src= {bike} alt classname="product" />
  </figure>
  <p>Bike</p>
  <p>$50.00</p>
  <img src= {iconClose} alt="icon close" />
</div>
    );
};

export default OrderItem;