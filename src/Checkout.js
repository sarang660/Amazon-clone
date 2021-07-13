import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";

function Checkout() {
  const [{ basket }] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Bag is empty</h2>
            <p>
              you have no items in your basket.To buy one or more
              items.click"Add to basket"next to the item.
            </p>
          </div>
        ) : (
          <div className="checkout_title">
            <h2>Your carts</h2>
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
