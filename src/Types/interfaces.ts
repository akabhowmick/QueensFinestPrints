import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface options {
  name: string | number;
  price: number;
}

export interface requiredCustomization {
  name: string;
  value: string;
}

export interface Product {
  name: string;
  price: number;
  bulkOptions?: options[];
  options?: options[];
  requiredCustomizations?: requiredCustomization[];
  shortDetails: string[];
  details: string[];
  images: string[];
  desc: string;
  quantity: number;
  id: number;
  type: string;
  learnMoreLink: string;
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
