import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className=" text-3xl mt-3 text-center">Cart</h1>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
