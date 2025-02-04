import { Product } from "../../Types/interfaces";
import { products } from "../../utils/Products";
import { ProductGrid } from "./ProductGrid";

export const ProductPage = ({
  pageHeader,
  pageContent,
}: {
  pageHeader: string;
  pageContent: string;
}) => {
  let productList: Product[];

  if (pageContent === "Card Stands") {
    productList = products.filter((product) => product.type === "Card Stands");
  } else if (pageContent === "Holders and Accessories") {
    productList = products.filter((product) => product.type === "Holders and Accessories");
  } else if (pageContent === "Stadiums") {
    productList = products.filter((product) => product.type === "Stadiums");
  } else {
    productList = products;
  }

  return (
    <div className="product-page">
      <h2 className="page-header">{pageHeader}</h2>
      <ProductGrid productList={productList} />
    </div>
  );
};
