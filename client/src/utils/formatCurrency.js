export const formatCurrency = (price) => {
  return new Intl.NumberFormat("en-US").format(price);
};
