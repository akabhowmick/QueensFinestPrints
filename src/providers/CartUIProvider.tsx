/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

// Open/closed state for the cart drawer. Deliberately separate from
// CartProvider so presentation state never mixes with cart/pricing state.
interface CartUIContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartUIContext = createContext<CartUIContextType>({
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
});

export const CartUIProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const value = useMemo(() => ({ isCartOpen, openCart, closeCart }), [isCartOpen, openCart, closeCart]);
  return <CartUIContext.Provider value={value}>{children}</CartUIContext.Provider>;
};

export const useCartUI = () => useContext(CartUIContext);
