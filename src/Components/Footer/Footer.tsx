import "./Footer.css";

import navbarLogo from "../../assets/Main/logo.webp";

import { socialButtons } from "../../utils/SocialMediaLink";
import { links } from "../../utils/NavbarAndFooterLinks";

// Rendered outside the router (see App.tsx), so plain anchors are used here.
const shopLinks = links.filter((link) => link.path !== "/contact-us");

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <a href="/" className="site-footer__logo">
            <img src={navbarLogo} alt="" width={40} height={40} />
            <span>Queens Finest Prints</span>
          </a>
          <p className="site-footer__line">
            Custom 3D-printed card stands, displays and replicas, printed to order in Queens, NY.
          </p>
        </div>

        <div>
          <h2 className="site-footer__heading">Shop</h2>
          <ul className="site-footer__list">
            <li>
              <a href="/all">All products</a>
            </li>
            {shopLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Help</h2>
          <ul className="site-footer__list">
            <li>
              <a href="/contact-us">Contact us</a>
            </li>
            <li>
              <a href="/cart">Your cart</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Follow</h2>
          <div className="site-footer__social">{socialButtons}</div>
        </div>
      </div>

      <div className="container site-footer__base">
        <p>© {new Date().getFullYear()} Queens Finest Prints. Printed in Queens, NY.</p>
        <p>
          Site by <a href="https://akashbhowmick.com/">AKA Code</a>
        </p>
      </div>
    </footer>
  );
};
