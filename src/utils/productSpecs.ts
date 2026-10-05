import { Product } from "../Types/interfaces";

// Pulls the few facts that are written consistently in product copy (size,
// lead time, what a stand holds) into a structured spec list for the product
// page. Anything that doesn't match stays in the prose details untouched.

const allCopy = (product: Product) => [...product.shortDetails, ...product.details];

const tidy = (text: string) => text.trim().replace(/[.!]+$/, "");

export const dimensionsFor = (product: Product): string | undefined => {
  const line = allCopy(product).find((detail) =>
    /^(the (final )?product is|measurements:|size:)/i.test(detail.trim())
  );
  if (!line) return undefined;
  return tidy(line.replace(/^(the (final )?product is|measurements:|size:)\s*/i, ""));
};

export const leadTimeFor = (product: Product): string | undefined => {
  for (const detail of allCopy(product)) {
    const range = detail.match(/(\d+)\s*-\s*(\d+)\s*days/i);
    if (range) return `${range[1]}–${range[2]} days`;
    const upTo = detail.match(/(\d+)\s*days or less/i);
    if (upTo) return `${upTo[1]} days or less`;
  }
  return undefined;
};

export const fitsFor = (product: Product): string | undefined => {
  const line = allCopy(product).find((detail) => /^holds any sized card/i.test(detail.trim()));
  if (!line) return undefined;
  return tidy(line.replace(/^holds any sized card!?\s*/i, "")).replace(/\s*\+\s*/g, " + ");
};
