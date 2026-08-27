import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface options {
  name: string | number;
  price: number;
  skuId: string;
}

export interface requiredCustomization {
  name: string;
  value: string;
}

export interface customerChoice {
  name: string;
  value: string;
}

export interface Product {
  name: string;
  price: number;
  bulkOptions?: options[];
  options?: options[];
  requiredCustomizations?: requiredCustomization[];
  customerChoices?: customerChoice[]
  shortDetails: string[];
  details: string[];
  images: string[];
  desc: string;
  quantity: number;
  id: number;
  type: string;
  learnMoreLink: string;
  // Identifies the exact priced variant (size/style/bulk-pack) a cart line
  // represents. Populated once a catalog product is added to the cart; the
  // server prices orders by skuId alone, never by anything else on this type.
  skuId?: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface SiteLink {
  name: string;
  path: string;
}

export interface faIcon {
  link: string;
  icon: IconProp;
}

export interface HeroButton {
  color: string;
  imageSrc: string;
}

export interface cartTotalDetail {
  name: string;
  value: string;
}
