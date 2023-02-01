import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
import TotalAmount from "./TotalAmount";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  const cartQuantity = cartItems.length;

  return cartQuantity === 0 ? (
    <div>
    <h1 className="text-center text-3xl font-bold w-full">Cart is empty :(</h1>
    <p1 className="text-center text-xl">Looks like you haven't added anything to your cart</p1>
    </div>
  ) : (
    <div>
      <h3 className="text-2xl xl:text-4xl text-center font-bold uppercase pt-4">
        Cart: {cartQuantity}
      </h3>
      <div className="flex flex-col justify-center items-center xl:space-y-20 lg:space-y-10">
        {cartItems.map((item) => (
          <div
            className="flex justify-center lg:gap-12 md:gap-5 xl:gap-20 items-center md:justify-center lg:flex-row md:flex-row xs:flex-col bg-white lg:p-4 md:p-8 xs:p-8 rounded-lg shadow-xl xl:w-[50vw] lg:w-[70vw] md:w-[70vw] xs:w-60"
            key={item.id}
          >
            <div className="lg:w-36 md:w-auto">
              <img className="xl:w-48 md:w-28 bg-center" src={item.image} alt={item.title}></img>
            </div>
            <h3 className="xl:text-2xl 2xl:text-3xl xs:text-lg font-bold xs:font-semibold lg:w-96 md:w-auto xs:text-center md:text-left">
              {item.title.split("", 25)}
            </h3>
            <h3 className="lg:w-20 md:w-auto text-center text-lg xl:text-3xl">
              ₹{Math.ceil(item.price * 81.66)}
            </h3>
            <button
              className="bg-emerald-600 lg:p-2 md:px-4 md:py-2 xs:px-4 xs:py-2 rounded-lg uppercase font-bold shadow-xl xl:text-2xl"
              onClick={() => {
                handleRemove(item.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <TotalAmount></TotalAmount>
    </div>
  );
};

export default Cart;
