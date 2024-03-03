import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearItems = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className=" text-3xl mt-3 text-center">Cart</h1>
      <div>
        <ItemList items={cartItems} />
        <button
          onClick={handleClearItems}
          className=" bg-black text-white rounded-md p-1 m-2"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <p>The cart is empty, go to home to add some items.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
