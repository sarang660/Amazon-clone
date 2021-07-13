import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "./StateProvider";
function CheckoutProducts({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () =>
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  return (
    <div className="checkoutProducts">
      <img className="checkoutProducts_image" src={image} alt="" />
      <div className="checkoutProducts_info">
        <p className="checkoutProducts_title">{title}</p>
        <p className="checkoutProducts_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProducts_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img
                className="star_image"
                src="https://image.flaticon.com/icons/png/128/1828/1828884.png"
                alt=""
              />
            ))}
        </div>
        <button onClick={removeItem}>remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
