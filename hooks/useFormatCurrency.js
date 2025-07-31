import { useMemo } from "react";

function useFormatCurrency(amount) {
  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  }

  return useMemo(() => formatCurrency(amount), [amount]);
}

export default useFormatCurrency;
