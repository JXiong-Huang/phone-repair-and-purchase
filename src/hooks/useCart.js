import { useState } from "react";

function useCart(startingCart) {
  const [cart, setCart] = useState(startingCart);

  return { cart, setCart };
}

export default useCart;
