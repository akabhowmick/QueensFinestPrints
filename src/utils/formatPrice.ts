const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

// Display-only formatting. Amounts come from the cart context / shared
// catalog; nothing here computes prices.
export const formatPrice = (amount: number) => usd.format(amount);
