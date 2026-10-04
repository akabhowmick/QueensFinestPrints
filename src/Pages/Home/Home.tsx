import "./Home.css";
import { Link } from "react-router-dom";
import { products } from "../../utils/Products";
import { HeroSection } from "./HeroSection";
import { Reviews } from "./Reviews";
import { ProductGrid } from "../ProductPages/ProductGrid";
import { CropMarks } from "../../Components/CropMarks/CropMarks";

const FEATURED_COUNT = 8;

const categories = [
  { name: "Card Stands", path: "/card-stands", blurb: "Single, 3- and 6-card stands, plus bleachers" },
  {
    name: "Holders and Accessories",
    path: "/holders-and-accessories",
    blurb: "Game display holders and logo keychains",
  },
  { name: "Stadiums", path: "/stadiums", blurb: "Detailed replica ballparks and arenas" },
].map((category) => {
  const lead = products.find((product) => product.type === category.name);
  return { ...category, image: lead?.thumbnail ?? lead?.images[0] };
});

const steps = [
  { title: "Pick your piece", body: "Choose a stand, holder or stadium and the size that fits your collection." },
  { title: "Make it yours", body: "Add your colors and lettering, or send us your logo. We'll confirm the design with you." },
  { title: "We print it in Queens", body: "Each order is printed, finished and checked by hand before it ships." },
];

export const Home = () => (
  <div className="home">
    <HeroSection />

    <section className="container home-section" aria-labelledby="categories-title">
      <p className="eyebrow">Shop by category</p>
      <h2 id="categories-title" className="section-title">
        Built for the way you collect
      </h2>
      <ul className="category-grid">
        {categories.map((category) => (
          <li key={category.path}>
            <Link to={category.path} className="category-tile crop-host">
              <span className="category-tile__media">
                {category.image && (
                  <img src={category.image} alt="" width={330} height={248} loading="lazy" />
                )}
                <CropMarks variant="hover" />
              </span>
              <span className="category-tile__name">{category.name}</span>
              <span className="category-tile__blurb">{category.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <section className="container home-section" aria-labelledby="featured-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Best sellers</p>
          <h2 id="featured-title" className="section-title">
            Featured pieces
          </h2>
        </div>
        <Link to="/all" className="text-link section-head__link">
          Shop all products
        </Link>
      </div>
      <ProductGrid productList={products.slice(0, FEATURED_COUNT)} />
    </section>

    <section className="container home-section" aria-labelledby="process-title">
      <p className="eyebrow">How it works</p>
      <h2 id="process-title" className="section-title">
        Printed to order, start to finish
      </h2>
      <ol className="process">
        {steps.map((step, index) => (
          <li key={step.title} className="process__step">
            <span className="process__num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>

    <Reviews />
  </div>
);
