import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
import TotalAmount from "./TotalAmount";
import story from '../assets/svg.svg';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  const cartQuantity = cartItems.length;

  return cartQuantity === 0 ? (
    <div className="flex flex-col p-4 space-y-4 justify-center items-center">
    <h1 className="text-center 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-2xl xs:text-2xl font-bold w-full">Cart is empty :(</h1>
    <p1 className=" 2xl:text-6xl text-center md:text-xl font-semibold xs:text-lg">Looks like you haven't added anything to your cart!</p1>
    <img className="2xl:w-[1048px] lg:w-96 md:w-96 xs:w-72" src={story} alt={"ShoppingCart"}></img>
    </div>
  ) : (
    <div>
      <h3 className="xl:text-2xl 2xl:text-4xl md:text-xl xs:text-xl text-center font-bold uppercase pt-4">
        Cart: {cartQuantity}
      </h3>
      <div className="flex flex-col justify-center items-center 2xl:space-y-20 xl:space-y-16 lg:space-y-10 md:space-y-8 xs:space-y-6">
        {cartItems.map((item) => (
          <div
            className="flex justify-center lg:gap-12 md:gap-5 xl:gap-20 items-center md:justify-center lg:flex-row md:flex-row xs:flex-col bg-white lg:p-4 md:p-8 xs:p-8 rounded-lg shadow-xl xl:w-[50vw] lg:w-[70vw] md:w-[70vw] xs:w-60"
            key={item.id}
          >
            <div className="lg:w-36 md:w-auto">
              <img className="xl:w-48 md:w-28 xs:w-24 bg-center" src={item.image} alt={item.title}></img>
            </div>
            <h3 className="xl:text-lg 2xl:text-3xl xs:text-sm font-bold xs:font-semibold lg:w-96 md:w-auto xs:text-center md:text-left">
              {item.title.split("", 25)}
            </h3>
            <h3 className="lg:w-20 md:w-auto text-center text-lg 2xl:text-3xl">
              ₹{Math.ceil(item.price * 81.66)}
            </h3>
            <button
              className="bg-emerald-600 lg:p-2 md:px-4 md:py-2 xs:px-4 xs:py-2 rounded-lg uppercase font-bold shadow-xl 2xl:text-2xl xl:text-xl md:text-lg xs:text-sm text-white"
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
