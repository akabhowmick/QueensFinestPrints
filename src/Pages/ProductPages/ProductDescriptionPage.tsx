import { useParams } from "react-router-dom";
import { products } from "../../utils/Products";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { ProductDetail } from "./ProductDetail";

export const ProductDescriptionPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId ?? "", 10));
  // key resets the selected option when navigating between products.
  return product ? <ProductDetail key={product.id} product={product} /> : <NotFoundPage />;
};
