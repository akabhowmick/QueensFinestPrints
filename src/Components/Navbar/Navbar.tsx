import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

import { Suspense, useState } from "react";

import navbarLogo from "../../assets/Main/logo.webp";
import { links } from "../../utils/NavbarAndFooterLinks";
import { useCartContext } from "../../providers/CartProvider";
import { useCartUI } from "../../providers/CartUIProvider";
import { CartDrawer } from "../../Pages/Cart/CartDrawer";

const mobileMenuId = "mobile-nav-menu";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? " active" : ""}`;

export const Navbar = () => {
  const { cartItems } = useCartContext();
  const { openCart } = useCartUI();
  const [showNavbar, setShowNavbar] = useState(false);

  const closeMenu = () => setShowNavbar(false);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navList = (id?: string) => (
    <ul className="nav-list" id={id}>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink onClick={closeMenu} to={link.path} className={navLinkClassName}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="root-layout">
      <ScrollRestoration />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <nav aria-label="Main navigation" className="site-nav container">
          <NavLink onClick={closeMenu} to="/" className="brand">
            <img
              className="brand__logo"
              src={navbarLogo}
              alt=""
              width={36}
              height={36}
            />
            <span className="brand__name">Queens Finest Prints</span>
          </NavLink>

          <div className="nav-desktop">{navList()}</div>

          <div className="nav-actions">
            <button
              type="button"
              className="cart-trigger"
              onClick={() => {
                closeMenu();
                openCart();
              }}
              aria-label={`Open cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            >
              <ShoppingBagOutlinedIcon fontSize="small" aria-hidden="true" />
              <span className="cart-trigger__label">Cart</span>
              {cartCount > 0 && (
                <span className="cart-trigger__count" aria-hidden="true">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setShowNavbar(!showNavbar)}
              aria-expanded={showNavbar}
              aria-controls={mobileMenuId}
              aria-label={showNavbar ? "Close menu" : "Open menu"}
            >
              {showNavbar ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
        <div className={`nav-mobile${showNavbar ? " is-open" : ""}`} hidden={!showNavbar}>
          {navList(mobileMenuId)}
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <CartDrawer />
    </div>
  );
};
