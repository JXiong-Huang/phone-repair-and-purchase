import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function PhoneAdd({ phone }) {
  const { cart, setCart } = useContext(CartContext);
  const [isPicked, setIsPicked] = useState(false);
  const navigate = useNavigate();
  const { id, price } = phone;

  function addToCart(id) {
    setCart((prevCart) => {
      return [...prevCart, { id, quantity: 1, price }];
    });
  }

  return (
    <div className="session w-100">
      <button
        className="btn add-button "
        onClick={(e) => {
          e.preventDefault();
          if (cart.find((i) => i.id === id)) {
            setIsPicked(true);
          } else {
            addToCart(id);
            navigate("/cart");
          }
        }}
      >
        Add to cart
      </button>
      <span className="m-4">
        {isPicked === true ? "Already in cart" : null}
      </span>
    </div>
  );
}

export default PhoneAdd;
