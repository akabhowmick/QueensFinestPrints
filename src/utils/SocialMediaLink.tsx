import {
  faEbay,
  faEtsy,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcon } from "../Types/interfaces";

const fontAwesomeIcons: faIcon[] = [
  { link: "https://www.facebook.com/people/QueensFinest-Prints/pfbid02vTYUysTVy569mKjooAi9EJqWzrCUQMGfTaU8MDCbTBBxrG6HrxLwc9s9Y3AiwMVAl/", icon: faFacebook },
  { link: "https://www.instagram.com/queensfinestprints/", icon: faInstagram },
  { link: "https://www.etsy.com/shop/QueensFinestPrints", icon: faEtsy },
  { link: "https://www.ebay.com/usr/chris_cards_3", icon: faEbay },
];

export const socialButtons = fontAwesomeIcons.map(({ link, icon }) => {
  return (
    <a href={link} key={link}>
      <FontAwesomeIcon id="btn__social" className="icon" icon={icon} />
    </a>
  );
});
