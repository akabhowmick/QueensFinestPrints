import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router-dom";

import { NavUnlisted } from "./NavbarStyles";
import { useState } from "react";

import navbarLogo from "../../assets/Main/logo.png";
import { links } from "../../utils/NavbarAndFooterLinks";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../providers/CartProvider";

const mobileMenuId = "mobile-nav-menu";

const navLinkClassName = ({
  isActive,
  isPending,
  isTransitioning,
}: {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}) =>
  [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : ""].join(
    " "
  );

export const Navbar = () => {
  const { cartItems } = useCartContext();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const CartLinkContent = (
    <NavLink to="/cart" className={navLinkClassName} onClick={() => setShowNavbar(false)}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>Cart</span> ({cartCount})
    </NavLink>
  );

  const renderNavList = () => (
    <ul className="navbar-links-container">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink onClick={() => setShowNavbar(false)} to={link.path} className={navLinkClassName}>
            {link.name}
          </NavLink>
        </li>
      ))}
      <li id="cart-btn">{CartLinkContent}</li>
    </ul>
  );

  const logoHeaderLink = (
    <NavLink onClick={() => setShowNavbar(false)} to="/" id="logo-with-title">
      <img className="navbar-logo" src={navbarLogo} alt="Queens Finest Prints logo" />
      <h2>Queens Finest Prints</h2>
    </NavLink>
  );

  return (
    <div className="root-layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="nav-bar">
        <nav aria-label="Main navigation">
          <NavUnlisted className="main-navbar-ul">
            <div className="main-regular-links">{renderNavList()}</div>

            <button
              type="button"
              className="menu-icon"
              onClick={handleShowNavbar}
              aria-expanded={showNavbar}
              aria-controls={mobileMenuId}
              aria-label={showNavbar ? "Close menu" : "Open menu"}
            >
              <MenuIcon />
            </button>
            <div className="cart-small-screen">{CartLinkContent}</div>
            <div
              className={`nav-elements${showNavbar ? " nav-elements-open" : ""}`}
              id={mobileMenuId}
            >
              {renderNavList()}
            </div>
            {logoHeaderLink}
          </NavUnlisted>
        </nav>
      </header>
      <main id="main-content">
        <Outlet />
      </main>
    </div>
  );
};
