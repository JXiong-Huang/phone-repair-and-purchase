import { CartProvider } from "../contexts/CartContext";

function CartInit({ children }) {
  function localStorageInitialize() {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch {
      console.error("The cart could not be parsed into JSON");
      return [];
    }
  }

  let initialCart = localStorageInitialize();

  return <CartProvider startingCart={initialCart}>{children}</CartProvider>;
}
export default CartInit;
