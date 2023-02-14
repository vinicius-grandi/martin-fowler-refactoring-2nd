type Product = {
  basePrice: number;
  discountThreshold: number;
  discountRate: number;
};

type ShippingMethod = {
  discountThreshold: number;
  discountedFee: number;
  feePerCase: number;
};

type PriceData = {
  basePrice: number;
  discount: number;
  quantity: number;
};

function applyShippingCost(priceData: PriceData, shippingMethod: ShippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price;
}

function priceData(product: Product, quantity: number) {
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const basePrice = product.basePrice * quantity;
  return {
    basePrice,
    discount,
    quantity,
  };
}

export function priceOrder(
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod
) {
  // const discount =
  //   Math.max(quantity - product.discountThreshold, 0) *
  //   product.basePrice *
  //   product.discountRate;
  // const basePrice = product.basePrice * quantity;
  return applyShippingCost(priceData(product, quantity), shippingMethod);
}
