import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket , user } , dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          clasName="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/img17/AmazonPay/Javed/PD_2021/Prime_600_____._CB664878619_.jpg"
          alt=""
        />

        <div>
          <h3>Hey, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map(item =>(

            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
