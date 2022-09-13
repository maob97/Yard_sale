import React from 'react';
import '../styles/order.scss';
import arrow from '@icons/flechita.svg';

const Order = () => {
    return (
<div className="order">
  <p>
    <span>03.25.21</span>
    <span>6 articles</span>
  </p>
  <p>$560.00</p>
  <img src= {arrow} alt="Arrow" />
</div>

    );
};

export default Order;