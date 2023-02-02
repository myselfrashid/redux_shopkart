import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  const handleClose = () => setMenu(!menu);

  return (
    <header className="flex justify-between xs:justify-between items-center md:px-4 xs:px-2 xs:w-full py-4 h-16 xs:h-16 bg-black text-white xs:shadow-xl xl:p-10 box-border xs:fixed">
      <div className="2xl:text-3xl xl:text-2xl xs:text-2xl font-bold bg-white text-black p-2 rounded-lg">
        <Link to="/">
          <span className="p-1 xs:p-0">SHOP</span>
          <span className="bg-black text-white p-1 rounded-r-lg pr-2">
            KART
          </span>
        </Link>
      </div>
      <div className="flex flex-row md:px-0 xl:text-xl md:block xs:hidden">
        <Link to="/" className="px-10">
          Home
        </Link>
        <Link className="px-10" to="/cart">
          Cart: <span>{cartItems.length}</span>
        </Link>
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
