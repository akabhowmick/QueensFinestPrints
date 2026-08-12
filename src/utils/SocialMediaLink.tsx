import {
  faEbay,
  faEtsy,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcon } from "../Types/interfaces";

const fontAwesomeIcons: (faIcon & { name: string })[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/people/QueensFinest-Prints/pfbid02vTYUysTVy569mKjooAi9EJqWzrCUQMGfTaU8MDCbTBBxrG6HrxLwc9s9Y3AiwMVAl/",
    icon: faFacebook,
  },
  { name: "Instagram", link: "https://www.instagram.com/queensfinestprints/", icon: faInstagram },
  { name: "Etsy", link: "https://www.etsy.com/shop/QueensFinestPrints", icon: faEtsy },
  { name: "eBay", link: "https://www.ebay.com/usr/chris_cards_3", icon: faEbay },
];

export const socialButtons = fontAwesomeIcons.map(({ link, icon, name }) => {
  return (
    <a href={link} key={link} aria-label={name} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon id="btn__social" className="icon" icon={icon} />
    </a>
  );
});
