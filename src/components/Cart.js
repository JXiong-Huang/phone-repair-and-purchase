import { useContext } from "react";
import { PhoneContext } from "../contexts/PhoneContext";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { phones } = useContext(PhoneContext);
  const navigate = useNavigate();

  function renderItem(itemInCart) {
    const { id, quantity, price } = itemInCart;
    const { first, last } = phones.find((i) => i.id === id);
    const subTotal = (price * quantity).toFixed(2);

    function updateQuantity(id, quantity) {
      setCart((prevCart) => {
        return quantity === 0
          ? prevCart.filter((i) => i.id !== id)
          : prevCart.map((i) => {
              return i.id === id ? { ...i, quantity } : i;
            });
      });
    }

    return (
      <li key={id}>
        <div className="detail-row p-4 mt-4 line">
          <div className="twentyfive-col padL-4 padR-4 ml-4">
            <a href={`/detail/${id}`}>
              <img
                src={`/images/${first}${last}.webp`}
                alt={`${first} ${last}`}
                width={200}
                height={250}
              />
            </a>
          </div>
          <div className="fifty-col mt-4">
            <h3>
              {first} {last}
            </h3>

            <p className="mt-4">
              <select
                onChange={(e) => updateQuantity(id, parseInt(e.target.value))}
                value={quantity}
              >
                <option value="0">Remove</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
          </div>
          <div className="feature-col mt-4">
            <h4>Subtotal: &nbsp;&nbsp;&nbsp;${subTotal}</h4>
          </div>
        </div>
      </li>
    );
  }

  const numItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);
  const gst = totalPrice / 11;

  return (
    <section className="cart">
      <ul>{cart.map(renderItem)}</ul>
      <div className="detail-row p-4 mt-4 ml-4">
        <div className="ten-col">{""}</div>
        <div className="sixtyfive-col mt-4 ml-4 padR-4">
          {numItemsInCart === 0 ? (
            <h3>
              Your cart is empty...continue shopping?
              <a href="/products"> yes </a>
            </h3>
          ) : (
            <div>
              <span style={{ fontSize: "2rem", fontStyle: "italic" }}>
                {numItemsInCart}
              </span>
              &nbsp;&nbsp;
              <span>item{numItemsInCart > 1 ? "s" : ""} in the cart</span>
            </div>
          )}
        </div>
        {numItemsInCart !== 0 ? (
          <div>
            <h3>{`Total: $${totalPrice}`}</h3>
            <span>GST included: ${gst.toFixed(2)}</span>
          </div>
        ) : null}
      </div>
      {cart.length > 0 && (
        <div className="checkout m-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Check Out
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;
