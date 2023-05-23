import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {add} from "../Store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const handleAdd = (product) => {
    dispatch(add(product));
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid xs:grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-1 justify-items-center place-items-center lg:mx-20 md:mx-20 xs:m-5 lg:gap-x-16 lg:gap-y-20 md:gap-x-28 md:gap-y-10 xs:gap-y-10">
      
      {products.map((product) => {
        return (
          <div key={product.id} className="flex flex-col items-center text-center lg:w-64 md:w-56 xs:w-60 sm:h-96 xs:h-84 md:h-96 md:my-0 sm:py-6 xs:py-4 xs:px-6 sm:px-10 lg:mx-4 md:mx-2 xs:mx-2 justify-around rounded-lg shadow-xl bg-white">
            <div className=""><img className="md:h-54 xs:h-48 lg:w-36 md:w-44 xs:w-36 bg-contain py-2"  src={product.image} alt={product.title}></img></div>
            <h2 className="font-bold">{(product.title).split('', 40)}</h2>
            <h3>₹{Math.ceil(product.price * 83)}</h3>
                <button className="bg-blue-500 w-full px-3 py-2 text-white font-bold hover:bg-blue-600 active:bg-blue-600" onClick={()=>handleAdd(product)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
