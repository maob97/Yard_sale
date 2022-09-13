import React from 'react';
import '../styles/order.scss';

const Order = () => {
    return (
<div className="order">
  <p>
    <span>03.25.21</span>
    <span>6 articles</span>
  </p>
  <p>$560.00</p>
  <img src="icons/flechita.svg" alt="Arrow" />
</div>

    );
};

export default Order;