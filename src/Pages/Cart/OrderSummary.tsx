import { Link } from "react-router-dom";
import { useCartContext } from "../../providers/CartProvider";
import { formatPrice } from "../../utils/formatPrice";

// Display only: every figure comes straight from CartProvider, which derives
// them from the shared pricing module (the same one the server charges by).
// No arithmetic happens here.
export const OrderSummary = ({
  compact = false,
  onCheckout,
}: {
  compact?: boolean;
  onCheckout?: () => void;
}) => {
  const { total, tax, shipping, finalTotal } = useCartContext();

  return (
    <section className={`order-summary${compact ? " order-summary--compact" : ""}`} aria-label="Order summary">
      {!compact && <h2 className="order-summary__title">Order summary</h2>}
      <dl className="order-summary__rows">
        <div>
          <dt>Subtotal</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
        <div>
          <dt>Shipping</dt>
          <dd>{formatPrice(shipping)}</dd>
        </div>
        <div>
          <dt>Tax</dt>
          <dd>{formatPrice(tax)}</dd>
        </div>
        <div className="order-summary__total">
          <dt>Total</dt>
          <dd>{formatPrice(finalTotal)}</dd>
        </div>
      </dl>
      <Link to="/checkout" className="btn btn-primary btn-block" onClick={onCheckout}>
        Checkout
      </Link>
      <p className="order-summary__note">Secure payment with PayPal. Every piece is printed to order.</p>
    </section>
  );
};
