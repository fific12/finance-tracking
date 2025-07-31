import { useMemo } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import useFormatCurrency from "@/hooks/useFormatCurrency";

function Trend({ type, amount, prevAmount }) {
  const formattedAmount = useFormatCurrency(amount);

  function calcPercentageChange() {
    if (!prevAmount || !amount) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  }

  const percentageChange = useMemo(
    () => calcPercentageChange(amount, prevAmount).toFixed(0),
    [amount, prevAmount]
  );

  const colorClasses = {
    Income: "text-green-600 dark:text-green-400",
    Expenses: "text-red-600 dark:text-red-400",
    Investments: "text-blue-600 dark:text-blue-400",
    Savings: "text-yellow-600 dark:text-yellow-400",
  };

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {formattedAmount}
      </div>

      <div className="flex space-x-1 items-center text-sm">
        {percentageChange <= 0 && <ArrowDownLeft className="text-red-600 dark:text-red-400"  />}
        {percentageChange > 0 && <ArrowUpRight className="text-green-600 dark:text-green-400" />}
        <div>{percentageChange}% vs. last period</div>
      </div>
    </div>
  );
}

export default Trend;
