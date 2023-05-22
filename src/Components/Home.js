import React  from 'react';
import Products from './Products';

const Home = () => {
  
  

  return (
    <div className='text-center mt-2 h-auto bg-blue-50'>
      <h1 className='lg:text-3xl lg:tracking-widest xs:tracking-normal xs:text-xl font-bold uppercase m-5'>Welcome to Redux-ShopKart Store</h1>
      <section className=''>
        <h2 className='text-2xl font-bold'>Products</h2>
        <Products />
      </section>
    </div>
  )
}

export default Home;