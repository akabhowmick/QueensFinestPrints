import "./Cart.css";
import { useCartContext } from "../../providers/CartProvider";

const FloatingCartButton = () => {
  const { cartItems } = useCartContext();
  return (
    <a href="/cart" className="floating-cart-btn">
      🛒 Cart ({cartItems.length})
    </a>
  );
};

export default FloatingCartButton;
