/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { lazy } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../../Pages/Home/Home";
import { ProductPage } from "../../Pages/ProductPages/ProductPage";

const ThankYouPage = lazy(() =>
  import("../../Pages/ThankYouPage/ThankYouPage").then((m) => ({ default: m.ThankYouPage }))
);
const Checkout = lazy(() => import("../CheckoutProcess/Checkout/Checkout"));
const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);
const ContactUs = lazy(() =>
  import("../../Pages/ContactUs/ContactUs").then((m) => ({ default: m.ContactUs }))
);
const ProductDescriptionPage = lazy(() =>
  import("../../Pages/ProductPages/ProductDescriptionPage").then((m) => ({
    default: m.ProductDescriptionPage,
  }))
);
const CartPage = lazy(() =>
  import("../../Pages/Cart/CartPage").then((m) => ({ default: m.CartPage }))
);
const UploadImageForm = lazy(() =>
  import("../../Pages/UploadImage/UploadImage").then((m) => ({ default: m.UploadImageForm }))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="all" element={<ProductPage pageHeader="All Products" pageContent="all" />} />
      <Route
        path="card-stands"
        element={<ProductPage pageHeader="Custom Card Stands" pageContent="Card Stands" />}
      />
      <Route
        path="holders-and-accessories"
        element={<ProductPage pageHeader="Custom Holders and Accessories" pageContent="Holders and Accessories" />}
      />
       <Route
        path="stadiums"
        element={<ProductPage pageHeader="Custom Replica Stadium" pageContent="Stadiums" />}
      />
      <Route path="/products/:productId" element={<ProductDescriptionPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="thanks" element={<ThankYouPage />} />
      <Route path="upload-image" element={<UploadImageForm />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
