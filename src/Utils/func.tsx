export const AddCommas = (x: { toString: () => string }) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
