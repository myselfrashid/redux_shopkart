import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  const handleClose = () => setMenu(!menu);

  const cartQuantity = cartItems.cartItems.length;
  return (
    <header className="flex justify-between xs:justify-between items-center md:px-4 xs:px-2 xs:w-full py-4 h-16 xs:h-16 bg-blue-500 text-white xs:shadow-sm xl:p-10 box-border md:static xs:fixed">
      <div className="2xl:text-3xl xl:text-2xl xs:text-2xl font-bold bg-white text-black p-2 rounded-lg">
        <Link to="/">
          <span className="p-1 xs:p-0">SHOP</span>
          <span className="bg-blue-600 text-white p-1 rounded-r-lg pr-2">
            KART
          </span>
        </Link>
      </div>
      <div className="lg:flex lg:flex-row md:px-0 xl:text-xl md:flex xs:hidden items-center place-content-center">
        <div className="">
          <Link
            to="/"
            className="hover:bg-blue-600  hover:py-4 hover:border-b-2 hover:transition-all ease-linear font-bold text-xl lg:mr-2 md:mr-0 lg:px-8 md:px-4"
          >
            Home
          </Link>
        </div>
        <div className="hover:bg-blue-600 hover:py-4 hover:border-b-2 hover:transition-all ease-linear font-bold text-xl lg:mr-2 md:mr-0 lg:px-8 md:px-4 flex flex-row">
          <Link
            to="/cart"
            className="flex flex-row justify-between items-center place-content-center px-2"
          >
            <h1>Cart :</h1>
            <MdShoppingCart></MdShoppingCart>
            {cartQuantity}
          </Link>
        </div>
      </div>
      <div
        className="md:hidden mr-4 cursor-pointer w-auto"
        onClick={handleClick}
      >
        {!menu ? (
          <HiMenuAlt3 className="h-10 w-10" />
        ) : (
          <HiX className="h-10 w-10" />
        )}
        <div
          className={
            !menu
              ? "hidden"
              : "absolute flex flex-col h-[100vh] top-[64px] right-0 w-full bg-black text-center font-bold text-white"
          }
        >
          <Link
            to="/"
            className="px-8 py-6 border-b-2 border-t-2 text-xl uppercase"
            onClick={handleClose}
          >
            Home
          </Link>
          <Link
            className="p-8 border-b-2 text-xl uppercase"
            to="/cart"
            onClick={handleClose}
          >
            Cart: <span>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
