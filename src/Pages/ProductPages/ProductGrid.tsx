import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { Product } from "../../Types/interfaces";

export const ProductGrid = ({
  productList,
  headingLevel,
}: {
  productList: Product[];
  headingLevel?: "h2" | "h3";
}) => (
  <div className="product-grid">
    {productList.map((product) => (
      <ProductCard key={product.id} product={product} headingLevel={headingLevel} />
    ))}
  </div>
);
