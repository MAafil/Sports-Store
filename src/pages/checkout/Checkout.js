import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  selectCartItems,
} from "../../redux/slice/cartSlice";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [dispatch, cartItems]);

  return (
    <>
      <section>
        <div className="container">
          <h3>Initializing checkout...</h3>
        </div>
      </section>
      <CheckoutForm />
    </>
  );
};

export default Checkout;
