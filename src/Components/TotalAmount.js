import { useSelector } from "react-redux";

const TotalAmount = () => {
  const cartTotal = useSelector((state) => state.cart);
  const total = cartTotal.reduce((total, product) => {
    return Math.ceil(total + product.price * (81.66).toFixed(2));
  }, 0);
  return cartTotal === 0 ? (
    <div className="flex flex-row justify-end float-right">
      <h1>Total is 0</h1>
    </div>
  ) : (
    <div className="flex flex-row justify-end p-12">
      <h1 className="2xl:text-3xl xl:text-2xl font-Noto font-bold md:text-xl xs:text-xl">Total : {total}</h1>
    </div>
  );
};

export default TotalAmount;
