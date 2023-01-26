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
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 justify-items-center">
      {products.map((product) => {
        return (
          <div key={product.id} className="flex flex-col items-center text-center w-56 h-96 outline-double my-2 justify-center">
            <img width="150px" src={product.image} alt={product.title}></img>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <button onClick={()=>handleAdd(product)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
