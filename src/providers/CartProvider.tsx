/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useMemo, createContext, useContext, ReactNode } from "react";
import { Product } from "../Types/interfaces";
import { products } from "../utils/Products";
import { sanitizeStoredCart } from "../utils/cartStorage";
import { calculateOrderTotal, defaultSkuIdForProduct, getCatalogItem } from "../../shared/pricing";

interface CartContextType {
  cartItems: Product[];
  total: number;
  tax: number;
  shipping: number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  changeItemQuantity: (id: number, changeType: string) => void;
  changeItemCustomization: (id: number, customizationName: string, value: string) => void;
  setCart: (newCart: Product[]) => void;
  finalTotal: number;
  changeItemVariant: (id: number, skuId: string, choiceLabel: string) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const CLEAR_CART_TIMEOUT = 20 * 60 * 1000; // 20 minutes in milliseconds

  // The one place the frontend computes order totals -- same shared function
  // the Netlify Functions use, so display totals can never drift from what
  // the server will actually charge. Not itself the source of truth for
  // charging: the server always recomputes independently from the cart's
  // skuIds/quantities rather than trusting any number sent by the client.
  const orderTotal = useMemo(() => {
    const items = cartItems
      .filter((item): item is Product & { skuId: string } => typeof item.skuId === "string")
      .map((item) => ({ id: item.skuId, quantity: item.quantity }));
    try {
      return calculateOrderTotal(items);
    } catch {
      return calculateOrderTotal([]);
    }
  }, [cartItems]);

  const total = orderTotal.subtotalCents / 100;
  const tax = orderTotal.taxCents / 100;
  const shipping = orderTotal.shippingCents / 100;
  const finalTotal = orderTotal.totalCents / 100;

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("QueensFinestPrintsCart");
    localStorage.removeItem("QueensFinestPrintsCartLastUpdated");
  };

  useEffect(() => {
    const maybeCart = localStorage.getItem("QueensFinestPrintsCart");
    if (maybeCart) {
      const sanitized = sanitizeStoredCart(maybeCart);
      if (sanitized.length > 0) {
        setCartItems(sanitized);
      } else {
        localStorage.removeItem("QueensFinestPrintsCart");
        localStorage.removeItem("QueensFinestPrintsCartLastUpdated");
      }
    }

    // Check for the last update timestamp
    const lastUpdated = localStorage.getItem("QueensFinestPrintsCartLastUpdated");
    if (lastUpdated) {
      const lastUpdatedTime = Number(lastUpdated);
      const currentTime = Date.now();
      const timeDiff = currentTime - lastUpdatedTime;

      // If more than 20 minutes have passed since the last update, clear the cart
      if (timeDiff > CLEAR_CART_TIMEOUT) {
        clearCart();
      }
    }

    // Optionally set an interval to check every minute
    const interval = setInterval(() => {
      const lastUpdated = localStorage.getItem("QueensFinestPrintsCartLastUpdated");
      if (lastUpdated) {
        const lastUpdatedTime = Number(lastUpdated);
        const currentTime = Date.now();
        const timeDiff = currentTime - lastUpdatedTime;

        if (timeDiff > CLEAR_CART_TIMEOUT) {
          clearCart();
        }
      }
    }, 60 * 1000); // Every minute

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCart = (newCart: Product[]) => {
    updateCartInLocalStorage(newCart);
    setCartItems(newCart);
  };

  const updateCartInLocalStorage = (cartArrayItems: Product[]) => {
    localStorage.setItem("QueensFinestPrintsCart", JSON.stringify(cartArrayItems));
    localStorage.setItem("QueensFinestPrintsCartLastUpdated", Date.now().toString());

    if (cartArrayItems.length === 0) {
      localStorage.removeItem("QueensFinestPrintsCart");
      localStorage.removeItem("QueensFinestPrintsCartLastUpdated");
    }
  };

  const addToCart = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (!product || cartItems.find((item) => item.id === id)) return;

    const skuId = defaultSkuIdForProduct(String(id));
    const skuEntry = skuId ? getCatalogItem(skuId) : undefined;
    const newProduct: Product = {
      ...JSON.parse(JSON.stringify(product)),
      skuId,
      price: skuEntry ? skuEntry.unitPriceCents / 100 : product.price,
    };
    const newCart = [...cartItems, newProduct];
    setCart(newCart);
  };

  const removeFromCart = (id: number) => {
    const originalProduct = products.find((product) => product.id === id);
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && "customerChoices" in item) {
        delete item.customerChoices;
        item.price = originalProduct?.price || item.price;
        item.skuId = originalProduct ? defaultSkuIdForProduct(String(originalProduct.id)) : item.skuId;
      }
      return item;
    });
    const newCart = updatedCartItems.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const changeItemQuantity = (id: number, changeType: string) => {
    const changeAmount = changeType === "addOne" ? 1 : -1;
    const updatedCartItems: Product[] = cartItems.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity + changeAmount;
        return {
          ...item,
          quantity: updatedQuantity > 0 ? updatedQuantity : item.quantity,
        };
      }
      return item;
    });
    setCart(updatedCartItems);
  };

  const changeItemCustomization = (id: number, customizationName: string, value: string) => {
    const updatedCartItems: Product[] = cartItems.map((item) => {
      if (item.id === id) {
        const updatedCustomizations = item.requiredCustomizations?.map((customization) => {
          if (customization.name === customizationName) {
            return { ...customization, value: value };
          }
          return customization;
        });

        return {
          ...item,
          requiredCustomizations: updatedCustomizations,
        };
      }
      return item;
    });
    setCart(updatedCartItems);
  };

  // Changing a product's size/style/bulk-pack selection changes which SKU
  // (and therefore which price) the cart line represents. price here is only
  // ever set from the shared catalog's lookup for that skuId, never from
  // anything the caller passes in directly -- this is what the create-order
  // function will independently recompute and charge.
  const changeItemVariant = (id: number, skuId: string, choiceLabel: string) => {
    const skuEntry = getCatalogItem(skuId);
    if (!skuEntry) return;
    const updatedCartItems: Product[] = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          skuId,
          price: skuEntry.unitPriceCents / 100,
          customerChoices: [{ name: "Selected Option", value: choiceLabel }],
        };
      }
      return item;
    });
    setCart(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        tax,
        shipping,
        addToCart,
        removeFromCart,
        changeItemQuantity,
        changeItemCustomization,
        setCart,
        changeItemVariant,
        finalTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
