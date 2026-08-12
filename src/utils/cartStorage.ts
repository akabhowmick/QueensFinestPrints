import { Product, customerChoice, requiredCustomization } from "../Types/interfaces";
import { products } from "./Products";

const isCustomerChoice = (val: unknown): val is customerChoice =>
  typeof val === "object" &&
  val !== null &&
  typeof (val as customerChoice).name === "string" &&
  typeof (val as customerChoice).value === "string";

const isRequiredCustomization = (val: unknown): val is requiredCustomization =>
  typeof val === "object" &&
  val !== null &&
  typeof (val as requiredCustomization).name === "string" &&
  typeof (val as requiredCustomization).value === "string";

const isCartItemShape = (val: unknown): val is Record<string, unknown> => {
  if (typeof val !== "object" || val === null) return false;
  const item = val as Record<string, unknown>;
  return typeof item.id === "number" && typeof item.quantity === "number" && item.quantity > 0;
};

// Mirrors CartProvider's updateItemCustomization price lookup: the price always
// comes from the current product list, never from whatever was in storage.
const priceForChoices = (masterProduct: Product, customerChoices?: customerChoice[]) => {
  let price = masterProduct.price;
  customerChoices?.forEach((choice) => {
    const bulkMatch = masterProduct.bulkOptions?.find(
      (opt) => opt.name.toString() === choice.value
    );
    const optionMatch = masterProduct.options?.find((opt) => opt.name.toString() === choice.value);
    if (bulkMatch) price = bulkMatch.price;
    else if (optionMatch) price = optionMatch.price;
  });
  return price;
};

// Parses and validates a persisted cart, dropping anything that doesn't match a
// known product. Quantity and customization choices are trusted from storage;
// price is always recomputed from the current Products.ts so a tampered or
// stale localStorage value can never change what gets charged.
export const sanitizeStoredCart = (raw: string | null): Product[] => {
  if (!raw) return [];

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed)) return [];

  return parsed
    .filter(isCartItemShape)
    .map((item) => {
      const master = products.find((p) => p.id === item.id);
      if (!master) return null;

      const customerChoices = Array.isArray(item.customerChoices)
        ? item.customerChoices.filter(isCustomerChoice)
        : undefined;
      const requiredCustomizations = Array.isArray(item.requiredCustomizations)
        ? item.requiredCustomizations.filter(isRequiredCustomization)
        : master.requiredCustomizations;

      const sanitized: Product = {
        ...master,
        quantity: item.quantity as number,
        requiredCustomizations,
        price: priceForChoices(master, customerChoices),
      };
      if (customerChoices) sanitized.customerChoices = customerChoices;
      return sanitized;
    })
    .filter((item): item is Product => item !== null);
};
