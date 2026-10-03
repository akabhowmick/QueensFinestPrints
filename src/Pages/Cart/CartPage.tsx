import { useEffect, useState } from "react";
import { Product } from "../../Types/interfaces";
import { useCartContext } from "../../providers/CartProvider";
import "./Cart.css";
import { CartBottom } from "./CartBottom";
import { CartItem } from "./CartItem";
import { products } from "../../utils/Products";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";

export const CartPage = () => {
  const { cartItems } = useCartContext();

  const [cartSuggestions, setCartSuggestions] = useState<Product[]>([]);

  useEffect(() => {
    const getCartSuggestions = products.filter(
      (item1) => !cartItems.some((item2) => item1.id === item2.id)
    );
    setCartSuggestions(getCartSuggestions);
  }, [cartItems]);

  const pageCartViews =
    cartItems?.length === 0 ? (
      <div className="empty-cart-container">
        <h2>Your cart is empty!</h2>
        <h3>Consider one of the following items:</h3>
        <div className="cart-display-empty-products">
          {cartSuggestions.map((product) => {
            return <SingleProduct key={product.id} product={product} displayType="card" />;
          })}
        </div>
      </div>
    ) : (
      <>
        <div className="cart-items">
          {cartItems?.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
        </div>
        <CartBottom cartSuggestions={cartSuggestions} />
      </>
    );

  return (
    <section className="cart-page">
      <h1 className="page-header">View Your Cart</h1>
      <div className="cart-page-container">{pageCartViews}</div>
    </section>
  );
};
