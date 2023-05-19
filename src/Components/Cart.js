import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../Store/cartSlice";
import story from "../assets/svg.svg";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddItems = (item) => {
    dispatch(add(item));
  };

  const handleDecrease = (myProd) => {
    dispatch(remove(myProd));
  };

  const cartQuantity = cart.cartItems.length;

  return cartQuantity === 0 ? (
    <div className="flex flex-col p-4 space-y-4 justify-center items-center xs:h-[100%] md:m-auto xs:mt-20">
      <h1 className="text-center 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-2xl xs:text-2xl font-bold w-full">
        Cart is empty :(
      </h1>
      <p className=" 2xl:text-6xl text-center md:text-xl font-semibold xs:text-lg">
        Looks like you haven't added anything to your cart!
      </p>
      <img
        className="2xl:w-[1048px] lg:w-96 md:w-96 xs:w-56"
        src={story}
        alt={"ShoppingCart"}
      ></img>
    </div>
  ) : (
    <div className="md:m-auto xs:mt-20">
      <h3 className="xl:text-2xl 2xl:text-4xl md:text-xl xs:text-xl text-center font-bold uppercase pt-4">
        Cart: {cartQuantity}
      </h3>
      <div className="flex flex-col justify-center items-center 2xl:space-y-20 xl:space-y-16 lg:space-y-10 md:space-y-8 xs:space-y-6">
        {cart.cartItems.map((product) => {
          return (
            <div key={product.id}>
              <div className="flex flex-row justify-between gap-2 items-center bg-gray-300 py-4 px-10 rounded-md">
                <img
                  className="w-24"
                  src={product.image}
                  alt={product.id}
                ></img>
                <h3>{product.title}</h3>
                <div className="flex items-center justify-between bg-gray-200 rounded-md">
                  <button
                    className="flex items-center justify-center w-4 bg-white rounded-md px-4 py-2"
                    onClick={handleAddItems}
                  >
                    +
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button
                    className="flex items-center justify-center w-4 bg-white rounded-md px-4 py-2"
                    onClick="{}"
                  >
                    -
                  </button>
                  <div>
                    <button
                      className="text-white font-semibold bg-red-800 rounded-md px-4 py-2"
                      onClick={() => handleDecrease(product)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
