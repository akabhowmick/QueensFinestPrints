import "./ProductDetail.css";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { Product } from "../../Types/interfaces";
import { useCartContext } from "../../providers/CartProvider";
import { useCartUI } from "../../providers/CartUIProvider";
import { ImageCarousel } from "../../Components/ImageCarousels/ImageCarousel";
import { CropMarks } from "../../Components/CropMarks/CropMarks";
import { fullDetailedDetails } from "../../utils/HelpfulText";
import { formatPrice } from "../../utils/formatPrice";
import { dimensionsFor, fitsFor, leadTimeFor } from "../../utils/productSpecs";
import { variantChoicesFor } from "../../utils/variantChoices";
import { defaultSkuIdForProduct, getCatalogItem } from "../../../shared/pricing";

const ORIGINAL_PRICE_MULTIPLIER = 1.3;

export const ProductDetail = ({ product }: { product: Product }) => {
  const { id, name, images, shortDetails, details, type } = product;
  const { addToCart, cartItems, changeItemVariant } = useCartContext();
  const { openCart } = useCartUI();

  const variants = useMemo(() => variantChoicesFor(id), [id]);
  const cartLine = cartItems.find((item) => item.id === id);
  const [selectedSku, setSelectedSku] = useState<string | undefined>(
    () => cartLine?.skuId ?? defaultSkuIdForProduct(String(id))
  );

  const selectedChoice = variants?.choices.find((choice) => choice.skuId === selectedSku);
  const catalogEntry = selectedSku ? getCatalogItem(selectedSku) : undefined;
  const displayPrice = catalogEntry ? catalogEntry.unitPriceCents / 100 : product.price;

  const dimensions = dimensionsFor(product);
  const leadTime = leadTimeFor(product);
  const fits = fitsFor(product);

  const cartHasThisVariant = cartLine !== undefined && cartLine.skuId === selectedSku;

  const handleAdd = () => {
    if (!cartLine) {
      addToCart(id, selectedSku, selectedChoice?.cartLabel);
    } else if (selectedSku && cartLine.skuId !== selectedSku && selectedChoice) {
      changeItemVariant(id, selectedSku, selectedChoice.cartLabel);
    }
    openCart();
  };

  const buyLabel = !cartLine
    ? "Add to cart"
    : cartHasThisVariant
      ? "In cart · View cart"
      : "Update cart";

  return (
    <div className="pdp container">
      <nav aria-label="Breadcrumb" className="pdp__crumbs">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/${type.toLowerCase().replace(/\s+/g, "-")}`}>{type}</Link>
          </li>
          <li aria-current="page">{name}</li>
        </ol>
      </nav>

      <div className="pdp__layout">
        <section className="pdp__gallery" aria-label={`${name} photos`}>
          <ImageCarousel images={images} name={name} />
        </section>

        <section className="pdp__info" aria-labelledby="pdp-title">
          <div className="pdp__sticky">
            <p className="eyebrow">{type}</p>
            <h1
              id="pdp-title"
              className={`pdp__title${name.length > 36 ? " pdp__title--long" : ""}`}
            >
              {name}
            </h1>

            <p className="pdp__price">
              <span className="pdp__price-now">{formatPrice(displayPrice)}</span>
              <span className="price-was">
                <span className="visually-hidden">Originally </span>
                {formatPrice(displayPrice * ORIGINAL_PRICE_MULTIPLIER)}
              </span>
              <span className="tag-mark">30% off</span>
            </p>

            {shortDetails.map((detail) => (
              <p key={detail} className="pdp__lede">
                {detail}
              </p>
            ))}

            {variants && (
              <fieldset className="pdp__options">
                <legend className="eyebrow">{variants.heading}</legend>
                <div className="option-grid">
                  {variants.choices.map((choice) => {
                    const choicePrice = getCatalogItem(choice.skuId);
                    const checked = choice.skuId === selectedSku;
                    return (
                      <label
                        key={choice.skuId}
                        className={`option-chip${checked ? " is-selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name={`variant-${id}`}
                          value={choice.skuId}
                          checked={checked}
                          onChange={() => setSelectedSku(choice.skuId)}
                        />
                        <span className="option-chip__check" aria-hidden="true">
                          {checked && <CheckIcon fontSize="inherit" />}
                        </span>
                        <span className="option-chip__label">{choice.label}</span>
                        {choicePrice && (
                          <span className="option-chip__price">
                            {formatPrice(choicePrice.unitPriceCents / 100)}
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            <div className="pdp__buy">
              <button type="button" className="btn btn-primary btn-block" onClick={handleAdd}>
                {buyLabel}
              </button>
              <p className="pdp__turnaround">
                <CropMarks tone="mark" />
                {/* TODO: confirm real print turnaround with the shop (qfp-TODO.md).
                    Falls back to the lead time stated in each product's own copy. */}
                Printed in Queens. Ready in {leadTime ?? "7–10 days"}.
              </p>
              <p className="pdp__note">
                Personalize colors and lettering in your cart, or{" "}
                <Link to="/contact-us" className="text-link">
                  send us your logo
                </Link>
                .
              </p>
            </div>

            {(dimensions || leadTime || fits) && (
              <dl className="spec-list">
                {dimensions && (
                  <div>
                    <dt>Size</dt>
                    <dd>{dimensions}</dd>
                  </div>
                )}
                {fits && (
                  <div>
                    <dt>Holds</dt>
                    <dd>{fits}</dd>
                  </div>
                )}
                {leadTime && (
                  <div>
                    <dt>Lead time</dt>
                    <dd>{leadTime}</dd>
                  </div>
                )}
                <div>
                  <dt>Made</dt>
                  <dd>3D printed to order in Queens, NY</dd>
                </div>
              </dl>
            )}

            <details className="pdp__more">
              <summary>Product details</summary>
              <div className="pdp__more-body">
                {details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </details>

            <details className="pdp__more">
              <summary>How to order</summary>
              <div className="pdp__more-body">
                {fullDetailedDetails.map((group, groupIndex) => (
                  <div key={groupIndex} className="pdp__how-group">
                    {group.map((line, index) =>
                      index === 0 && line === line.toUpperCase() ? (
                        <h3 key={line}>{line.charAt(0) + line.slice(1).toLowerCase()}</h3>
                      ) : (
                        <p key={line}>{line}</p>
                      )
                    )}
                  </div>
                ))}
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};
