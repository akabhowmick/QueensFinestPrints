import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useCartContext } from "../../providers/CartProvider";
import { Product } from "../../Types/interfaces";
import { formatPrice } from "../../utils/formatPrice";
import { variantChoicesFor } from "../../utils/variantChoices";
import { MAX_QUANTITY_PER_ITEM } from "../../../shared/pricing";

// One cart line, shared by the drawer ("compact") and the /cart page ("full").
// The full layout also exposes the variant picker and personalization fields.
export const CartItem = ({
  cartItem,
  layout = "full",
  onNavigate,
}: {
  cartItem: Product;
  layout?: "full" | "compact";
  onNavigate?: () => void;
}) => {
  const { removeFromCart, changeItemQuantity, changeItemCustomization, changeItemVariant } =
    useCartContext();
  const { images, thumbnail, price, name, id, quantity, requiredCustomizations, customerChoices, skuId } =
    cartItem;

  if (quantity <= 0) return null;

  const variants = variantChoicesFor(id);
  const selectedChoice = variants?.choices.find((choice) => choice.skuId === skuId);
  const choiceText = selectedChoice?.label ?? customerChoices?.[0]?.value;
  // Unit price comes from the catalog via the cart line; this is display-only.
  const lineTotal = (Math.round(price * 100) * quantity) / 100;
  const fieldId = (suffix: string) => `cart-${id}-${suffix.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <li className={`cart-line cart-line--${layout}`}>
      <Link to={`/products/${id}`} className="cart-line__thumb" onClick={onNavigate} tabIndex={-1} aria-hidden="true">
        <img src={thumbnail ?? images[0]} alt="" width={80} height={80} loading="lazy" />
      </Link>

      <div className="cart-line__main">
        <div className="cart-line__head">
          <h3 className="cart-line__name">
            <Link to={`/products/${id}`} onClick={onNavigate}>
              {name}
            </Link>
          </h3>
          <p className="cart-line__total">{formatPrice(lineTotal)}</p>
        </div>

        {choiceText && layout === "compact" && <p className="cart-line__meta">{choiceText}</p>}
        <p className="cart-line__meta">{formatPrice(price)} each</p>

        {layout === "full" && variants && (
          <div className="cart-field">
            <label htmlFor={fieldId("variant")}>{variants.heading}</label>
            <select
              id={fieldId("variant")}
              value={skuId}
              onChange={(event) => {
                const selected = variants.choices.find((c) => c.skuId === event.target.value);
                if (selected) changeItemVariant(id, selected.skuId, selected.cartLabel);
              }}
            >
              {variants.choices.map((choice) => (
                <option key={choice.skuId} value={choice.skuId}>
                  {choice.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="cart-line__actions">
          <div className="stepper" role="group" aria-label={`Quantity for ${name}`}>
            <button
              type="button"
              onClick={() => changeItemQuantity(id, "minusOne")}
              disabled={quantity <= 1}
              aria-label={`Decrease quantity of ${name}`}
            >
              <RemoveIcon fontSize="inherit" />
            </button>
            <span className="stepper__count" aria-live="polite">
              <span className="visually-hidden">Quantity </span>
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => changeItemQuantity(id, "addOne")}
              disabled={quantity >= MAX_QUANTITY_PER_ITEM}
              aria-label={`Increase quantity of ${name}`}
            >
              <AddIcon fontSize="inherit" />
            </button>
          </div>
          <button
            type="button"
            className="cart-line__remove"
            onClick={() => removeFromCart(id)}
            aria-label={`Remove ${name} from cart`}
          >
            Remove
          </button>
        </div>

        {layout === "full" && requiredCustomizations && requiredCustomizations.length > 0 && (
          <fieldset className="cart-personalize">
            <legend className="eyebrow">Personalization</legend>
            {requiredCustomizations.map(({ name: fieldName, value }) => (
              <div key={fieldName} className="cart-field">
                <label htmlFor={fieldId(fieldName)}>{fieldName}</label>
                <input
                  id={fieldId(fieldName)}
                  type="text"
                  value={value}
                  placeholder="Optional"
                  onChange={(event) => changeItemCustomization(id, fieldName, event.target.value)}
                />
              </div>
            ))}
          </fieldset>
        )}
      </div>
    </li>
  );
};
