/**
 * Default count formatter using K,M,B,T notation for compact representation.
 * @param {number} number extra avatar count.
 * @returns formatted string.
 */
const CompactNumber = (number) => {
   return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
   }).format(number);
};

export default CompactNumber;
