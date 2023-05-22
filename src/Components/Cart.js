import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, decrease, remove, totalAmount } from "../Store/cartSlice";
import story from "../assets/cart.svg";
import { MdDeleteForever, MdStarRate } from "react-icons/md";

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
    <div className="flex flex-col p-4 items-center xs:mx-0 xs:mt-20 md:mt-auto md:h-full xs:h-[71vh]">
      <h1 className="text-center 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-2xl xs:text-2xl font-bold w-full">
        Cart is empty :(
      </h1>
      <p className="2xl:text-6xl text-center md:text-xl font-semibold xs:text-lg">
        Looks like you haven't added anything to your cart!
      </p>
      <img
        className="2xl:w-[1048px] lg:w-96 md:w-84 xs:w-56"
        src={story}
        alt={"ShoppingCart"}
      ></img>
    </div>
  ) : (
    <div className="lg:mx-10 md:mx-4 md:mt-5 xs:mt-20 w-fill pb-8 pt-4 md:flex xl:justify-center md:flex-row xs:flex-col lg:gap-10 md:gap-5">
      <div>
        <div>
          <h3 className="xl:text-2xl 2xl:text-4xl md:text-xl xs:text-xl text-center font-bold uppercase">
            Cart: {cartQuantity}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center 2xl:space-y-20 xl:space-y-8 lg:space-y-10 md:space-y-8 xs:space-y-6 mx-4 mt-auto">
          {cart.cartItems.map((product) => {
            return (
              <div key={product.id} className="flex flex-col items-center">
                <div className="md:hidden xs:flex bg-white flex-row w-72 items-center gap-2 p-2 shadow-lg">
                  <div className="mr-3 ml-2">
                    <img
                      className="h-20 w-20"
                      src={product.image}
                      alt={product.id}
                    ></img>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h3 className="flex flex-col text-md font-semibold items-start justify-between pb-2">
                        {product.title.slice(0, 25)}
                      </h3>
                      <span className="flex flex-row items-center text-sm">
                        <MdStarRate></MdStarRate>({product.rating.rate})
                      </span>
                      <span className="text-sm pb-2">
                        Rating:{product.rating.count}
                      </span>
                    </div>
                    <div className="flex flex-col pb-4">
                      <div className="flex items-center">
                        <h1 className="text-sm flex items-center mr-1">
                          Quantity:{" "}
                        </h1>
                        <button
                          className="flex items-center justify-center w-6 bg-blue-200 active:bg-blue-600 rounded-l-md"
                          onClick={() => handleAddItems(product)}
                        >
                          +
                        </button>
                        <span className="font-semibold px-3 bg-blue-300">
                          {product.cartQuantity}
                        </span>
                        <button
                          className="flex items-center justify-center w-6 bg-blue-200 active:bg-blue-600  rounded-r-md "
                          onClick={() => handleDecrease(product)}
                        >
                          -
                        </button>
                      </div>
                      <div className="text-center flex items-center w-[100%]">
                        <h3 className="text-sm">
                          Price: ₹
                          {Math.floor(product.price * product.cartQuantity) *
                            83}
                        </h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="text-white font-semibold bg-blue-500 rounded-md px-3 py-1 active:bg-red-900 inline-flex w-[80%] justify-center items-center"
                        onClick={() => handleRemove(product)}
                      >
                        <span className="flex flex-row justify-between items-center gap-2">
                          {<MdDeleteForever></MdDeleteForever>} Delete Item
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:flex-row xs:hidden flex-1 xl:gap-x-6 lg:gap-x-3 md:gap-x-2 items-center lg:px-10 md:px-8 rounded-md shadow-lg xl:w-[800px] lg:w-[700px] xl:h-[140px] lg:[120px] md:w-[500px] md:h-[120px] bg-white">
                  <div className="m-2">
                    <img
                      className="xl:h-44 lg:h-24 md:h-20 xl:w-40 lg:w-16 md:w-16 text-center"
                      src={product.image}
                      alt={product.id}
                    ></img>
                  </div>
                  <div className="xs:w-3/5 lg:w-2/5 md:w-2/5">
                    <h3 className="lg:text-lg xl:text-xl md:text-sm md:font-semibold">
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
                  <div className="w-30 text-center">
                    <h3 className="lg:text-base md:text-sm">
                      ₹{Math.floor(product.price * product.cartQuantity) * 83}
                    </h3>
                  </div>
                  <div className="text-center">
                    <button
                      className="text-white xl:font-semibold md:font-normal md:text-sm bg-blue-500 rounded-md hover:bg-red-900 xl:px-2 md:px-4 xl:py-1 md:py-1"
                      onClick={() => handleRemove(product)}
                    >
                      <span className="flex flex-row justify-between items-center">
                        {<MdDeleteForever></MdDeleteForever>} Remove
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:justify-start xs:justify-center items-center lg:w-48 lg:h-64 md:h-32 md:w-40 xs:w-4/5 md:text-left xs:text-right md:m-0 lg:mx-0 xs:mx-auto xl:mx-auto">
        <h1 className="lg:text-xl xl:text-2xl font-bold">Price Details</h1>
        <div className="flex flex-row justify-between w-full">
          <h1 className="lg:text-lg xl:text-xl font-bold">Price:</h1>
          <h1>₹{Math.floor(cart.cartTotalAmount) * 83}</h1>
        </div>
        <div className="flex flex-row justify-between w-full">
          <h1 className="inline-block text-left">Discount: </h1>
          <span className="text-blue-600 font-semibold xl:text-xl">
            ₹
            {Math.floor(cart.cartTotalAmount * 83 > 2000)
              ? (cart.cartTotalAmount * 83) / 10
              : 0}
          </span>
        </div>
        <div className="flex flex-row justify-between w-full">
          <h1 className="xl:text-xl lg:text-lg md:text-base xs:text-sm">
            Delivery Charges:{" "}
          </h1>
          <span>
            {Math.floor(cart.cartTotalAmount) * 83 < 2000 ? "50" : "Free"}
          </span>
        </div>
        <div className="flex flex-row justify-between w-full border-t-black border-t-2 border-b-black border-b-2">
          <h1 className="xl:text-xl lg:text-lg md:text-base xs:text-sm lg:w-36 md:w-36 xs:w-60 text-left">
            Final Price: 
          </h1>{" "}
          <span className="font-semibold text-blue-600">
          ₹{Math.floor(cart.cartTotalAmount) * 83 < 2000
              ? Math.floor(cart.cartTotalAmount) * 83 + 50
              : Math.floor(cart.cartTotalAmount) * 83 -
                Math.floor(cart.cartTotalAmount * 83) / 10}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
