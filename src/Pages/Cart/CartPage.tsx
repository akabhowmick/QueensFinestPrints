import "./Cart.css";
import { useCartContext } from "../../providers/CartProvider";
import { CartItem } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import { EmptyCart } from "./EmptyCart";
import { products } from "../../utils/Products";
import { PageIntro } from "../../Components/PageIntro/PageIntro";
import { ProductGrid } from "../ProductPages/ProductGrid";

const SUGGESTION_COUNT = 4;

export const CartPage = () => {
  const { cartItems } = useCartContext();
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const suggestions = products
    .filter((product) => !cartItems.some((item) => item.id === product.id))
    .slice(0, SUGGESTION_COUNT);

  return (
    <div className="cart-page">
      <PageIntro
        eyebrow={itemCount === 0 ? "Cart" : `${itemCount} ${itemCount === 1 ? "item" : "items"}`}
        title="Your cart"
      />

      <div className="container">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="cart-page__layout">
            <ul className="cart-lines cart-page__lines" aria-label="Items in your cart">
              {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} layout="full" />
              ))}
            </ul>
            <aside className="cart-page__summary">
              <OrderSummary />
            </aside>
          </div>
        )}
      </div>

      {suggestions.length > 0 && (
        <section className="container cart-suggestions" aria-labelledby="cart-suggestions-title">
          <p className="eyebrow">Keep browsing</p>
          <h2 id="cart-suggestions-title" className="cart-suggestions__title">
            Pairs well with
          </h2>
          <ProductGrid productList={suggestions} />
        </section>
      )}
    </div>
  );
};
