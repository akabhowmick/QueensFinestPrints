import { productCatalog } from "../../shared/pricing";

export interface VariantChoice {
  skuId: string;
  label: string;
  /** Label stored on the cart line's customerChoices (matches existing cart wording). */
  cartLabel: string;
}

// Display-only list of a product's purchasable variants, straight from the
// shared catalog. Prices shown for a choice are looked up from the same
// catalog by skuId; the cart and server price by skuId independently.
export const variantChoicesFor = (
  productId: number
): { heading: string; choices: VariantChoice[] } | null => {
  const entry = productCatalog.find((p) => p.productId === String(productId));
  if (!entry || entry.variantKind === "single" || entry.variants.length < 2) return null;
  if (entry.variantKind === "bulk") {
    return {
      heading: "Pack size",
      choices: entry.variants.map((variant) => ({
        skuId: variant.skuId,
        label: variant.label === 1 ? "Single" : `${variant.label}-pack`,
        cartLabel: `Bulk Option - Pack of ${variant.label}`,
      })),
    };
  }
  return {
    heading: "Style",
    choices: entry.variants.map((variant) => ({
      skuId: variant.skuId,
      label: String(variant.label),
      cartLabel: `Model Type - ${variant.label}`,
    })),
  };
};
