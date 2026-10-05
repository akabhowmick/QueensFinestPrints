import "./Cart.css";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useCartContext } from "../../providers/CartProvider";
import { useCartUI } from "../../providers/CartUIProvider";
import { CartItem } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import { EmptyCart } from "./EmptyCart";

// Slide-out cart. MUI's Drawer (a Modal) traps focus while open, closes on
// Escape and on backdrop click, and restores focus to whatever opened it.
export const CartDrawer = () => {
  const { cartItems } = useCartContext();
  const { isCartOpen, closeCart } = useCartUI();
  const location = useLocation();
  const lastPath = useRef(location.pathname);

  // Close if the route changes underneath the drawer (e.g. browser back).
  useEffect(() => {
    if (location.pathname !== lastPath.current) {
      lastPath.current = location.pathname;
      closeCart();
    }
  }, [location.pathname, closeCart]);

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={closeCart}
      slotProps={{
        paper: {
          className: "cart-drawer",
          role: "dialog",
          "aria-modal": true,
          "aria-labelledby": "cart-drawer-title",
        },
      }}
    >
      <header className="cart-drawer__header">
        <h2 id="cart-drawer-title">
          Your cart <span className="cart-drawer__count">({itemCount})</span>
        </h2>
        <button type="button" className="icon-button" onClick={closeCart} aria-label="Close cart">
          <CloseIcon fontSize="small" />
        </button>
      </header>

      {cartItems.length === 0 ? (
        <div className="cart-drawer__body">
          <EmptyCart onNavigate={closeCart} />
        </div>
      ) : (
        <>
          <ul className="cart-drawer__body cart-lines">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} layout="compact" onNavigate={closeCart} />
            ))}
          </ul>
          <footer className="cart-drawer__footer">
            <OrderSummary compact onCheckout={closeCart} />
            <Link to="/cart" className="text-link cart-drawer__full" onClick={closeCart}>
              View full cart and personalize
            </Link>
          </footer>
        </>
      )}
    </Drawer>
  );
};
