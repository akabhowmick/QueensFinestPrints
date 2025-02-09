import { Product, requiredCustomization } from "../Types/interfaces";

import gameCardHolder1 from "../assets/Sports/GameCardHolderStand/gc1.png";
import gameCardHolder2 from "../assets/Sports/GameCardHolderStand/gc2.png";
import gameCardHolder3 from "../assets/Sports/GameCardHolderStand/gc3.png";

import cardStand2 from "../assets/Sports/CardStand/cs2.png";
import cardStand3 from "../assets/Sports/CardStand/cs3.png";
import cardStand4 from "../assets/Sports/CardStand/cs4.png";
import cardStand5 from "../assets/Sports/CardStand/cs5.png";
import cardStand6 from "../assets/Sports/CardStand/cs6.png";

import hsh1 from "../assets/Sports/HorizontalSixCardStand/h1.png";
import hsh2 from "../assets/Sports/HorizontalSixCardStand/h2.png";
import hsh3 from "../assets/Sports/HorizontalSixCardStand/h3.png";

import h1 from "../assets/Sports/ThreeCardStand/h1.png";
import h2 from "../assets/Sports/ThreeCardStand/h2.png";
import h3 from "../assets/Sports/ThreeCardStand/h3.png";
import h4 from "../assets/Sports/ThreeCardStand/h4.png";


import cs1 from "../assets/DeskToppers/CityStand/cs1.png";
import cs2 from "../assets/DeskToppers/CityStand/cs2.png";
import cs3 from "../assets/DeskToppers/CityStand/cs3.png";
import cs4 from "../assets/DeskToppers/CityStand/cs4.png";
import cs5 from "../assets/DeskToppers/CityStand/cs5.png";


import k1 from "../assets/DeskToppers/Keychains/k1.png";
import k2 from "../assets/DeskToppers/Keychains/k2.png";
import k3 from "../assets/DeskToppers/Keychains/k3.png";
import k4 from "../assets/DeskToppers/Keychains/k4.png";
import k5 from "../assets/DeskToppers/Keychains/k5.png";
import k6 from "../assets/DeskToppers/Keychains/k6.png";

import bcs1 from "../assets/Sports/BleacherCardStand/b1.png";
import bcs2 from "../assets/Sports/BleacherCardStand/b2.png";

import gcs1 from "../assets/Stadiums/GC/s1.png";
import gcs2 from "../assets/Stadiums/GC/s2.png";
import gcs3 from "../assets/Stadiums/GC/s3.png";

import cls1 from "../assets/Stadiums/CL/s1.png";
import cls2 from "../assets/Stadiums/CL/s2.png";
import cls3 from "../assets/Stadiums/CL/s3.png";
import cls4 from "../assets/Stadiums/CL/s2.png";
import cls5 from "../assets/Stadiums/CL/s3.png";

import video from "../assets/Main/main.mp4"
import poster from "../assets/Main/poster.jpeg"

export const videoPath = video;
export const posterPath = poster;
const commonCustomizations: requiredCustomization[] = [
  { name: "Color of Holder", value: "" },
  { name: "Color of Letterings", value: "" },
  { name: "Custom Lettering (OR DM us your logo)", value: "" },
];

// card stand
const cardStand: Product = {
  name: "Custom Single Card Stand",
  price: 25.0,
  bulkOptions: [
    { name: 1, price: 25.0 },
    { name: 2, price: 45.0 },
    { name: 3, price: 60.0 },
    { name: 4, price: 75.0 },
    { name: 5, price: 90.0 },
    { name: 6, price: 105.0 },
    { name: 8, price: 128.0 },
    { name: 10, price: 150.0 },
    { name: 20, price: 320.0 },
    { name: 25, price: 375.0 },
  ],
  shortDetails: [
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Please specify in the personalization section which Primary Color (Stand) and which Secondary Color (Players Name) you would like!",
    "Please specify which player's name/nickname you want and we will send you the design to confirm approval.",
    "Purchase multiple for discounts!",
    "Holds any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Lead times are currently anywhere between 7-10 days for production.",
    "The product is 4 inches wide x 1-inch tall x 1-inch in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder! *Card/Slab in picture NOT included",
    "We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits for you.",
  ],
  images: [cardStand2, cardStand3, cardStand4, cardStand5, cardStand6],
  desc: "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
  quantity: 1,
  id: 1,
  type: "Card Stands",
  learnMoreLink: "/products/1",
};

// game display
const gameCardHolder: Product = {
  name: "Game Display Card Holder Stand",
  price: 15.0,
  shortDetails: [
    "We present to your attention our Game Display Card Holder Stand for desk of the highest quality. It is a unique administrative professionals day gift.",
    "Card Storage Stand is the perfect way to display your affirmation card, business card. The perfect Card Organizer for people who just want to showcase their information cards in the workplace.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Display your favorite sports, trading cards or Display Tier Business Card Stand IN FASHION.",
    "Game Display Card Holder Stand is the best gift for business owners and other professionals.",
    "EXCELLENT VALUE - each order includes 2 Grandstand Display Stands - which fits 4 cards on display and 40 top loaders for storage!",
    "UNIVERSAL - fits all sized cards; PSA, CGC, BGS slabs, top loaders, one-touch cases, etc",
    "*Cards in the pictures are not included",
    "Lead time for orders is 3 days or less for manufacturing!",
    "Please message us if you would like it in a different color.",
    "The product is 8in tall x 4.25in wide x 4.75in in depth.",
    "If you have any problems after the purchase, please feel free to contact us for customer service, which will make your purchase absolutely risk-free and you could enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [gameCardHolder1, gameCardHolder2, gameCardHolder3],
  desc: "",
  quantity: 1,
  id: 2,
  type: "Card Stands",
  learnMoreLink: "/products/2",
};

// horizontal
const horizontalSixCardStand: Product = {
  name: "Custom 6-Card Stand",
  price: 85.0,
  shortDetails: [
    "We present to your attention our 6 Card (Horizontal) Custom Logo Card Stand for desk of the highest quality. It is a unique administrative professional's day gift.",
    "Sports card displays are the perfect way to display your sports cards along with your brand!",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Display your favorite sports or trading card with YOUR logo or your own personalized wording. Lead time for custom orders is around 7-10 days for manufacturing!",
    "This custom stand fits 6 cards of any size!",
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
    "Purchase multiple for discounts! Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Customizing is simple! Please specify in the personalization section which Primary Color (Stand) and which Secondary Color (Players Name) you would like!",
    "Message us with the personalization you want and we will send you the mock-up of the design to confirm your approval.",
    "The product is 19in wide x 2in tall x 3in in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder!*Card/Slab in picture NOT included",
    "We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits you",
    "If you have any problems after the purchase, please feel free to contact us for customer service, which will make your purchase absolutely risk-free and you could enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [hsh1, hsh2, hsh3],
  desc: "",
  quantity: 1,
  id: 3,
  type: "Card Stands",
  learnMoreLink: "/products/3",
};

// horizontal
const BleacherCardStand: Product = {
  name: "3-Tiered Bleachers - Card Display",
  price: 100.0,
  shortDetails: [
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording. This design holds up to 21 cards at once!",
    "Lead time for custom orders are around 7-10 days for manufacturing!",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Purchase multiple for discounts!",
    "Holds any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
    "Customizing is simple - put in the personalization you want in the cart and we will send you the mock-up of the design to confirm your approval.",
    "The final product is 19 inches wide x 8 inches tall x 8 inches deep",
    "*Cards in the pictures are NOT included. We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits for you.",
  ],
  images: [bcs1, bcs2],
  desc: "3-Tiered Bleachers - Card Display - Custom Logo",
  quantity: 1,
  id: 9,
  type: "Card Stands",
  learnMoreLink: "/products/9",
};

// 3 card
const threeCardStand: Product = {
  name: "Custom 3-Card Stand",
  price: 49.99,
  requiredCustomizations: commonCustomizations,
  shortDetails: [
    "We present to your attention our 3 Cards Custom Logo Card Stand for desk of the highest quality. It is a unique administrative professionals day gift.",
    "Sports Card Display is the perfect way to display your affirmation card, business card. The perfect Card Organizer for people who just want to showcase their information cards in the workplace.",
  ],
  details: [
    "Display your favorite sports or trading card with YOUR logo or your own personalized wording. Lead time for custom orders is around 7-10 days for manufacturing!",
    "3 Cards Custom Logo Card Stand is the best gift for business owners and other professionals.",
    "This custom stand fits 3cards of any size!",
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
    "Lead time for custom orders is around 5-7 days for manufacturing!",
    "Purchase multiple for discounts! Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Please specify in the personalization section which Primary Color (Stand)",
    "Message us with the personalization you want and we will send you the mock-up of the design to confirm your approval.",
    "The product is 11.5in wide x 2in tall x 2.5in in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder! *Card/Slab in picture NOT included",
    "We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits you.",
    "If you have any problems after the purchase, please feel free to contact us for customer service, which will make your purchase absolutely risk-free and you could enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [h1, h2, h3, h4],
  desc: "3 Cards Custom Logo Card Stand, Sports Card Display, Trading Card Display Stand, Business Card Stand, Card Organizer, Card Holder Stand",
  quantity: 1,
  id: 4,
  type: "Card Stands",
  learnMoreLink: "/products/4",
};

// city stand
const cityStand: Product = {
  name: "Unique Custom New York City Skyline",
  price: 10.0,
  shortDetails: [
    "This is a listing for custom orders only. Choosing this option will be set between buyer and seller for details.",
    "Once we agree on your request you will receive the design via email within 24 hours.",
    "Please DO NOT purchase unless your request was already approved by me, thank you.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "This New York City Sign New York skyline sign is the perfect way to display your love for the city of New York! Whether you're a New York native or just a fan from afar, this 3D laser cut sign is sure to impress.",
    "We have the following colors: Black, White, Grey, Red, Green, Yellow, Blue, Orange, Blue-Green, Magenta, and Glow in the Dark",
    "The product is 4 inches tall x 6.5 inches wide x 3 inches in depth.",
    "*If you would like a different city (skyline and wording) message us and we'll work with you! We'll design it, confirm you like the design, and then print it for you!",
    "If you have any problems after the purchase, please contact us for customer service, which will make your purchase risk-free and you can enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [cs1, cs2, cs3, cs4, cs5],
  desc: "Custom City Stand!",
  quantity: 1,
  id: 5,
  type: "Holders and Accessories",
  learnMoreLink: "/products/5",
};

// keychains
const keyChain: Product = {
  name: "Unique Custom Signature Keychain - With your Logo",
  price: 10.0,
  bulkOptions: [
    { name: 10, price: 10.0 },
    { name: 25, price: 20.0 },
    { name: 50, price: 40.0 },
    { name: 100, price: 75.0 },
    { name: 150, price: 125.0 },
    { name: 200, price: 150.0 },
    { name: 500, price: 250.0 },
  ],
  shortDetails: [
    "Custom Keychains are small, circular accessories made from a durable piece that is commonly used to hold keys.",
    "Unique Backpack Keychain is a popular item due to its simplicity and versatility, and Aesthetic Safety Keychain can be used for personal use or given to your friends.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Custom Keychains with a message, date, name or coordinate for a gift that is both sweet and practical.",
    "Personalize Keychain, it is sure to be a special charm they will treasure for many moments to come. Double-sided engravings are also available for double the sweet sentiments.",
    "Send these out as giveaways to your subscribers/customers to show off and advertise your brand. It's like a walking advertisement! Or just gain style points walking around with your logo on your keychain or backpack! Our design team will work with you to come up with the perfect unique design that you want to show off!",
    "This Custom Keychains is designed exactly how you want it!",
    "Material: PLA (Polylactic acid)",
    "Size: Typically 1.5in. x 1.5in. (varies on customization)",
    "After placing your order:",
    "- Send us your logo and we will send you a mock-up of how the keychains will come out.",
    "- You comment or approve the rendering",
    "- We go into production and ship out ASAP!",
  ],
  images: [k1, k2, k3, k4, k5, k6],
  desc: "Your Personalized Keychain",
  quantity: 1,
  id: 6,
  type: "Holders and Accessories",
  learnMoreLink: "/products/6",
};

//city life stadiums
const CLStadium: Product = {
  name: "Citi Field Stadium - New York Mets - New York City NYC Edition",
  price: 125.0,
  options: [
    { name: "Stadium Only", price: 135.0 },
    { name: "Personalizations*", price: 150.0 },
  ],
  shortDetails: [
    "Citi Field - New York Mets 3D Printed Replica Stadium - NYC - New York City Edition Customization!",
    "This well-detailed 3D printed model is the perfect gift, souvenir, or collectible for every New York Mets super fan. This item looks fantastic on any desk, counter, dresser, or stand.",
  ],
  details: [
    "This stadium has New York City and NYM unique features including Home Run Apple, Grimace, OMG sign, Empire State Building, Chrysler Building, Statue of Liberty, Playoff Pumpkin, and Retired Numbers. The replica also includes built-in LED lights, adjustable to whichever color you'd prefer.",
    "Custom/personalized labels are available for an additional $15. Message me if interested and I will create a custom order.",
    "Measurements: 9.9in x 9.0in x 4.7in",
    "Feel free to message us with requests for other stadiums for any sport.",
    "Please keep in mind that every 3D-printed part is unique. The photos give a good representation of what to expect.",
    "Feel free to message us with requests for other stadiums for any sport.",
    "Please contact me with any questions at queensfinestprints@gmail.com",
  ],
  images: [cls2, cls1, cls3, cls4, cls5],
  desc: "Citi Field Stadium - New York Mets - New York City NYC Edition",
  quantity: 1,
  id: 7,
  type: "Stadiums",
  learnMoreLink: "/products/7",
};

//golden center stadiums
const GCStadium: Product = {
  name: "Golden 1 Center - Sacramento Kings 3D Printed Replica Stadium",
  price: 135.0,
  options: [
    { name: "Stadium Only", price: 135.0 },
    { name: "Personalizations*", price: 150.0 },
  ],
  shortDetails: [
    "Golden 1 Center - Sacramento Kings 3D Printed Replica Stadium - Light The Beam Customization!",
    "This well-detailed 3D printed model is the perfect gift, souvenir, or collectible for every Sacramento Kings super fan. Looks fantastic on any desk, counter, dresser, or stand. This stadium has a removable roof option to allow for a full view of the basketball court, along with a projection of the purple beam.",
  ],
  details: [
    "The purple beam is lit up using LED lights - included.",
    "Custom/personalized labels are available for $15. Message me if interested and I will create a custom order.",
    "Measurements: 6in x 6in x 3in (Beam projects 5in, making the total height 8in tall)",
    "Please keep in mind that every 3D-printed part is unique. The photos give a good representation of what to expect.",
    "Feel free to message us with requests for other stadiums for any sport.",
    "Please contact me with any questions at queensfinestprints@gmail.com",
  ],
  images: [gcs2, gcs1, gcs3],
  desc: "Golden 1 Center Replica Stadium",
  quantity: 1,
  id: 8,
  type: "Stadiums",
  learnMoreLink: "/products/8",
};

export const products: Product[] = [
  cardStand,
  horizontalSixCardStand,
  threeCardStand,
  gameCardHolder,
  keyChain,
  cityStand,
  BleacherCardStand,
  CLStadium,
  GCStadium,
];
