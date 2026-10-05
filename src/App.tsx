import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

// Context Providers
import { CartProvider } from "./providers/CartProvider";
import { CartUIProvider } from "./providers/CartUIProvider";
import { UserProvider } from "./providers/UserProvider";

// sections or components
import { Footer } from "./Components/Footer/Footer";
import { router } from "./Components/Layouts/Router";
import { muiTheme } from "./theme/muiTheme";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <UserProvider>
        <CartProvider>
          <CartUIProvider>
            <RouterProvider router={router} />
            <Footer />
          </CartUIProvider>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
