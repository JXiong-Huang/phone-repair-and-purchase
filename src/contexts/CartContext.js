import React from "react";
import { createContext } from "react";
import useCart from "../hooks/useCart";

export const CartContext = createContext();

function CartProvider({ startingCart, children }) {
  const { cart, setCart } = useCart(startingCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
export { CartProvider };
