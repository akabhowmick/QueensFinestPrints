import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useCartContext } from "../../providers/CartProvider";
import "./Cart.css";

export const SideCart = () => {
  const { cartItems, removeFromCart, changeItemQuantity, total, finalTotal } = useCartContext();
  const [cartMode, setCartMode] = useState(false);
  const toggleCart = () => {
    setCartMode(!cartMode);
  };

  const cartTotalDetails = [
    { name: "Cart Subtotal: $", value: parseFloat(total.toFixed(2)) },
    { name: "Shipping Cost: $", value: 5.0 },
    { name: "Tax: $", value: parseFloat((total * 0.0875).toFixed(2)) },
    { name: "Total Cost: $", value: finalTotal },
  ];

  const cartBottom = cartItems?.length > 0 && (
    <div className="side-cart-bottom">
      {cartTotalDetails.map(({ name, value }) => {
        return (
          <h4 key={name} className="total-details-text">
            {name + value}
          </h4>
        );
      })}
      <button className="proceed-to-checkout-btn">
        <a href="/checkout">Proceed to Checkout</a>
      </button>
    </div>
  );

  const sideCartItems = cartItems?.map((cartItem) => {
    const { images, price, name, id, quantity } = cartItem;
    return (
      <div key={id}>
        {quantity > 0 && (
          <div className="side-cart-single-item">
            <div className="cart-img-container">
              <img
                className="cart-img"
                src={images[0]}
                alt={name}
                width={200}
                height={200}
                loading="lazy"
              />
              <button onClick={() => removeFromCart(id)}>Remove</button>
            </div>
            <div className="cart-text-details-container">
              <div className="product-name">{name}</div>
              <div className="single-item-quantity-container">
                {quantity > 1 && (
                  <RemoveCircleIcon
                    className="quantity-icon minus-icon"
                    onClick={() => changeItemQuantity(id, "minusOne")}
                  />
                )}
                <div className="product-quantity">{quantity}</div>
                <AddCircleIcon
                  className="quantity-icon add-icon"
                  onClick={() => changeItemQuantity(id, "addOne")}
                />
              </div>
              <div className="product-price">Unit Price: ${price.toFixed(2)}</div>
              <div className="">
                <span className="text-black">
                  <b>Total Cost: </b>
                </span>{" "}
                <span className="product-price-total">${(quantity * price).toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      {/* side cart when open */}
      <div className={`side-cart  ${cartMode && "open-cart"}`}>
        <div className="side-cart-header">
          <CloseIcon onClick={() => toggleCart()} />
          Cart ({cartItems.length})
        </div>
        {cartItems?.length === 0 ? (
          <p style={{ color: "white" }}>Your cart is empty!</p>
        ) : (
          <div className="side-cart-items">{sideCartItems}</div>
        )}
        {cartBottom}
      </div>
    </>
  );
};
