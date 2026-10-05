import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Product } from "../../Types/interfaces";
import { useCartContext } from "../../providers/CartProvider";
import { useCartUI } from "../../providers/CartUIProvider";
import { CropMarks } from "../CropMarks/CropMarks";
import { formatPrice } from "../../utils/formatPrice";

// The site's existing "30% off" presentation: the struck-through original is
// derived from the current price for display only.
const ORIGINAL_PRICE_MULTIPLIER = 1.3;

export const ProductCard = ({
  product,
  headingLevel = "h3",
}: {
  product: Product;
  headingLevel?: "h2" | "h3";
}) => {
  const { images, thumbnail, name, id, price, options, bulkOptions } = product;
  const { addToCart, cartItems } = useCartContext();
  const { openCart } = useCartUI();

  const inCart = cartItems.some((item) => item.id === id);
  const hasVariants = (options?.length ?? 0) > 0 || (bulkOptions?.length ?? 0) > 0;
  const productPath = `/products/${id}`;
  const Heading = headingLevel;

  return (
    <article className="product-card crop-host">
      <Link to={productPath} className="product-card__media" tabIndex={-1} aria-hidden="true">
        <img
          src={images[0]}
          srcSet={thumbnail ? `${thumbnail} 330w, ${images[0]} 800w` : undefined}
          sizes={
            thumbnail
              ? "(max-width: 600px) 92vw, (max-width: 900px) 46vw, (max-width: 1200px) 30vw, 290px"
              : undefined
          }
          alt=""
          width={400}
          height={300}
          loading="lazy"
          decoding="async"
        />
        <CropMarks variant="hover" />
      </Link>

      <div className="product-card__body">
        <Heading className="product-card__name">
          <Link to={productPath} title={name}>
            {name}
          </Link>
        </Heading>
        <p className="product-card__price">
          <span className="product-card__now">
            {hasVariants && <span className="product-card__from">From </span>}
            {formatPrice(price)}
          </span>
          <span className="price-was">
            <span className="visually-hidden">Originally </span>
            {formatPrice(price * ORIGINAL_PRICE_MULTIPLIER)}
          </span>
          <span className="tag-mark">30% off</span>
        </p>
      </div>

      <button
        type="button"
        className="btn btn-secondary btn-sm product-card__cta"
        onClick={() => {
          if (!inCart) addToCart(id);
          openCart();
        }}
        aria-label={inCart ? `${name} is in your cart. View cart` : `Add ${name} to cart`}
      >
        {inCart ? "In cart · View" : "Add to cart"}
      </button>
    </article>
  );
};
