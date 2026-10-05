import { Product } from "../../Types/interfaces";
import { products } from "../../utils/Products";
import { ProductGrid } from "./ProductGrid";
import { PageIntro } from "../../Components/PageIntro/PageIntro";

const categoryLedes: Record<string, string> = {
  "Card Stands": "Stands for slabs, one-touches and top loaders, printed with your name or logo.",
  "Holders and Accessories": "Display holders, keychains and desk pieces to round out the collection.",
  Stadiums: "Detailed 3D-printed replica stadiums, built to sit beside your cards.",
  all: "Everything we print, from single-card stands to full replica stadiums.",
};

export const ProductPage = ({
  pageHeader,
  pageContent,
}: {
  pageHeader: string;
  pageContent: string;
}) => {
  const productList: Product[] =
    pageContent === "all"
      ? products
      : products.filter((product) => product.type === pageContent);

  return (
    <div className="product-page">
      <PageIntro
        eyebrow={`${productList.length} ${productList.length === 1 ? "product" : "products"}`}
        title={pageHeader}
      >
        {categoryLedes[pageContent]}
      </PageIntro>
      <section className="container" aria-label={pageHeader}>
        <ProductGrid productList={productList} headingLevel="h2" />
      </section>
    </div>
  );
};
