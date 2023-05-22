import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, decrease, remove, totalAmount } from "../Store/cartSlice";
import story from "../assets/cart.svg";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(totalAmount());
  }, [cart, dispatch]);

  const handleAddItems = (product) => {
    dispatch(add(product));
  };

  const handleDecrease = (product) => {
    dispatch(decrease(product));
  };

  const handleRemove = (product) => {
    dispatch(remove(product));
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
    <div className="md:m-auto xs:mt-20 h-100vh pb-8 pt-4 flex flex-row lg:gap-10 md:gap-5 justify-evenly">
      <div>
        <div>
          <h3 className="xl:text-2xl 2xl:text-4xl md:text-xl xs:text-xl text-center font-bold uppercase">
            Cart: {cartQuantity}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center 2xl:space-y-20 xl:space-y-4 lg:space-y-10 md:space-y-8 xs:space-y-6 mx-4">
          {cart.cartItems.map((product) => {
            return (
              <div key={product.id}>
                <div className="flex flex-row flex-1 justify-between lg:gap-x-4 md:gap-x-2 items-center lg:px-10 md:px-2 rounded-md shadow-lg lg:w-[600px] md:w-[500px] lg:h-[140px] md:h-[100px] bg-white">
                  <div className="w-1/5 m-3">
                    <img
                      className="lg:w-24 md:w-18 lg:h-30 md:h-20"
                      src={product.image}
                      alt={product.id}
                    ></img>
                  </div>
                  <div className="lg:w-3/5 md:w-2/5">
                    <h3 className="lg:text-xl md:text-sm">
                      {product.title.slice(0, 25)}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between bg-blue-100 rounded-md w-1/5 text-center">
                    <button
                      className="flex items-center justify-center lg:w-4 md:w-3 lg:font-bold md:font-semibold hover:bg-blue-500 lg:px-4 md:px-3 lg:py-2 md:py-1 hover:rounded-l-md hover:text-white hover:transition-all"
                      onClick={() => handleAddItems(product)}
                    >
                      +
                    </button>
                    <span className="border-r-2 border-l-2 border-blue-500 lg:px-4 md:px-3 font-semibold">
                      {product.cartQuantity}
                    </span>
                    <button
                      className="flex items-center justify-center lg:w-4 md:w-3 lg:font-bold md:font-semibold hover:bg-blue-500 lg:px-4 md:px-3 lg:py-2 md:py-1  hover:rounded-r-md hover:text-white hover:transition-all"
                      onClick={() => handleDecrease(product)}
                    >
                      -
                    </button>
                  </div>
                  <div className="w-1/5 text-center">
                    <h3>${Math.floor(product.price * product.cartQuantity)}</h3>
                  </div>
                  <div className="lg:w-2/5 md:w-1/5 text-center">
                    <button
                      className="text-white font-semibold bg-blue-500 rounded-md p-3 hover:bg-red-900"
                      onClick={() => handleRemove(product)}
                    >
                      {<MdDeleteForever></MdDeleteForever>}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-80 lg:h-64 md:h-32 md:w-40 bg-blue-100 rounded-md lg:sticky lg:top-20 md:sticky md:top-24">
        <h1 className="text-xl font-bold">Your Subtotal</h1>
        <h1 className="text-lg font-bold">${cart.cartTotalAmount}</h1>
      </div>
    </div>
  );
};

export default Cart;
