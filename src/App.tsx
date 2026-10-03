import "./App.css";
import { RouterProvider } from "react-router-dom";

// Context Providers
import { CartProvider } from "./providers/CartProvider";
import { UserProvider } from "./providers/UserProvider";

// sections or components
import { Footer } from "./Components/Footer/Footer";
// import { Cart } from "./Pages/Cart/Cart";
import { router } from "./Components/Layouts/Router";
import FloatingCartButton from "./Pages/Cart/FloatingCart";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
          {/* <Cart /> */}
          <nav aria-label="Cart shortcut">
            <FloatingCartButton />
          </nav>
          <Footer />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
