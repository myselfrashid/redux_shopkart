import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state => state.cart));
  return (
    <div className='flex justify-between items-center px-4 py-1 h-16 bg-black text-white'>
        <div className='text-3xl font-bold'>SHOPKART</div>
        <div className='flex px-8 text-xl'>
            <Link to="/" className='px-8'>Home</Link>
            <Link to="/cart">Cart</Link>
            <span>Cart Items: {cartItems.length}</span>
        </div>
    </div>
  )
}

export default Navbar