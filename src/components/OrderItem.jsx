import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/OrderItem.scss";
import iconClose from "@icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} className="product" />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={iconClose}
        alt="icon close"
        onClick={() => removeFromCart(product)}
      />
    </div>
  );
};

export default OrderItem;
