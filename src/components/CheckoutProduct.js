import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, image, price, rating, title }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <span role="img" aria-label="rating" key={Math.random()}>
                  ⭐
                </span>
              );
            })}
        </div>
        <button onClick={removeFromBasket}>Remove From basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
